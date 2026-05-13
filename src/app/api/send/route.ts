import React from 'react';
import { EmailTemplate } from '@/src/components/EmailTemplate';
import { ConfirmationTemplate } from '@/src/components/ConfirmationTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body; // <--- AGREGAR service

    const data = await resend.batch.send([
      {
        from: 'Gema Web <sistema@gema.bpfcompanies.com>',
        to: ['bpfcompanies@gmail.com'], // Tu correo real
        subject: `Nuevo Lead: ${name} - Interés: ${service}`,
        react: React.createElement(EmailTemplate, { name, email, company, service: body.service, message }),
      },
      
      {
        from: 'Equipo Gema <contacto@gema.bpfcompanies.com>',
        to: [email],
        subject: '¡Recibimos tu mensaje!',
        react: React.createElement(ConfirmationTemplate, { name }),
      }
    ]);

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}