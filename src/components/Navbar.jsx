import React from "react";
import { Box, Flex, Spacer, Heading, Button, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

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
        <Link as={RouterLink} to="/messages" mr={6}>
          Messages
        </Link>
        <Link as={RouterLink} to="/jobs" mr={6}>
          Jobs
        </Link>
        <Button as={RouterLink} to="/post-job" colorScheme="teal" variant="outline" mr={6}>
          Post a Job
        </Button>
        {token ? (
          <>
            <Text mr={6}>Welcome, {localStorage.getItem("username")}</Text>
            <Button onClick={logout} colorScheme="red" variant="outline">
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button as={RouterLink} to="/login" mr={3}>
              Login
            </Button>
            <Button as={RouterLink} to="/register">
              Register
            </Button>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
