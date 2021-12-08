import styles from './EmailForm.module.scss';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import emailService from '../../services/email';
import { IEmail } from '../../interfaces';

import Button from '../Button/Button';
import { InputField, TextAreaField } from '../fields/FormikFields';
import { Form, Formik, FormikHelpers } from 'formik';

const EmailForm = () => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    email: Yup.string()
      .required('Email is required!')
      .email('Invalid email address!'),
    subject: Yup.string().required('Subject is required!'),
    message: Yup.string().required('Message is required!'),
  });

  const handleSubmit = async (data: IEmail, actions: FormikHelpers<IEmail>) => {
    try {
      await emailService.sendEmail(data);
      toast.success('Email sent successfully!');
      actions.resetForm();
      actions.setSubmitting(false);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.row}>
            <InputField
              name="name"
              placeholder="Name"
              wrapperClassName={styles.row__input}
            />
            <InputField
              name="email"
              placeholder="Email"
              wrapperClassName={styles.row__input}
            />
            <InputField
              name="subject"
              placeholder="Subject"
              wrapperClassName={styles.row__input}
            />
          </div>
          <TextAreaField name="message" placeholder="Message" />
          <Button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
          >
            Send Message
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EmailForm;
