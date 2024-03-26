import nodemailer from "nodemailer";


export const Transport = nodemailer.createTransport({
    host : 'smtp.ethereal.email',
    port : 587,
    secure: false,
    auth : {
        user: 'lorenz.stokes1@ethereal.email',
        pass: 'GA5nF8EWpT64JKMuK9'
    }
})
