import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { authOperations } from 'redux/app/auth';

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
import { PasswordEyeButton } from 'components/Buttons';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string()
<<<<<<< HEAD
        .email('Email inválido')
        .min(3, 'Un mínimo de 3 caracteres')
        .max(254, 'Máximo 254 caracteres')
        .required("Obligatorio"),
=======
        .email('Correo electrónico no válido')
        .min(3, 'Mínimo 3 caracteres')
        .max(254, 'Máximo 254 caracteres')
        .required("Campo obligatorio"),
>>>>>>> 56f7a49 (update files)
      password: Yup.string()
        .min(8, 'Mínimo 8 caracteres')
        .max(100, 'Máximo 100 caracteres')
        .matches(
          /[A-z0-9]/,
<<<<<<< HEAD
          'La contraseña debe contener letras y números, sin caracteres especiales.',
        )
        .required("Obligatorio"),
=======
          'La contraseña debe contener letras y números, sin caracteres especiales',
        )
        .required("Campo Obligatorio"),
>>>>>>> 56f7a49 (update files)
    }),
    onSubmit: values => {
      const { email, password } = values;
      dispatch(authOperations.actionLogin({ email, password }));
    },
  });

  return (
    <Thumb>
      <Title>Iniciar sesión</Title>

      <Form onSubmit={formik.handleSubmit}>
        <FormList>
          <FormItem>
<<<<<<< HEAD
            <Label htmlFor="email">Correo electrónico *</Label>
=======
            <Label htmlFor="email">Correo Electrónico *</Label>
>>>>>>> 56f7a49 (update files)
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
          <Button type="submit">Iniciar sesión</Button>
          <StyledLink to="/register">Registrarse</StyledLink>
        </ButtonsContainer>
      </Form>
    </Thumb>
  );
};
