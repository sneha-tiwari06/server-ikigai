const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;


// const corsOptions = {
//   origin: function (origin, callback) {
//     callback(null, origin);
//   },
//   credentials: true,
// };

app.use(cors());
app.use(bodyParser.json());
const extractUTMParams = (req, res, next) => {
    const { utm_source, utm_medium, utm_campaign, utm_term, utm_content } = req.body;

    if (utm_source) {
        req.utm_source = utm_source;
    }
    if (utm_medium) {
        req.utm_medium = utm_medium;
    }
    if (utm_campaign) {
        req.utm_campaign = utm_campaign;
    }
    if (utm_term) {
        req.utm_term = utm_term;
    }
    if (utm_content) {
        req.utm_content = utm_content;
    }

    next();
};
app.post('/api/contact', extractUTMParams, async (req, res) => {
    const { name, phone, email, msg } = req.body;
    const { utm_source, utm_medium, utm_campaign, utm_term, utm_content } = req;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'devfreelance23m@gmail.com',
            pass: 'crmp helz dgxp qidj',
        },
    });

    const mailOptions = {
        from: 'tiwarisneha491@gmail.com',
        to: 'tiwarisneha491@gmail.com',
        cc: ['preeti@theperfectionist.in', 'preetilakra0707@gmail.com'],
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${msg},\n` +
              `UTM Source: ${utm_source || 'Not provided'}\n` +
              `UTM Medium: ${utm_medium || 'Not provided'}\n` +
              `UTM Campaign: ${utm_campaign || 'Not provided'}\n` +
              `UTM Term: ${utm_term || 'Not provided'}\n` +
              `UTM Content: ${utm_content || 'Not provided'}`,
};

try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
} catch (error) {
    console.error('Error sending email', error);
    res.status(500).send('Error sending email');
}
});
app.post('/api/book', async (req, res) => {
    const { fullName, mobileNumber, email, msg } = req.body;
    const { utm_source, utm_medium, utm_campaign, utm_term, utm_content } = req;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'devfreelance23m@gmail.com',
            pass: 'crmp helz dgxp qidj',
        },
    });

    const mailOptions = {
        from: 'tiwarisneha491@gmail.com',
        to: 'tiwarisneha491@gmail.com',
        cc: ['preeti@theperfectionist.in', 'preetilakra0707@gmail.com'],
        subject: 'New Appointment Form Submission',
        text: `Full Name: ${fullName}\nMobile Number: ${mobileNumber}\nEmail: ${email}\nmsg: ${msg}\n\n` +
        `UTM Source: ${utm_source || 'Not provided'}\n` +
        `UTM Medium: ${utm_medium || 'Not provided'}\n` +
        `UTM Campaign: ${utm_campaign || 'Not provided'}\n` +
        `UTM Term: ${utm_term || 'Not provided'}\n` +
        `UTM Content: ${utm_content || 'Not provided'}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email', error);
        res.status(500).send('Error sending email');
    }
});
app.post('/api/modal', async (req, res) => {
    const { fullName2, mobileNumber2, email2, msg2 } = req.body;
    const { utm_source, utm_medium, utm_campaign, utm_term, utm_content } = req;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'devfreelance23m@gmail.com',
            pass: 'crmp helz dgxp qidj',
        },
    });

    const mailOptions = {
        from: 'tiwarisneha491@gmail.com',
        to: 'tiwarisneha491@gmail.com',
        cc: ['preeti@theperfectionist.in', 'preetilakra0707@gmail.com'],
        subject: 'New Appointment Form Submission',
        text: `Full Name: ${fullName2}\nMobile Number: ${mobileNumber2}\nEmail: ${email2}\nmsg: ${msg2}\n\n` +
        `UTM Source: ${utm_source || 'Not provided'}\n` +
        `UTM Medium: ${utm_medium || 'Not provided'}\n` +
        `UTM Campaign: ${utm_campaign || 'Not provided'}\n` +
        `UTM Term: ${utm_term || 'Not provided'}\n` +
        `UTM Content: ${utm_content || 'Not provided'}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email', error);
        res.status(500).send('Error sending email');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});