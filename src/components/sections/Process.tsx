import { SectionHeader } from "../SectionHeader";
import { Container } from "../common/Container";
import { PROCESS_STEPS } from "../../data/portfolioData";
import { StepCard } from "./Process/StepCard";
import { Grid } from "../common/Grid";

export const Process = () => {
  return (
    <section id="process" className="py-24 bg-taurus-dark text-taurus-cream overflow-hidden relative">
      <Container className="relative z-10">
        <SectionHeader 
          title="Design Thinking Process" 
          subtitle="Methodology"
        />
        <Grid md={2} lg={4}>
          {PROCESS_STEPS.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </Grid>
      </Container>
      <div className="absolute -bottom-20 -right-20 text-[20vw] font-serif font-black text-white/5 pointer-events-none select-none">
        TAURES
      </div>
    </section>
  );
};
