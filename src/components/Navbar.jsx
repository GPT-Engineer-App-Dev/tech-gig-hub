import React from "react";
import { Box, Flex, Spacer, Heading, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.800" color="white">
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          <Link as={RouterLink} to="/">
            Particles
          </Link>
        </Heading>
      </Flex>

      <Spacer />

      <Box display={{ base: "none", md: "flex" }} mt={{ base: 4, md: 0 }}>
        <Link as={RouterLink} to="/developers" mr={6}>
          Developers
        </Link>
        <Button colorScheme="teal" variant="outline">
          Post a Job
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
