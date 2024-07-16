'use client';

import { ButtonGroup, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <ButtonGroup alignSelf="center" my={2}>
      <IconButton
        aria-label="GitHub"
        variant="ghost"
        icon={<FaGithub />}
        fontSize="32px"
      />
      <IconButton
        aria-label="LinkedIn"
        variant="ghost"
        icon={<FaLinkedin />}
        fontSize="32px"
      />
      <IconButton
        aria-label="Twitter"
        variant="ghost"
        icon={<FaTwitter />}
        fontSize="32px"
      />
      <IconButton
        aria-label="Instagram"
        variant="ghost"
        icon={<FaInstagram />}
        fontSize="32px"
      />
    </ButtonGroup>
  );
}
