import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import CardStatus from '~/components/CardStatus';

import {
  Container,
  TitleContainer,
  Title,
  Details,
  Detail,
  TitleDetail,
  InfoDetail,
  TextLink,
} from './styles';

export default function CardItem({ data }) {
  const navigation = useNavigation();

  return (
    <Container>
      <TitleContainer>
        <Icon name="local-shipping" color="#7d40e7" size={20} />
        <Title>Encomenda 0{data.id}</Title>
      </TitleContainer>

      <CardStatus status={data.status} />

      <Details>
        <Detail>
          <TitleDetail>Data</TitleDetail>
          <InfoDetail>{data.formated_start}</InfoDetail>
        </Detail>

        <Detail>
          <TitleDetail>Cidade</TitleDetail>
          <InfoDetail>{data.recipient.city}</InfoDetail>
        </Detail>

        <Detail>
          <TextLink
            onPress={() => navigation.navigate('Detalhes', { delivery: data })}
          >
            Ver detalhes
          </TextLink>
        </Detail>
      </Details>
    </Container>
  );
}

CardItem.propTypes = {
  data: PropTypes.shape({
    status: PropTypes.string,
    formated_start: PropTypes.string,
    recipient: PropTypes.object,
  }),
};

CardItem.defaultProps = {
  data: {},
};
