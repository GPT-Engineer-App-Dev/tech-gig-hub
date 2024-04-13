import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import JobCard from "../components/JobCard";

const Jobs = ({ jobs }) => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb={4}>
        Jobs
      </Heading>
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </Box>
  );
};

export default Jobs;
