const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(express.json());

// Enable CORS for all routes
app.use(cors());

app.post('/send-email', async (req, res) => {
    const { name, email, phone, industry, businessNeed, message } = req.body;
    console.log('Received request data:', req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'annyfaruq17@gmail.com', // replace with your Gmail address
            pass: 'zawq hmyu tbzr jmqj', // replace with your Gmail app-specific password
        },
    });

    const mailOptions = {
        from: email,
        to: 'annyfaruq17@gmail.com', // replace with the admin email to receive messages
        subject: 'New Contact Form Submission',
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Industry: ${industry}
            BusinessNeed: ${businessNeed}
            Message: ${message}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error); // Detailed error log for troubleshooting
        res.status(500).send('Failed to send email');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
