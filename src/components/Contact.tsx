"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';

// Definimos el mismo esquema de validación que en el backend
const formSchema = z.object({
  name: z.string().min(2, "Nombre requerido (mín. 2 caracteres)"),
  email: z.string().email("Correo electrónico inválido"),
  message: z.string().min(10, "Mensaje requerido (mín. 10 caracteres)"),
});

type FormData = z.infer<typeof formSchema>;

type FormState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
};

export default function Contact() {
  const [formState, setFormState] = useState<FormState>({ status: 'idle', message: '' });
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setFormState({ status: 'loading', message: '' });

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('La respuesta del servidor no fue OK');
      }

      setFormState({ status: 'success', message: '¡Mensaje enviado con éxito! Gracias por contactarme.' });
      reset(); // Resetea los campos del formulario
    } catch {
      setFormState({ status: 'error', message: 'Hubo un problema al enviar el mensaje. Inténtalo de nuevo más tarde.' });
    }
  };

  return (
    <section id="contacto" className="py-24 px-4 bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¡Hablemos!</h2>
          <p className="text-gray-400 text-lg mb-10">
            ¿Tienes un proyecto en mente? Completa el formulario y me pondré en contacto lo antes posible.
          </p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 text-left"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
            <input {...register('name')} id="name" className="input-field" />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input {...register('email')} id="email" className="input-field" />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mensaje</label>
            <textarea {...register('message')} id="message" rows={5} className="input-field" />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={formState.status === 'loading'}
              className="bg-cyan-600 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 hover:bg-cyan-700 hover:scale-105 disabled:bg-gray-500 disabled:scale-100"
            >
              {formState.status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </div>
          {formState.status === 'success' && <p className="text-green-500 mt-4">{formState.message}</p>}
          {formState.status === 'error' && <p className="text-red-500 mt-4">{formState.message}</p>}
        </motion.form>
      </div>
      <style jsx>{`
        .input-field {
          width: 100%;
          background-color: #1F2937; /* bg-gray-800 */
          border: 1px solid #374151; /* border-gray-700 */
          border-radius: 0.375rem;
          padding: 0.5rem 1rem;
          color: white;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input-field:focus {
          border-color: #06b6d4; /* border-cyan-500 */
          box-shadow: 0 0 0 2px #06b6d4;
        }
      `}</style>
    </section>
  );
}