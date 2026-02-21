import { SectionHeader } from "../../components/SectionHeader";
import { Container } from "../../components/common/Container";
import { PROJECTS } from "../../data/portfolioData";
import { ProjectCard } from "../../components/ProjectCard";
import { Grid } from "../../components/common/Grid";

export const WorkPage = () => {
  return (
    <div className="pt-32 pb-24 bg-taurus-cream min-h-screen">
      <Container>
        <SectionHeader 
          title="Our Creative Legacy" 
          subtitle="Portfolio"
        />
        <Grid md={2} gap={12}>
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};
