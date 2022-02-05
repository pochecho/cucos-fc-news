export default {
  preview: 'assets/dates/03-02-2022/preview.jpeg',
  abstract:
    'Una vez más, el mono demuestra su falta de habilidad al caer en el campo, ...',
  title: 'Victoria local con sabor a 29 errores',
  publicationDate: '04-02-2022',
  author: 'Yhon Sebastián Santamaría Linares',


  body: {
    children: [
      {
        component: 'app-header',
        data: {
          title: 'Victoria local con sabor a 29 errores',
          subtitle: '02-02-2022',
        },
        children: [],
      },
      {
        component: 'app-paragraph',
        data: {
          text: `
            Un nuevo partido de los CUCOS F.C. se llevó a cabo anoche en la cancha "La estación Uribe".

            El partido oficial dejó como victoria 7 a 5, al equipo que todos queremos y amamos, pero como
            se viene notando segidamente, CUCOS F.C., lleno de altibajos y momentos malvados de algunos jugadores, 
            provocan que su técnico Simón Osorio no esté del todo contento con la victoria y con el estio de 
            juego propuesto.configureTestingModule
            Y sí, como lo dice anteriormente, el término es "Malvado", pues eso resultó siendo el juego de ayer del número 29 "Mora",
            3 errores grotescos, y terminados en gol, hicieron que el partido se complicara; y de nos ser por el
            compromiso de todo el equipo el jugador hubiera salido con un pie listo para ocupar el banquillo de suplentes por el resto de la temporada.
            ¡INCREIBLE!
            `,
          img: 'assets/dates/03-02-2022/preview.jpeg',
          'img-position': 'right',
          subtitle: '',
        },
        children: [],
      },

      {
        component: 'app-row',
        data: {
          def: 8,
          xs: 12,
        },
        children: [
          {
            component: 'app-col',
            data: {
            
              xs: 12,
md: 6,
sm: 6
            },
            children: [
              {
                component: 'app-paragraph',
                data: {
                  text: `
                            Por otro lado, los errores cometidos en defensa provocaron que el cuerpo técnico decidiera
                            poner como lateral derecho al jugador 17 "Pildo" qu eno se acostumbra a jugar en dicha posición
                            pero que resultó siendo la figura de un partido embolatado e infame de la defensa "Cuconiana"
                            `,
                  title: '17 Pildo, tapó los errores',
                },
                children: [],
              },
            ],
          },

          {
            component: 'app-col',
            data: {
              md: 6,
sm: 6,
              xs: 12,
            },
            children: [
              {
                component: 'app-paragraph',
                data: {
                  text: `
                            Una vez más, el jugador "Mono" demuestra su falta de habilidad al caer en el campo, sufrió
                            una leve falta en la mitdad del campo que pudo tener consecuencias graves ya que reposó
                            el peso de su cuerpo de nuevo sobre su mano lesionada,
                            la cual de hecho llevaba vendada en el compromiso.C
                            Gracias a la atención oportuna pudo continuar en el encuentro,
                            y el cobro de la falta resultó en gol a favor. Pero el futuro de las extremidades superiores del jugador es incierto.
                            `,
                  title: 'Clases de caídas para nuestro 7',
                },
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
};
