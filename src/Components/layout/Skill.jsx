import React from "react";

// MUI Components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Custom Import
import Heading from "../common/Heading";

const FrontendSkillImagesCDN = [
  "html5",
  "css3",
  "javascript",
  "react",
  "bootstrap",
  "materialui",
  "vitejs",
  "vscode",
];

const BackendSkillImagesCDN = [
  "java",
  "spring",
  "nodejs",
  "express",
  "intellij",
  "maven",
  "postman",
];

const DatabaseSkillImageCDN = [
  "mysql",
  "postgresql",
  "mongodb",
  "hibernate",
];

const SkillsProgress = React.memo(({ skill }) => {


  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          borderRadius: 5,
          px: { xs: 2, xl: 5 },
          py: 3,
          // boxShadow: "0px 0px  100px rgba(173, 9, 94, 0.28) ",
          // boxShadow: "2px 2px 100px 4px #360441  ",
          // bgcolor: "rgba(20, 16, 16, 0.12)",
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: { xs: 3, md: 7 },
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {skill.map((imageName) => {
            const isDarkIcon = imageName === "express";
            return (
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${imageName}/${imageName}-original.svg`}
                alt={`${imageName}-icon`}
                key={imageName}
                loading="lazy"
                style={{
                  width: "60px",
                  height: "60px",
                  filter: `${isDarkIcon ? "invert(1)" : ""} drop-shadow(0 0 30px rgba(100, 18, 116, 0.59))`,
                  // filter: `${isDarkIcon ? "invert(1)" : ""} drop-shadow(0 0 30px rgb(37, 3, 44))`

                }}
              />
            );
          })}


        </Box>
      </Box>
    </>
  );
})

const Skill = ({ ref }) => {
  return (
    <Container
      id="skills"
      component="section"
      aria-label="Technical Skills Of Shamroz khan"
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: "column",
        py: { xs: 10, md: 5, lg: 10 },
        gap: { xs: 4, sm: 7 },
      }}
    >
      <Heading SectionHeading="Technical Skills & Tools" />

      <Grid
        container
        direction={"column"}
        gap={2}
        sx={{
          pt: { xs: 0, md: 5 },
          px: { xs: 0, md: 5, xl: 10 },
          alignItems: { xs: "center", sm: "center" },
        }}
      >
        <SkillsProgress skill={FrontendSkillImagesCDN} />
        <SkillsProgress skill={BackendSkillImagesCDN} />
        <SkillsProgress skill={DatabaseSkillImageCDN} />
      </Grid>
    </Container>
  );
};

export default Skill;
