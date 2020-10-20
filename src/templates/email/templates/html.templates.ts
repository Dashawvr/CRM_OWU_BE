import {EmailActionEnum} from '../../../constants';
import {config} from '../../../configs';

export const htmlTemplates = {
  [EmailActionEnum.FORGOT_PASSWORD]: {
    from: config.EMAIL_USER,
    subject: '[OKTEN CRM] Відновлення паролю',
    templateFileName: 'forgot-password.template'
  }
};
