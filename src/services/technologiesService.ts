



export const getAllTechnologies = async (): Promise<string[]> => {
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve(technologiesMocks)
        }, 1000);
    })
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