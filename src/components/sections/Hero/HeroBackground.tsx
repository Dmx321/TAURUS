export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-taurus-green organic-shape blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-taurus-lime organic-shape blur-3xl animate-pulse delay-1000" />
    </div>
  );
};
