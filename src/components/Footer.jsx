import React from "react";
import { Box, SimpleGrid, Link, Text } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={10}>
      <SimpleGrid columns={[1, 2, 4]} spacing={8} maxW="container.lg" mx="auto">
        <Box>
          <Link href="#">About</Link>
        </Box>
        <Box>
          <Link href="#">Contact</Link>
        </Box>
        <Box>
          <Link href="#">Terms of Service</Link>
        </Box>
        <Box>
          <Link href="#">Privacy Policy</Link>
        </Box>
      </SimpleGrid>

      <Box textAlign="center" mt={8}>
        <Link href="#" mr={4}>
          <FaTwitter />
        </Link>
        <Link href="#" mr={4}>
          <FaGithub />
        </Link>
        <Link href="#">
          <FaLinkedin />
        </Link>
      </Box>

      <Text textAlign="center" mt={4} fontSize="sm">
        &copy; {new Date().getFullYear()} Particles. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
