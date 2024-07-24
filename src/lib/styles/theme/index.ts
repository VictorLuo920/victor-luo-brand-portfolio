import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';
import { config } from './config';
import { fonts } from './fonts';
import { semanticTokens } from './semantic-tokens';

const customTheme = extendTheme({
  fonts,
  colors,
  config,
  components,
  semanticTokens,
});

export default customTheme;
