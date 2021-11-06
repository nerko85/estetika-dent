let nodemailer = require("nodemailer");

export default (req, res) => {
  const body = JSON.parse(req.body);

  // const transporter = nodemailer.createTransport(
  //   nodemailerSendgrid({
  //     apiKey: process.env.SENDGRID_API_KEY,
  //   })
  // );

  let transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "nermin@forgeit.qa", // generated ethereal user
      pass: "Nermin1!", // generated ethereal password
    },
  });

  const message = `
    Name: ${body.firstname} ${body.lastname} \r\n
    Email: ${body.email}\r\n
    Phone number: ${body.phone}\r\n
    Message: ${body.message}\r\n
    `;

  const mailData = {
    from: "admin@estetikadent.ba",
    to: "estetikadent@teol.net",
    subject: `Poruka sa webstranice Estetika Dent`,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) res.json({ error: `Desila se greška. Pokušajte ponovo.${err}` });
    else
      res.json({
        message: `Uspjesno ste se prijavili na ${body.course}`,
      });
  });
  res.status(200);
};
