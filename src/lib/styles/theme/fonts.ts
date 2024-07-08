import type { DeepPartial, Theme } from '@chakra-ui/react';
import {
  Red_Hat_Text as FontBody,
  Caveat as FontHeading,
} from 'next/font/google';

export const fontBody = FontBody({
  subsets: ['latin'],
  variable: '--font-body',
});

export const fontHeading = FontHeading({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const fonts: DeepPartial<Theme['fonts']> = {
  heading: fontHeading.style.fontFamily,
  body: fontBody.style.fontFamily,
};
