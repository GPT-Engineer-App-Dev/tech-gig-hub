import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const JobForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, company, location, description, skills, deadline });
    setTitle("");
    setCompany("");
    setLocation("");
    setDescription("");
    setSkills("");
    setDeadline("");
  };

  return (
    <Box maxWidth="500px" mx="auto">
      <form onSubmit={handleSubmit}>
        <FormControl id="title" isRequired>
          <FormLabel>Job Title</FormLabel>
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl id="company" isRequired>
          <FormLabel>Company Name</FormLabel>
          <Input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
        </FormControl>
        <FormControl id="location" isRequired>
          <FormLabel>Location</FormLabel>
          <Input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </FormControl>
        <FormControl id="description" isRequired>
          <FormLabel>Job Description</FormLabel>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <FormControl id="skills" isRequired>
          <FormLabel>Required Skills</FormLabel>
          <Input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} />
        </FormControl>
        <FormControl id="deadline" isRequired>
          <FormLabel>Application Deadline</FormLabel>
          <Input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="teal" mt={4}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default JobForm;
