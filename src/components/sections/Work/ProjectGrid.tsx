import { PROJECTS } from "../../../data/portfolioData";
import { ProjectCard } from "../../ProjectCard";
import { Grid } from "../../common/Grid";

export const ProjectGrid = () => {
  return (
    <Grid md={2} gap={12}>
      {PROJECTS.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </Grid>
  );
};
