import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FaCode, FaSearch, FaComments } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero */}
      <Box bg="gray.800" color="white" py={24}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <Box>
              <Heading as="h1" size="2xl" mb={4}>
                Find Top Software Talent with{" "}
                <Text as="span" color="teal.400">
                  Particles
                </Text>
              </Heading>
              <Text fontSize="xl">Particles connects companies with pre-vetted developers specializing in modern web technologies like React, Node, .NET, Go, JavaScript and more. Easily search, filter and message candidates to find your perfect hire.</Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4} mt={8}>
                <Button size="lg" colorScheme="teal">
                  View Developers
                </Button>
                <Button size="lg" variant="outline" colorScheme="white">
                  Sign Up
                </Button>
              </Stack>
            </Box>
            <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnMlMjBjb2xsYWJvcmF0aW5nfGVufDB8fHx8MTcxMzAzMTYyOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Developers collaborating" />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading textAlign="center" mb={16}>
            Why Hire with Particles
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box bg="gray.50" p={8} rounded="md" textAlign="center">
              <FaCode size={48} color="#319795" />
              <Heading size="lg" mt={4} mb={4}>
                Pre-Vetted Talent
              </Heading>
              <Text>Our developers go through a rigorous screening process to ensure they meet the highest standards.</Text>
            </Box>
            <Box bg="gray.50" p={8} rounded="md" textAlign="center">
              <FaSearch size={48} color="#319795" />
              <Heading size="lg" mt={4} mb={4}>
                Easy Search & Filter
              </Heading>
              <Text>Quickly find candidates with the right skills, experience, and availability for your project.</Text>
            </Box>
            <Box bg="gray.50" p={8} rounded="md" textAlign="center">
              <FaComments size={48} color="#319795" />
              <Heading size="lg" mt={4} mb={4}>
                Direct Messaging
              </Heading>
              <Text>Communicate directly with developers to discuss project details and make offers.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA */}
      <Box bg="teal.500" color="white" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading size="xl" mb={8}>
            Ready to Find Your Next Developer?
          </Heading>
          <Button size="lg" colorScheme="white" variant="outline">
            View Developers
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
