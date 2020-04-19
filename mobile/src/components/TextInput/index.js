import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { TInput } from './styles';

function Input({ styles, ...rest }, ref) {
  return <TInput styles={styles} {...rest} ref={ref} />;
}

Input.propTypes = {
  styles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  styles: {},
};

export default forwardRef(Input);
