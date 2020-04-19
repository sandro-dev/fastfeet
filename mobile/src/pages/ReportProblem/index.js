import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import api from '~/services/api';

import {
  Container,
  Background,
  ContentContainer,
  ContainerForm,
  Input,
  SubmitButton,
} from './styles';

export default function SignIn() {
  const route = useRoute();
  const { delivery } = route.params;
  const [description, setDescription] = useState('');

  async function handleSubmit() {
    console.tron.log(description);
    try {
      await api.post(`/delivery/${delivery.id}/problems`, { description });
    } catch (err) {
      Alert.alert('Não foi possível relatar o problema');
    }
  }

  return (
    <>
      <Background />
      <Container>
        <ContentContainer>
          <ContainerForm>
            <Input
              placeholder="Inclua aqui o problema que ocorreu na entrega."
              autoCorrect
              returnKeyType="send"
              multiline
              numberOfLines={10}
              textAlignVertical="top"
              value={description}
              onChangeText={setDescription}
            />

            <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
          </ContainerForm>
        </ContentContainer>
      </Container>
    </>
  );
}
