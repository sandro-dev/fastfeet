import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Ball,
  Line,
  Progress,
  DescriptionStatus,
  Status,
} from './styles';

export default function CardStatus({ status }) {
  return (
    <Container>
      <Progress>
        <Ball
          marked={
            status === 'PENDENTE' ||
            status === 'RETIRADA' ||
            status === 'ENTREGUE'
          }
        />
        <Line />
        <Ball marked={status === 'ENTREGUE' || status === 'RETIRADA'} />
        <Line />
        <Ball marked={status === 'ENTREGUE'} />
      </Progress>

      <DescriptionStatus>
        <Status>Aguardando Retirada</Status>
        <Status>Retirada</Status>
        <Status>Entregue</Status>
      </DescriptionStatus>
    </Container>
  );
}

CardStatus.propTypes = {
  status: PropTypes.string.isRequired,
};
