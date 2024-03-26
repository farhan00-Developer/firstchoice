import { Transport } from "../utils/Transporter.js";

export const sendEmail = async (req, res) => {
    try {
        const info = await Transport.sendMail({
            from: '<lorenz.stokes1@ethereal.email>',
            to: 'farhanmalik3979@gmail.com',
            subject: 'Hello',
            text: 'Hello World!',
            html: '<b>Hello Bold</b>',
        });

        console.log("Message sent: %s", info.messageId);
        res.status(200).json({ msg: "Email sent" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
};

