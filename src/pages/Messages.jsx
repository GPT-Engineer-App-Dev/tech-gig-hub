import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Messages = () => {
  const conversations = [
    { id: 1, developerId: 1, lastMessage: "Hello there!" },
    { id: 2, developerId: 2, lastMessage: "How can I assist you?" },
  ];

  return (
    <Box>
      <Heading as="h1" size="xl" mb={4}>
        Messages
      </Heading>
      {conversations.map((convo) => (
        <Box key={convo.id} p={4} borderWidth={1} mb={4}>
          <Heading as="h2" size="lg">
            Developer {convo.developerId}
          </Heading>
          <Text>{convo.lastMessage}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default Messages;
