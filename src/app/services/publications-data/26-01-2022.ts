import { IPublicationModel } from 'src/app/models/publication.model';
import data_26_01_2022 from '../matches-data/26-01-2022';

export default {
  match: data_26_01_2022,
  title: 'Los Cucos pierden de nuevo',
  publicationDate: '27-01-2022',
  author: 'Yhon Sebastián Santamaría Linares, Sebastián Guarnizo Obando',
  body: {
    children: [
      {
        component: 'app-header',
        data: {
          title: 'Los cucos pierden de nuevo',
          subtitle: '27-01-2022',
        },
        children: [],
      },

      {
        component: 'app-row',
        data: {},
        children: [
          {
            component: 'app-col',
            data: {
              sm: 6,
              md: 6,
              xs: 12,
            },
            children: [
              {
                component: 'app-paragraph',
                data: {
                  text: `
                                  Ayer 26 de enero, CUCOS F.C. perdió su partido contra el equipo de Vásquez y su combo, ganando 
                                  11-9. El equipo que ganaba 8-4 en el minuto 30, realizó cambios en su alineación que no se desarrollaron
                                  bien segun lo expresado por su técnico Simón Osorio. El equipo deberá trabajar adecuadamente para 
                                  la próxima fecha.
                                  `,
                  subtitle: '',
                  img: 'assets/dates/26-01-2022/home.jpeg',
                  'img-position': 'top',
                  css: [
                    {
                      class: 'border-bottom',
                    },
                  ],
                },
                children: [],
              },
            ],
          },

          {
            component: 'app-col',
            data: {
              sm: 6,
              md: 6,
              xs: 12,
            },
            children: [
              {
                component: 'app-ad',
                data: {
                  title: `
                                     IT'S OFFICIAL
                                      `,
                  subtitle: 'hinchada molesta con el 11 "Pocho"',
                  css: [
                    {
                      class: 'border-bottom',
                    },
                  ],
                },
                children: [],
              },
              {
                component: 'app-paragraph',
                data: {
                  text: `
                                      Según informaicón interna el numro 11 "Pocho" no sería tenido en cuenta para el próximo
                                      partido el día domingo.
                                      `,
                  subtitle: '',
                  css: [
                    {
                      class: 'border-bottom',
                    },
                  ],
                },
                children: [],
              },

              {
                component: 'app-news',
                data: {
                  title: `
                                Domingo 30 de enero
                                      `,
                  subtitle: 'Próximo partido',
                  subtitle1: '8: 00 a.m.',
                  css: [
                    {
                      class: 'border-bottom',
                    },
                  ],
                },
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
} as IPublicationModel;
