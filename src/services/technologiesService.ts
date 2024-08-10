



export const getAllTechnologies = async (): Promise<string[]> => {
    // const response = await fetch("http://localhost:8000/api/technologies")
    // return await response.json()

    return {
        error: false,
        technologies: technologiesMocks
    }
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
    "astro",
    "wordpress",
    "next.js",
    "node",
    "express",
    "sequelize",
    "postgres",
    "mysql",
]