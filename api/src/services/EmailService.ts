import moment from 'moment'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv';
dotenv.config();

export const mail = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT) : 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS
    }
})

export const sendEmailNewExpensesSuccess = async (subject: string, mailTo: string, body: any) => {
    await mail.sendMail({
        from: `Teste prático <${process.env.EMAIL_FROM}>`,
        to: mailTo,
        subject: subject,
        html:
            `<div>
                <h3>Dados da Despesa</h3>
                <p><strong>Descrição:</strong> ${body.description}</p>
                <p><strong>Data de Cadastro:</strong> ${moment(body.date).format('DD/MM/YYYY')} </p>
                <p><strong>Valor:</strong> ${body.value} </p>
            </div>`
    })
}
