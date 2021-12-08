import { request } from '../axios';
import { IEmail } from '../interfaces';

class EmailService {
  async sendEmail(email: IEmail) {
    return await request.post('/email', email);
  }
}

export default new EmailService();
