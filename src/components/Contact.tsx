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
    <section id="contacto" className="section-shell">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-primary">¡Hablemos!</h2>
          <p className="text-muted text-lg mt-3">
            ¿Tienes un proyecto en mente? Completa el formulario y me pondré en contacto lo antes posible.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 space-y-5 rounded-3xl border border-soft bg-surface px-6 py-8 text-left shadow-card-soft"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-semibold text-secondary">Nombre</label>
            <input
              {...register('name')}
              id="name"
              className="w-full rounded-2xl border border-soft bg-surface px-4 py-3 text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-semibold text-secondary">Email</label>
            <input
              {...register('email')}
              id="email"
              className="w-full rounded-2xl border border-soft bg-surface px-4 py-3 text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-semibold text-secondary">Mensaje</label>
            <textarea
              {...register('message')}
              id="message"
              rows={5}
              className="w-full rounded-2xl border border-soft bg-surface px-4 py-3 text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
          </div>
          <div className="pt-3 text-center">
            <button
              type="submit"
              disabled={formState.status === 'loading'}
              className="btn-ghost disabled:cursor-not-allowed disabled:opacity-70"
            >
              {formState.status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </div>
          {formState.status === 'success' && <p className="text-green-500 text-center">{formState.message}</p>}
          {formState.status === 'error' && <p className="text-red-500 text-center">{formState.message}</p>}
        </motion.form>
      </div>
    </section>
  );
}