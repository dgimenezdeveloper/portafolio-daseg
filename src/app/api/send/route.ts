import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const emailSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." })
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = emailSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ 
        error: 'Datos de entrada inválidos.', 
        details: parsed.error.flatten() 
      }, { status: 400 });
    }

    const { name, email, message } = parsed.data;

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Dirección de envío autorizada por Resend
      to: ['dgimenez.developer@gmail.com'], // Tu correo personal
      subject: `Nuevo Mensaje del Portafolio de: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">
            Nuevo mensaje de tu portafolio
          </h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #06b6d4;">
            <p style="margin: 0 0 10px 0;"><strong>Mensaje:</strong></p>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #888; text-align: center;">
            Este mensaje fue enviado desde tu portafolio web
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Error de Resend:', error);
      return NextResponse.json({ 
        error: 'Error al enviar el correo.', 
        details: error 
      }, { status: 500 });
    }

    return NextResponse.json({ 
      message: '¡Correo enviado con éxito!', 
      data 
    }, { status: 200 });
    
  } catch (error) {
    console.error('Error del servidor:', error);
    return NextResponse.json({ 
      error: 'Error en el servidor.' 
    }, { status: 500 });
  }
}