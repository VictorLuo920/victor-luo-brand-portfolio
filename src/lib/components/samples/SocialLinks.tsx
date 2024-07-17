'use client';

import { ButtonGroup, IconButton, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <ButtonGroup alignSelf="center" my={2}>
      <IconButton
        aria-label="GitHub"
        as={Link}
        href="https://github.com/Victorluo920"
        variant="ghost"
        icon={<FaGithub />}
        fontSize="32px"
      />
      <IconButton
        aria-label="LinkedIn"
        as={Link}
        href="https://linkedin.com/in/victorwluo/"
        variant="ghost"
        icon={<FaLinkedin />}
        fontSize="32px"
      />
      <IconButton
        aria-label="Twitter"
        as={Link}
        href="https://twitter.com/victorwluo"
        variant="ghost"
        icon={<FaTwitter />}
        fontSize="32px"
      />
      <IconButton
        aria-label="Instagram"
        as={Link}
        href="https://instagram.com/victorwluo/"
        variant="ghost"
        icon={<FaInstagram />}
        fontSize="32px"
      />
    </ButtonGroup>
  );
}
