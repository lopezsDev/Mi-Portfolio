import nodemailer from 'nodemailer';

export async function POST(request) {
    const { email, subject, message } = await request.json();

    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    
    const mailOptions = {
        from: email, // remitente
        to: 'lopezs.dev@gmail.com', // destinatario
        subject: `${subject}`, // Asunto
        text: `${message}`, // Cuerpo
    };

    try {
        // Envio de correo electrónico
        await transporter.sendMail(mailOptions);
        return new Response('Correo electrónico enviado exitosamente', { status: 200 });
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        return new Response('Error al enviar el correo electrónico', { status: 500 });
    }
}