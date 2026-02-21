import { SectionHeader } from "../SectionHeader";
import { Container } from "../common/Container";
import { ProjectGrid } from "./Work/ProjectGrid";

export const Work = () => {
  return (
    <section id="work" className="py-24 bg-taurus-cream">
      <Container>
        <SectionHeader 
          title="Selected Case Studies" 
          subtitle="Portfolio"
        />
        <ProjectGrid />
      </Container>
    </section>
  );
};
