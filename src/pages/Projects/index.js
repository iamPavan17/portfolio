import React from "react";

import Helmet from "components/Helmet";
import { Text, CardTwo } from "components/UI";
import { textTheme } from "App/theme/text.theme";

import { Section, Container, ProjectContainer } from "./styles";
import { offlineProjectData } from "./constants";

export default function Projects() {
  return (
    <Section>
      <Helmet title="Projects" />

      <Container>
        <Text
          fontSize={textTheme.fontSize.h2}
          // textAlign="center"
          fontWeight={"bold"}
        >
          My Projects
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
