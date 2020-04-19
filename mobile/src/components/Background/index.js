import LinearGradient from 'react-native-linear-gradient';
import { lighten } from 'polished';

import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#7d40e7', lighten(0.02, '#7d40e7')],
})`
  flex: 1;
`;
