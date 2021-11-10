let nodemailer = require("nodemailer");

export default (req, res) => {
  const body = JSON.parse(req.body);

 // create transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL, // your email
        clientId: process.env.GMAIL_CLIENT_ID, // oauth cliend id 
        clientSecret: process.env.GMAIL_CLIENT_SECRET, // secret 
        refreshToken: process.env.REFRESH_TOKEN, // refresh token 
        accessToken: process.env.ACCESS_TOKEN // access token
    }
  });

  const message = `
    Name: ${body.firstname} ${body.lastname} \r\n
    Email: ${body.email}\r\n
    Phone number: ${body.phone}\r\n
    Message: ${body.message}\r\n
    `;

  const mailData = {
    from: "admin@estetikadent.ba",
    to: "nermin@forgeit.qa",
    subject: `Poruka sa webstranice Estetika Dent`,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  // send an email
  transporter.sendMail(mailData, function (err, info) {
    if (err) res.json({ error: `Desila se greška. Pokušajte ponovo.${err}` });
    else
      res.json({
        message: `Uspjesno ste se prijavili na ${body.course}`,
      });
  });
  res.status(200);
};
