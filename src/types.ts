import React from "react";

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}
