import React, { useState } from "react";
import { Box, Container, Heading, SimpleGrid, Select, Input } from "@chakra-ui/react";
import { developers } from "../data/developers";
import DeveloperCard from "../components/DeveloperCard";

const Developers = () => {
  const [location, setLocation] = useState("");
  const [technology, setTechnology] = useState("");
  const [search, setSearch] = useState("");

  const locations = [...new Set(developers.map((d) => d.location))];
  const technologies = [...new Set(developers.flatMap((d) => d.specialties))];

  const filteredDevelopers = developers.filter((d) => {
    const matchLocation = location ? d.location === location : true;
    const matchTech = technology ? d.specialties.includes(technology) : true;
    const matchSearch = search ? d.name.toLowerCase().includes(search.toLowerCase()) || d.location.toLowerCase().includes(search.toLowerCase()) || d.specialties.some((s) => s.toLowerCase().includes(search.toLowerCase())) : true;
    return matchLocation && matchTech && matchSearch;
  });

  return (
    <Box py={8}>
      <Container maxW="container.lg">
        <Heading as="h1" mb={8}>
          Developers
        </Heading>
        <Box mb={8}>
          <Select placeholder="Filter by location" value={location} onChange={(e) => setLocation(e.target.value)} mb={4}>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </Select>
          <Select placeholder="Filter by technology" value={technology} onChange={(e) => setTechnology(e.target.value)} mb={4}>
            {technologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </Select>
          <Input placeholder="Search developers" value={search} onChange={(e) => setSearch(e.target.value)} mb={4} />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {filteredDevelopers.map((dev) => (
            <DeveloperCard key={dev.name} developer={dev} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Developers;
