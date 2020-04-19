import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Icon, Text } from './styles';

export default function Avatar({ isPhoto, custom, fullname, url }) {
  if (isPhoto) {
    return <Image source={{ uri: url }} custom={custom} />;
  }

  const name = fullname?.split(' ');
  const fname = name.shift();
  const lname = name.pop();
  const initials = fname?.split('').shift() + lname?.split('').shift();

  return (
    <Container custom={custom}>
      <Icon>{fullname ? <Text custom={custom}>{initials}</Text> : null}</Icon>
    </Container>
  );
}

Avatar.propTypes = {
  fullname: PropTypes.string,
  isPhoto: PropTypes.bool,
  url: PropTypes.string,
  custom: PropTypes.shape({
    size: PropTypes.number,
    font: PropTypes.number,
  }),
};

Avatar.defaultProps = {
  fullname: '',
  isPhoto: false,
  url: '',
  custom: PropTypes.shape({
    size: 136,
    font: 60,
  }),
};
