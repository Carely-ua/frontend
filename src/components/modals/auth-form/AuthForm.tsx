'use client';

import { FC, useState } from 'react';
import { Form, FormikProps, Formik } from 'formik';
import { object, string } from 'yup';
import { signIn } from 'next-auth/react';
import { Button } from '@/ui-kit';
import { PhoneInput, SmsCodeInput } from '../../inputs';
import styles from './AuthForm.module.scss';

interface Values {
  phone: string;
  code: string;
}

const initialValues = {
  phone: '',
  code: '',
};

const authFormSchema = object({
  phone: string()
    .required()
    .test(val => {
      return !val.includes('_');
    }),
  code: string()
    .required()
    .test(val => {
      return !val.includes('_');
    }),
});

export interface AuthFormProps {
  successSignInHandler?(): void;
}

export const AuthForm: FC<AuthFormProps> = ({ successSignInHandler }) => {
  const [codeError, setCodeError] = useState('');

  const submitHandler = async (values: Values) => {
    setCodeError('');
    const res = await signIn('credentials', {
      phone: values.phone,
      code: values.code.replace('-', ''),
      redirect: false,
    });
    if (res?.error) {
      setCodeError('Код не співпадає');
    } else {
      successSignInHandler?.();
    }
  };

  return (
    <div className={styles.authForm}>
      <Formik
        validationSchema={authFormSchema}
        initialValues={initialValues}
        onSubmit={submitHandler}>
        {({ handleSubmit }: FormikProps<Values>) => {
          return (
            <Form>
              <div className={styles.inputs}>
                <PhoneInput name="phone" label="Телефон" />
                <SmsCodeInput inputError={codeError} name="code" label="Код з SMS" />
              </div>
              <Button onClick={() => handleSubmit()}>Підтвердити</Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
