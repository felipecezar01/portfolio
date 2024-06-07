import { IGetProfileResponse } from '@interfaces/profile';

class ProfileService {
  async findOne() {
    // Dados estáticos simulando uma resposta do servidor
    const profileResponse: IGetProfileResponse = {
      data: {
        id: 1,
        attributes: {
          name: "John Doe",
          role: "Software Engineer",
          location: "San Francisco, CA",
          biography: "John is a software engineer with over 10 years of experience...",
          abilities: "JavaScript, TypeScript, React, Node",
          social: {
            LinkedIn: "https://linkedin.com/in/johndoe",
            GitHub: "https://github.com/johndoe"
          },
          picture: {
            data: {
              id: 1,
              attributes: {
                name: "profile.jpg",
                url: "/images/profile.jpg"
              }
            }
          }
        }
      }
    };
    // Retorna os dados simulados como se fossem recebidos de uma API externa
    return Promise.resolve(profileResponse);
  }
}

export default new ProfileService();
