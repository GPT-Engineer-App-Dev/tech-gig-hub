import React from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";

const Conversation = () => {
  const { developerId } = useParams();

  const messages = [
    { id: 1, text: "Hello there!", sender: "developer" },
    { id: 2, text: "Hi, how can I help you?", sender: "user" },
  ];

  return (
    <Box>
      <Heading as="h1" size="xl" mb={4}>
        Conversation with Developer {developerId}
      </Heading>
      {messages.map((msg) => (
        <Box key={msg.id} p={4} borderWidth={1} mb={4}>
          <Text>{msg.text}</Text>
          <Text fontSize="sm" color="gray.500">
            Sent by {msg.sender}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default Conversation;
