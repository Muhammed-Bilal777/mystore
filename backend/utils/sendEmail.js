import nodemailer from "nodemailer"


export const sendEmail = async (options)=>{
    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST  ,
        port: process.env.SMTP_PORT ,
        auth: {
          user:process.env.SMTP_USER ,
          pass:process.env.SMTP_PASS,
        }
      });

      const message = {
        from : `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        html:options.message
      }

      await transport.sendMail(message)
}