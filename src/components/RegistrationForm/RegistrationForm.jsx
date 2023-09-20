import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { authOperations } from '../../redux/app/auth';

import { PasswordEyeButton } from 'components/Buttons';
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const formik = useFormik({
    initialValues,

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Mínimo 3 caracteres')
        .max(254, 'Máximo 254 caracteres')
        .matches(
          /[A-z]/,
          'Por favor, elija el teclado en inglés',
        )
        .required("Campo obligatorio"),

      email: Yup.string()
        .email('Correo electrónico no válido')
        .max(254, 'Máximo 254 caracteres')
        .matches(
          /([a-z0-9_.-]{3,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/,
          'El correo electrónico debe contener al menos 3 caracteres',
        )
        .required("Campo obligatorio"),

      password: Yup.string()
        .min(8, 'Mínimo 8 caracteres')
        .max(100, 'Мáximo 100 caracteres')
        .matches(
          /(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z]{8,}/,
          'La contraseña debe consistir en letras latinas y números sin caracteres especiales',
        )
        .required("Обов'язково"),
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
      <Title>Registro</Title>

      <Form onSubmit={formik.handleSubmit}>
        <FormList>
          <FormItem>
            <Label htmlFor="name">Nombre *</Label>

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
            <Label htmlFor="email">Correo Electrónico *</Label>

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
            <Label htmlFor="password">Contraseña *</Label>

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
          <Button type="submit">Registrarse</Button>

          <StyledNavLink to="/login">Iniciar Sesión</StyledNavLink>
        </ButtonsContainer>
      </Form>
    </Thumb>
  );
};
