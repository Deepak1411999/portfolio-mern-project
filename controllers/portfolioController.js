
const nodemailer = require("nodemailer");


//transport

//use ethereal.email for fack email
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'parker.osinski@ethereal.email',
        pass: 'TrVCNxN1EVWANr9xJk'
    }
});



const sendEmailController = (req, res) => {
    try {
        const { name, email, msg } = req.body;

        //validation
        if (!name || !email || !msg) {
            return res.status(500).send({
                success: false,
                message: "Please Provide All Fields",
            });
        }
        //email matter
        transporter.sendMail({
            to: "parker.osinski@ethereal.email",
            from: "parker.osinski@ethereal.email",
            subject: "Regarding Mern Portfolio App",
            html: `
          <h5>Detail Information</h5>
          <ul>
            <li><p>Name : ${name}</p></li>
            <li><p>Email : ${email}</p></li>
            <li><p>Message : ${msg}</p></li>
          </ul>
        `,
        });

        return res.status(200).send({
            success: true,
            message: "Your Message Send Successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Send Email API Error",
            error,
        });
    }
};


module.exports = { sendEmailController };

