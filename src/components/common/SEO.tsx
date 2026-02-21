import { motion } from "motion/react";

export const SEO = ({ title, description }: { title: string; description: string }) => {
  return (
    <head>
      <title>{title} | Taures Creative</title>
      <meta name="description" content={description} />
    </head>
  );
};
