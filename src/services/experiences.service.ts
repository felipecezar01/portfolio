import { IGetExperiencesResponse } from '@interfaces/experience';

class ExperiencesService {
  async find() {
    // Dados estáticos simulando uma resposta do servidor
    const experiencesResponse: IGetExperiencesResponse = {
      data: [
        {
          id: '1',
          attributes: {
            title: 'Software Developer',
            description: 'Developed awesome software solutions.',
            company: 'Tech Company',
            from: new Date('2019-01-01'),
            to: new Date('2020-12-31')
          }
        },
        {
          id: '2',
          attributes: {
            title: 'Senior Software Engineer',
            description: 'Led a team of developers to build enterprise applications.',
            company: 'Big Tech',
            from: new Date('2021-01-01'),
            to: new Date('2023-01-01')
          }
        }
      ]
    };
    // Retorna os dados simulados como se fossem recebidos de uma API externa
    return Promise.resolve(experiencesResponse);
  }
}

export default new ExperiencesService();
