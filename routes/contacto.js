
const { Router } = require('express');
const nodemailer = require('nodemailer');

const router = Router();

// Configurar el transporte de correo electrónico
const transporter = nodemailer.createTransport({
  service: 'gmail', // Servicio de correo electrónico
  auth: {
    user: 'correo', // Remplazar por dirección de correo electrónico
    pass: 'token' // Remplazar por token de pass de google
  }
});

router.post('/enviarCorreo', (req, res) => {
  const { name, email, message } = req.body;

  const contentHtml = `
    <h1>Información del usuario</h1>
    <ul>
      <li>Nombre: ${name}</li>
      <li>Correo: ${email}</li>
      <li>Mensaje: ${message}</li>
    </ul>
  `;

  // Configurar los detalles del correo electrónico
  const mailOptions = {
    from: email, // Correo del remitente
    to: 'haz.azu.calderonbonilla@gmail.com', // Correo del destinatario
    subject: 'Contacto desde la web', // Asunto del correo
    text: message,
    // Cuerpo del correo en formato HTML
    html: contentHtml // Cuerpo del correo en formato HTML
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.send('Correo enviado correctamente');
    }
  });
});

module.exports = router;
