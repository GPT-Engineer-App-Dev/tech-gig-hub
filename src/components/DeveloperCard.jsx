import React from "react";
import { Box, Heading, Image, Text, Button } from "@chakra-ui/react";
import ContactModal from "./ContactModal";

const DeveloperCard = ({ developer }) => {
  return (
    <Box borderWidth={1} borderRadius="lg" p={4}>
      <Image src={developer.image} alt={developer.name} borderRadius="full" boxSize="150px" objectFit="cover" mx="auto" mb={4} />
      <Heading as="h3" size="md" mb={2}>
        {developer.name}
      </Heading>
      <Text mb={2}>{developer.location}</Text>
      <Text mb={4}>{developer.specialties.join(", ")}</Text>
      <ContactModal developer={developer}>
        <Button colorScheme="teal">Message</Button>
      </ContactModal>
    </Box>
  );
};

export default DeveloperCard;
