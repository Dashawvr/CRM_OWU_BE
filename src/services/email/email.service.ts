import * as mailer from 'nodemailer';
import * as EmailTemplates from 'email-templates';
import Mail from 'nodemailer/lib/mailer';

import {IUser} from '../../database';
import {htmlTemplates} from '../../templates';
import {config, emailTemplatesConfig, sequelize, transportOption} from '../../configs';
import {EmailActionEnum, UserAction} from '../../constants';
import {tokenizer} from '../../helpers';
import {authService} from '../auth';

class EmailService {
  private transporter: Mail;
  private emailTemplates: EmailTemplates;

  constructor() {
    this.transporter = mailer.createTransport(transportOption);
    this.emailTemplates = new EmailTemplates(emailTemplatesConfig);
  }

  async forgotPassword({id, email}: IUser): Promise<void> {
    const transaction = await sequelize.transaction();
    try {
      const {
        subject,
        from,
        templateFileName
      } = htmlTemplates[EmailActionEnum.FORGOT_PASSWORD];

      const reset_token = tokenizer(UserAction.FORGOT_PASSWORD);

      const resetUrl = `${config.FRONTEND_URL}/auth/forgot-password`;
      const resetPasswordUrl = `${resetUrl}/${reset_token}`;

      await authService.createResetToken({reset_token, user_id: id}, transaction);

      const html = await this.emailTemplates.render(templateFileName, {resetPasswordUrl, resetUrl});

      await this.transporter.sendMail({
        from,
        to: email,
        subject,
        html
      });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
    }
  }
}

export const emailService = new EmailService();
