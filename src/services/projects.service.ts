import { IGetProjectsResponse } from '@interfaces/project';

class ProjectsService {
  async find() {
    // Dados estáticos simulando uma resposta do servidor
    const projectsResponse: IGetProjectsResponse = {
      data: [
        {
          id: 1,
          attributes: {
            name: "Project Alpha",
            description: "A detailed description of Project Alpha.",
            picture: {
              data: {
                id: 1,
                attributes: {
                  name: "alpha.jpg",
                  url: "/images/alpha.jpg"
                }
              }
            },
            url: "http://example.com/project/alpha"
          }
        },
        {
          id: 2,
          attributes: {
            name: "Project Beta",
            description: "A detailed description of Project Beta.",
            picture: {
              data: {
                id: 2,
                attributes: {
                  name: "beta.jpg",
                  url: "/images/beta.jpg"
                }
              }
            },
            url: "http://example.com/project/beta"
          }
        }
      ]
    };
    // Retorna os dados simulados como se fossem recebidos de uma API externa
    return Promise.resolve(projectsResponse);
  }
}

export default new ProjectsService();
