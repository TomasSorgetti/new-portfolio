export const getAllTechnologies = async (): Promise<string[]> => {
  // const response = await fetch("http://localhost:8000/api/technologies")
  // return await response.json()

  return technologiesMocks;
};

const technologiesMocks = [
  "figma",
  "photoshop",
  "html",
  "css",
  "javascript",
  "sass",
  "talwind",
  "react",
  "next.js",
  "wordpress",
  "node",
  "express",
  "sequelize",
  "postgres",
  "mysql",
];
