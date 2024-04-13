import React from "react";
import { Box, Heading, Text, Button, useDisclosure } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";

const JobCard = ({ job }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box borderWidth={1} borderRadius="lg" p={4} mb={4}>
      <Heading as="h3" size="md" mb={2}>
        {job.title}
      </Heading>
      <Text mb={2}>{job.company}</Text>
      <Text mb={2}>{job.location}</Text>
      <Text mb={4}>{job.description}</Text>
      <Text mb={2}>
        <strong>Required Skills:</strong> {job.skills}
      </Text>
      <Text mb={4}>
        <strong>Application Deadline:</strong> {job.deadline}
      </Text>
      <Button colorScheme="teal" onClick={onOpen}>
        Apply
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Application</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to apply for this job?</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Confirm
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default JobCard;
