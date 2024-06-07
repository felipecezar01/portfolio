// Importa a interface IArticle e IGetArticlesResponse
import { IGetArticlesResponse } from '@interfaces/article';

class ArticlesService {
  async find() {
    // Dados estáticos simulando uma resposta do servidor
    const articlesResponse: IGetArticlesResponse = {
      data: [
        {
          id: 1,
          attributes: {
            title: "Article One",
            url: "#",
            description: "This is the first article",
            picture: {
              data: {
                id: 1,
                attributes: {
                  name: "image1.jpg",
                  url: "/path/to/image1.jpg"
                }
              }
            }
          }
        },
        {
          id: 2,
          attributes: {
            title: "Article Two",
            url: "#",
            description: "This is the second article",
            picture: {
              data: {
                id: 2,
                attributes: {
                  name: "image2.jpg",
                  url: "/path/to/image2.jpg"
                }
              }
            }
          }
        }
      ]
    };
    // Retorna os dados simulados como se fossem recebidos de uma API externa
    return Promise.resolve(articlesResponse);
  }
}

// Exporta uma instância do serviço
export default new ArticlesService();
