import React, { useState, useEffect } from "react";
import { Box, Heading, VStack, StackDivider, Text, Input, Button } from "@chakra-ui/react";

const Conversation = ({ developerId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch(`/api/conversation/${developerId}`);
      const data = await response.json();
      setMessages(data);
    };

    fetchMessages();
  }, [developerId]);

  const handleSendMessage = async () => {
    await fetch(`/api/conversation/${developerId}`, {
      method: "POST",
      body: JSON.stringify({ message: newMessage }),
    });

    setNewMessage("");

    const response = await fetch(`/api/conversation/${developerId}`);
    const data = await response.json();
    setMessages(data);
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Conversation</Heading>
      <VStack divider={<StackDivider />} spacing={4} align="stretch">
        {messages.map((message) => (
          <Box key={message.id} p={4} borderWidth={1} rounded="md">
            <Text fontWeight="bold">{message.sender}</Text>
            <Text>{message.content}</Text>
          </Box>
        ))}
      </VStack>
      <Box mt={4}>
        <Input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type a message..." />
        <Button mt={2} colorScheme="teal" onClick={handleSendMessage}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Conversation;
