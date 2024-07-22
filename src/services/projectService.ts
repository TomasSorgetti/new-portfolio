interface Project{
    id: number;
    name: string;
    description: string;
    image: string;
}

export const getAllProjects = async (): Promise<Project[]> => {
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve(projectMocks)
        }, 1000);
    })
};



const projectMocks = [
    {
        id: 1,
        name: "Project 1",
        description: "Project 1 description",
        image: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        name: "Project 2",
        description: "Project 2 description",
        image: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        name: "Project 3",
        description: "Project 3 description",
        image: "https://via.placeholder.com/150"
    },
]