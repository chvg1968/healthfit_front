import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { authOperations } from '../../redux/app/auth';

import { PasswordEyeButton } from '../../components/Buttons';
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
  StyledNavLink,
} from './RegistrationForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegistrationForm = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const formik = useFormik({
    initialValues,

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, `${t('validateMin')}`)
        .max(254, `${t('validateMax')}`)
        .matches(
          /[A-z]/,
          `${t('selectKeyboard')}`,
        )
        .required(`${t('mandatoryField')}`),

      email: Yup.string()
        .email(`${t('wrongEmail')}`)
        .max(254, `${t('validateMax')}`)
        .matches(
          /([a-z0-9_.-]{3,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/,
          `${t('emailAtLeast')}`,
        )
        .required(`${t('mandatoryField')}`),

      password: Yup.string()
        .min(8, `${t('passwordMin')}`)
        .max(100, `${t('passwordMax')}`)
        .matches(
          /(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z]{8,}/,
          `${t('charMatch')}`,
        )
        .required(`${t('mandatoryField')}`),
    }),

    onSubmit: values => {
      const { name, email, password } = values;
      dispatch(authOperations.actionRegister({ name, email, password })).then(
        ({ payload }) => {
          if (payload?.code === 201) {
            navigate('/login', { replace: true });
          }
        },
      );

      formik.resetForm();
    },
  });

  return (
    <Thumb>
      <Title>{t('register')}</Title>

      <Form onSubmit={formik.handleSubmit}>
        <FormList>
          <FormItem>
            <Label htmlFor="name">{t('name')}</Label>

            <Input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <Message>{formik.errors.name}</Message>
            ) : null}
          </FormItem>
          <FormItem>
            <Label htmlFor="email">{t('emailLabel')}</Label>

            <Input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
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
          <Button type="submit">{t('registration')}</Button>

          <StyledNavLink to="/login">{t('login')}</StyledNavLink>
        </ButtonsContainer>
      </Form>
    </Thumb>
  );
};
