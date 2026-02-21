import { ProjectCard } from "../ProjectCard";
import { SectionHeader } from "../SectionHeader";
import { PROJECTS } from "../../data/portfolioData";

export const Work = () => {
  return (
    <section id="work" className="py-24 bg-taurus-cream">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Selected Case Studies" 
          subtitle="Portfolio"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
