import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { authOperations } from '../../redux/app/auth';
import { useTranslation } from 'react-i18next';


import {
  Thumb,
  Title,
  Form,
  FormList,
  FormItem,
  Label,
  Input,
  Message,
  ButtonsContainer,
  Button,
  StyledLink,
} from './LoginForm.styled';
import { PasswordEyeButton } from '../../components/Buttons';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .email(`${t('wrongEmail')}`)
        .min(3, `${t('validateMin')}`)
        .max(254, `${t('validateMax')}`)
        .required(`${t('mandatoryField')}`),
      password: Yup.string()
        .min(8, `${t('passwordMin')}`)
        .max(100, `${t('passwordMax')}`)
        .matches(
          /[A-z0-9]/,
          `${t('charMatch')}`,
        )
        .required(`${t('mandatoryField')}`),
    }),
    onSubmit: values => {
      const { email, password } = values;
      dispatch(authOperations.actionLogin({ email, password }));
    },
  });
  return (
    <Thumb>
      <Title>{t('login')}</Title>

      <Form onSubmit={formik.handleSubmit}>
        <FormList>
          <FormItem>
            <Label htmlFor="email">{t('emailLabel')}</Label>
            <Input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              password
              value={formik.values.email}
            />

            {formik.touched.email && formik.errors.email ? (
              <Message>{formik.errors.email}</Message>
            ) : null}
          </FormItem>

          <FormItem>
            <Label htmlFor="password">{t('password')}</Label>
            <Input
              id="password"
              name="password"
              type={show ? 'text' : 'password'}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <PasswordEyeButton handleClick={handleClick} show={show} />

            {formik.touched.password && formik.errors.password ? (
              <Message>{formik.errors.password}</Message>
            ) : null}
          </FormItem>
        </FormList>

        <ButtonsContainer>
          <Button type="submit">{t('loginbutton')}</Button>
          <StyledLink to="/register">{t('registration')}</StyledLink>
        </ButtonsContainer>
      </Form>
    </Thumb>
  );
};
