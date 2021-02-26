import nodemailer, { Transporter } from 'nodemailer';

class SendMailService {
  private _client: Transporter;

  constructor() {
    nodemailer
      .createTestAccount()
      .then(account => {
        const transporter = nodemailer.createTransport({
          host: account.smtp.host,
          port: account.smtp.port,
          secure: account.smtp.secure,
          auth: {
            user: account.user,
            pass: account.pass
          }
        });

        this._client = transporter;
      });
  }

  async execute(to: string, subject: string, body: string) {
   const message =  await this._client.sendMail({
      to,
      subject,
      html: body,
      from: "NPS <noreply@nps.com.br>"
    });

    console.log('Message sent: %s', message.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}

export default new SendMailService();