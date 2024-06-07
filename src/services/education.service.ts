import { IGetEducationsResponse } from '@interfaces/education';

class EducationService {
  async find() {
    // Dados estáticos simulando uma resposta do servidor
    const educationResponse: IGetEducationsResponse = {
      data: [
        {
          id: "1",
          attributes: {
            degree: "Bachelor's in Computer Science",
            school: "University of Example",
            from: new Date('2010-08-01'),
            to: new Date('2014-05-01')
          }
        },
        {
          id: "2",
          attributes: {
            degree: "Master's in Data Science",
            school: "Institute of Advanced Analytics",
            from: new Date('2015-08-01'),
            to: new Date('2017-05-01')
          }
        }
      ]
    };
    // Retorna os dados simulados como se fossem recebidos de uma API externa
    return Promise.resolve(educationResponse);
  }
}

export default new EducationService();
