import { IPublicationModel } from 'src/app/models/publication.model';
import data_06_02_2022 from '../matches-data/06-02-2022';

export default {
  match: data_06_02_2022,
  title: 'No hay locos',
  abstract:
    'Una vez más, el mono demuestra su falta de habilidad al caer en el campo, ...',
  publicationDate: '06-02-2022',
  preview: {
    image: 'assets/dates/03-02-2022/preview.jpeg',
    photographer: 'Elizabeth Betancurth Candamil'
  },
  author: 'Yhon Sebastián Santamaría Linares, Sebastián Guarnizo Obando',
  body: {
    children: [
      {
        component: 'app-header',
        data: {
          title: 'Qué no hay locos, no hay donde echarlos',
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
              lg: 4

            },
            children: [
              {
                component: 'app-audio',
                data: {
                  audio: `assets/dates/06-02-2022/audios/mono.mp3`,
                  image: `assets/players/Santiago Loaiza Giraldo/profile.jpeg`,
                  title: `Santiago Loaiza Giraldo`,
                },
                children: [],
              },

              {
                component: 'app-video',
                data: {
                  video: `assets/dates/06-02-2022/videos/video-1.mp4`,
                },
                children: [],
              },
            ],
          },


          {
            component: 'app-col',
            data: {
              md: 6
            },
            children: [

              {
                component: 'app-ad',
                data: {
                  title: `Sebastian santamiari`,
                  subtitle: `Rolon`,
                },
                children: [],
              },
            ],
          },

          
        ],
      },

      {
        component: 'app-news',
        data: {
          title: `Sebastian santamiari`,
          subtitle: `Rolon`,
        },
        children: [],
      },

      {
        component: 'app-news',
        data: {
          title: `Sebastian santamiari`,
          subtitle: `Rolon`,
        },
        children: [],
      },

      {
        component: 'app-paragraph',
        data: {
          text: `
              Anoche varios jugadores titulares y suplentes de CUCOS F.C. jugaron un partido en el 
              centro deportivo Terminal de manizales, con el equipo del capitán Vásquez y su combo. Se comenta
              que el partido pudo no ser oficial porque su técnico no se encontraba en el banquillo, lo que 
              genera muchas dudas entre los aficionados.
  
              Lo más importante, es que el equipo ganó con un marcador de 10 a 5, lo que sería su primera
              victoria, generando buenos aires para el Club.
              `,
          img: 'assets/dates/06-02-2022/gallery/photo-1.jpeg',
          'img-position': 'top',
          subtitle: 'Tomado por eli',
        },
        children: [],
      },
    ],
  },
} as IPublicationModel;
