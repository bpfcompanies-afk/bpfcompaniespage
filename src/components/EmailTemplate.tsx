import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  company?: string;
  service?: string; // <--- AGREGAR ESTO
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  company,
  service, // <--- RECIBIRLO
  message,
}) => (
  <div>
    <h1>Nuevo Lead: {name}</h1>
    <p><strong>Empresa:</strong> {company || 'No especificada'}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Servicio de interés:</strong> {service || 'General'}</p> {/* <--- MOSTRARLO */}
    <hr />
    <p><strong>Mensaje:</strong></p>
    <p>{message}</p>
  </div>
);