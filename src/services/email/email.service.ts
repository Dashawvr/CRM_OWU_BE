import * as nodeMailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

import {IEmailParams} from '../../interfaces';
import {config, transportOption} from '../../configs';

class EmailService {
  private transporter: Mail;

  constructor() {
    this.transporter = nodeMailer.createTransport(transportOption);
  }

  async forgotPassword({to, subject, url}: IEmailParams): Promise<void> {
    await this.transporter.sendMail({
      from: `Okten CRM <${config.EMAIL_USER}>`,
      to,
      subject,
      html: `<h1>Welcome to Okten Web UniversITy System </h1>
             <h3>Please, visit on this link :</h3>
        <a href="${url}">Press here</a>`
    });
  }
}

export const emailService = new EmailService();
