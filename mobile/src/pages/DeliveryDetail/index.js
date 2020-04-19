import React from 'react';
import { StatusBar, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';

import api from '~/services/api';

import {
  Container,
  Background,
  ContentContainer,
  Card,
  CardContainer,
  CardColumns,
  TitleContainer,
  Title,
  CardLabel,
  CardInfo,
  Status,
  Actions,
  Action,
  ActionTitle,
} from './styles';

export default function DeliveryDetail() {
  const auth = useSelector((state) => state.auth);
  const navigation = useNavigation();
  const route = useRoute();
  const { delivery } = route.params;

  async function handleTakeDelivery() {
    async function takeDelivery() {
      try {
        await api.put(`/deliverymen/${auth.id}/deliveries/${delivery.id}`, {
          start_date: new Date(),
        });
      } catch (err) {
        Alert.alert('Horário de retirda não permitido');
      }
    }

    Alert.alert(
      'Confirmar retirada',
      'Deseja retirar esta encomenda para entrega?',
      [
        {
          text: 'Cancelar',
          style: 'destructive',
        },
        {
          text: 'Confirmar',
          onPress: takeDelivery,
        },
      ],
      {
        cancelable: false,
      }
    );
  }

  return (
    <Container>
      <StatusBar backgroundColor="#7d40e7" barStyle="light-content" />

      <Background />
      <ContentContainer>
        <Card>
          <TitleContainer>
            <Icon name="local-shipping" color="#7d40e7" size={20} />
            <Title>Informações da entrega</Title>
          </TitleContainer>
          <CardLabel>DESTINATÁRIO</CardLabel>
          <CardInfo>{delivery.recipient.name}</CardInfo>
          <CardLabel>ENDEREÇO DE ENTREGA</CardLabel>
          <CardInfo>
            {delivery.recipient.street}, {delivery.recipient.number},{' '}
            {delivery.recipient.city} - {delivery.recipient.state},{' '}
            {delivery.recipient.postcode}
          </CardInfo>
          <CardLabel>PRODUTO</CardLabel>
          <CardInfo>{delivery.product}</CardInfo>
        </Card>

        <Card>
          <TitleContainer>
            <Icon name="event" color="#7d40e7" size={20} />
            <Title>Situação da entrega</Title>
          </TitleContainer>
          <CardLabel>STATUS</CardLabel>
          <Status>{delivery.status}</Status>
          <CardColumns>
            <CardContainer>
              <CardLabel>DATA DE RETIRADA</CardLabel>
              <CardInfo>{delivery.formated_start}</CardInfo>
            </CardContainer>
            <CardContainer>
              <CardLabel>DATA DE ENTREGA</CardLabel>
              <CardInfo>{delivery.formated_end}</CardInfo>
            </CardContainer>
          </CardColumns>
        </Card>

        <Actions>
          <Action
            onPress={() => navigation.navigate('ReportProblem', { delivery })}
          >
            <Icon name="highlight-off" color="#E74040" size={20} />
            <ActionTitle>Informar{`\n`}Problema</ActionTitle>
          </Action>
          <Action onPress={() => navigation.navigate('Problems', { delivery })}>
            <Icon name="info-outline" color="#E7BA40" size={20} />
            <ActionTitle>Visualizar{`\n`}Problemas</ActionTitle>
          </Action>
          {delivery.status === 'PENDENTE' ? (
            <Action onPress={handleTakeDelivery}>
              <Icon name="local-shipping" color="#7d40e7" size={20} />
              <ActionTitle>Realizar{`\n`}Retirada</ActionTitle>
            </Action>
          ) : (
            <Action
              onPress={() =>
                navigation.navigate('DeliveryConfirm', { delivery })
              }
            >
              <Icon name="check-circle" color="#7d40e7" size={20} />
              <ActionTitle>Confirmar{`\n`}Entrega</ActionTitle>
            </Action>
          )}
        </Actions>
      </ContentContainer>
    </Container>
  );
}
