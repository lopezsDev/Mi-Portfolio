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
        from: email, // Remitente será el correo electrónico ingresado en el formulario
        to: 'lopezs.dev@gmail.com', // Destinatario
        subject: `${subject}`, // Asunto del correo electrónico
        text: `${message}`, // Cuerpo del correo electrónico
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response('Email sent successfully', { status: 200 });
    } catch (error) {
        console.error('Error sending the e-mail:', error);
        return new Response('Error sending e-mail', { status: 500 });
    }
}