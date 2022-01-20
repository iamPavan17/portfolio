import React from "react";

import { Text, CardTwo } from "components/UI";
import { textTheme } from "App/theme/text.theme";

import { Section, Container, ProjectContainer } from "./styles";
import { offlineProjectData } from "./constants";

export default function Projects() {
  return (
    <Section>
      <Container>
        <Text
          fontSize={textTheme.fontSize.h2}
          // textAlign="center"
          fontWeight={"bold"}
        >
          MY PROJECTS
        </Text>

        <ProjectContainer>
          {offlineProjectData.map((item) => (
            <CardTwo data={item} key={item.id} />
          ))}
        </ProjectContainer>
      </Container>
    </Section>
  );
}
