import React, { useState, useEffect } from "react";
import { Box, Heading, VStack, StackDivider, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Messages = () => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      const response = await fetch("/api/conversations");
      const data = await response.json();
      setConversations(data);
    };

    fetchConversations();
  }, []);

  return (
    <Box p={4}>
      <Heading mb={4}>Messages</Heading>
      <VStack divider={<StackDivider />} spacing={4} align="stretch">
        {conversations.map((conversation) => (
          <Box key={conversation.id} as={RouterLink} to={`/conversation/${conversation.id}`} p={4} borderWidth={1} rounded="md">
            <Text fontWeight="bold">{conversation.developer.name}</Text>
            <Text>{conversation.lastMessage}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Messages;
