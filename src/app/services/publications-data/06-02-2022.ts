import { IPublicationModel } from 'src/app/models/publication.model';
import data_06_02_2022 from '../matches-data/06-02-2022';

export default {
  match: data_06_02_2022,
  title: 'Inseguridad bajo los tres palos',
  abstract:
    ' El turno esta vez es para el portero Caco, que realizó un penoso partido ...',
  publicationDate: '06-02-2022',
  preview: {
    image: 'assets/dates/06-02-2022/preview.png',
    photographer: 'Elizabeth Betancurth Candamil',
  },
  author: 'Yhon Sebastián Santamaría Linares',
  body: {
    children: [
      {
        component: 'app-header',
        data: {
          title: 'Inseguridad bajo los tres palos. Indisciplina y muchas ganas',
          subtitle: '06-02-2022',
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
              xs: 12,
              sm: 8,
              md: 6,
              lg: 6,
            },
            children: [
              {
                component: 'app-paragraph',
                data: {
                  text: `
                     El día de ayer, 6 de febrero, se realizó el entrenamiento matutino de los CUCOS F.C. con vista a los próximos encuentros 
                     oficiales a disputarse con dudas. Dudas y muchas dudas por el cuerpo técnico encabezado por Simón Osorio "El caco"; y es 
                     que no hay un encuentro en el que algún jugador no salga implicado. Pareciera ser esta la esencia del equipo.
                      `,
                },
                children: [],
              },

              {
                component: 'app-paragraph',
                data: {
                  text: `
                     El turno esta vez es para el portero Caco, que realizó un penoso partido de entrenamiento encajándole 12 GOLES de los cuales, 8 fueron
                     salidas nefastas, rechazos del rival apenas y con intención, reacciones dignas de una babosa en un polvero. Todo lo malo que le puede pasar
                     a un portero le sucedió ayer al guardameta de los CUCOS F.C. ¿Algún día el equipo generará solo buenas noticias para este periódico? Dudoso.
                      `,
                },
                children: [],
              },

              {
                component: 'app-paragraph',
                data: {
                  text: `
                    Cambiando de aires, entre las cosas buenas fue la remontada inesperada por el equipo CUCOS F.C. Calo, que perdía 12 a 7 faltando 10 minutos
                    por terminar el encuentro. Sin duda alguna, las ganas y la perseverancia hicieron que el partido de entrenamiento se remontara y terminara en un empate
                    12 a 12.
                  `,
                },
                children: [],
              },

              {
                component: 'app-paragraph',
                data: {
                  text: ` `,
                  img: 'assets/dates/06-02-2022/gallery/rolo.jpeg',
                  'img-position': 'top',
                },
                children: [],
              },
            ],
          },
          {
            component: 'app-col',
            data: {
              xs: 12,
              sm: 8,
              md: 6,
              lg: 6,
            },
            children: [
              {
                component: 'app-paragraph',
                data: {
                  text: `
                     Con todas los aspectos malos y buenos del equipo, hay que sumar una más. Ahora los casos de indisciplina se hacen 
                     presentes en el Club. El jugador 5 Zulu, se presentó (si a eso puede llamarse "presentarse") 25 minutos tarde al entrenamiento. Pero esto no es
                     lo más grave, lea atentamente lo recolectado para el periódico Cuconiano.
                      `,
                  img: 'assets/dates/06-02-2022/preview.png',
                  'img-position': 'top',
                  title: 'INDISCIPLINA PARA ACABAR DE REMATAR',
                },
                children: [],
              },
              {
                component: 'app-paragraph',
                data: {
                  text: `
                   Don Germán (Vecino del Mono): "Primero que todo, quiero pedir que mi nombre en el periódico no sea el real, porque quiero exponer públicamente,
                   que en la noche de ayer el que uds llaman Mono, tuvo una fiesta en su casa hasta las 3 de la madrugada y me parece una falta de respeto 
                   con la afición". Expresó enojado.
                      `,
                },
                children: [],
              },

              {
                component: 'app-paragraph',
                data: {
                  text: `
                  ¿Estaría Zulu en dicha fiesta y debido a eso es la llegada tarde al entrenamiento? 
                      `,
                },
                children: [],
              },
            ],
          },
        ],
      },
      {
        component: 'app-row',
        data: {},
        children: [
          {
            component: 'app-col',
            data: {
              xs: 12,
              sm: 12,
              md: 12,
              lg: 12,
            },
            children: [
              {
                component: 'app-paragraph',
                data: {
                  text: `
                      `,
                  title: 'Declaraciones al final del partido',
                },
                children: [],
              },
            ],
          },
          {
            component: 'app-col',
            data: {
              xs: 12,
              sm: 12,
              md: 12,
              lg: 2,
            },
            children: [
              {
                component: 'app-audio',
                data: {
                  audio: `assets/dates/06-02-2022/audios/mono.mp3`,
                  image: `assets/players/Santiago Loaiza Giraldo/profile.jpeg`,
                  title: `El Mono`,
                },
                children: [],
              },
            ],
          },
          {
            component: 'app-col',
            data: {
              xs: 12,
              sm: 12,
              md: 12,
              lg: 2,
            },
            children: [
              {
                component: 'app-audio',
                data: {
                  audio: `assets/dates/06-02-2022/audios/caco.mp3`,
                  image: `assets/players/Simón Osorio Castaño/profile.png`,
                  title: `Caco`,
                },
                children: [],
              },
            ],
          },

          {
            component: 'app-col',
            data: {
              xs: 12,
              sm: 12,
              md: 12,
              lg: 2,
            },
            children: [
              {
                component: 'app-audio',
                data: {
                  audio: `assets/dates/06-02-2022/audios/calo.mp3`,
                  image: `assets/players/Camilo Loaiza/profile.png`,
                  title: `Calo`,
                },
                children: [],
              },
            ],
          },

          {
            component: 'app-col',
            data: {
              xs: 12,
              sm: 12,
              md: 12,
              lg: 2,
            },
            children: [
              {
                component: 'app-audio',
                data: {
                  audio: `assets/dates/06-02-2022/audios/juanma.mp3`,
                  image: `assets/players/Juan Manuel Valencia López/profile.png`,
                  title: `Juanma`,
                },
                children: [],
              },
            ],
          },

          {
            component: 'app-col',
            data: {
              xs: 12,
              sm: 12,
              md: 12,
              lg: 2,
            },
            children: [
              {
                component: 'app-audio',
                data: {
                  audio: `assets/dates/06-02-2022/audios/pildo.mp3`,
                  image: `assets/players/Juan Felipe Ospina/profile.png`,
                  title: `Pildo`,
                },
                children: [],
              },
            ],
          },

          {
            component: 'app-col',
            data: {
              xs: 12,
              sm: 12,
              md: 12,
              lg: 2,
            },
            children: [
              {
                component: 'app-audio',
                data: {
                  audio: `assets/dates/06-02-2022/audios/rolo.mp3`,
                  image: `assets/players/Sebastián Santamaría Linares/profile.png`,
                  title: `Rolo`,
                },
                children: [],
              },
            ],
          },
        ],
      },

      {
        component: 'app-row',
        data: {},
        children: [
          {
            component: 'app-col',
            data: {
              xs: 12,
              sm: 12,
              md: 12,
              lg: 12,
            },
            children: [
              {
                component: 'app-paragraph',
                data: {
                  text: `
                      `,
                  title: 'Algunas tomas',
                },
                children: [],
              },
            ],
          },
          {
            component: 'app-col',
            data: {
              xs: 12,
              sm: 12,
              md: 12,
              lg: 6,
            },
            children: [
              {
                component: 'app-video',
                data: {
                  video: `assets/dates/06-02-2022/videos/video-1.mp4`,
                  title: `El Mono`,
                },
                children: [],
              },
            ],
          },

          {
            component: 'app-col',
            data: {
              xs: 12,
              sm: 12,
              md: 12,
              lg: 6,
            },
            children: [
              {
                component: 'app-video',
                data: {
                  video: `assets/dates/06-02-2022/videos/video-2.mp4`,
                  title: `El Mono`,
                },
                children: [],
              },
            ],
          },

          {
            component: 'app-col',
            data: {
              xs: 12,
              sm: 12,
              md: 12,
              lg: 6,
            },
            children: [
              {
                component: 'app-video',
                data: {
                  video: `assets/dates/06-02-2022/videos/video-3.mp4`,
                  title: `El Mono`,
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
