import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';
import { Form } from '@unform/mobile';
import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.png';

import { Container, UnInput, SubmitButton } from './styles';
import Background from '~/components/Background';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const formRef = useRef(null);

  function handleSubmit({ id }) {
    dispatch(signInRequest(id));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <UnInput
            name="id"
            keyboardType="number-pad"
            placeholder="Informe seu ID no cadastro"
            autoCorrect={false}
            returnKeyType="send"
            autoCapitalize="none"
          />
          <SubmitButton
            onPress={() => formRef.current.submitForm()}
            loading={loading}
          >
            Entrar no sistema
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
