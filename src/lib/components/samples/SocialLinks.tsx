'use client';

import { ButtonGroup, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <ButtonGroup alignSelf="center">
      <IconButton aria-label="GitHub" variant="ghost" icon={<FaGithub />} />
      <IconButton aria-label="LinkedIn" variant="ghost" icon={<FaLinkedin />} />
      <IconButton aria-label="Twitter" variant="ghost" icon={<FaTwitter />} />
      <IconButton
        aria-label="Instagram"
        variant="ghost"
        icon={<FaInstagram />}
      />
    </ButtonGroup>
  );
}
