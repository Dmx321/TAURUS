export const Skills = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {["Material Design", "Accessibility", "Data Viz", "Branding", "React", "Figma"].map(skill => (
        <span key={skill} className="px-4 py-2 bg-taurus-dark text-taurus-cream rounded-full text-xs font-mono uppercase tracking-widest">
          {skill}
        </span>
      ))}
    </div>
  );
};
