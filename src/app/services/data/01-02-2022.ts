export default {
  preview: 'assets/dates/01-02-2022/preview.jpeg',
  abstract:
    'Una vez más, el mono demuestra su falta de habilidad al caer en el campo, ...',
  title: 'Partido preparatorio o partido clandestino',
  publicationDate: '02-02-2022',
  author: 'Yhon Sebastián Santamaría Linares, Sebastián Guarnizo Obando',
  body: {
    children: [
      {
        component: 'app-header',
        data: {
          title: 'Partido preparatorio o partido clandestino',
          subtitle: '02-02-2022',
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
          img: 'assets/dates/01-02-2022/match.jpeg',
          'img-position': 'left',
          subtitle: '',
        },
        children: [],
      },

      {
        component: 'app-paragraph',
        data: {
          text: `
             Se comenta que el jugador titular "Mono" y el jugador suplente "Leche"
             salieron del partido lesionados; los que compromete su participación en las proximas fechas 
             oficiales.
              `,
          'img-position': 'left',
          title: 'Ganaron pero a qué costo',
        },
        children: [],
      },

      {
        component: 'app-paragraph',
        data: {
          text: `
             Tras sus cuestionables presentaciones el controvertido jugador Sergio Posada Urrea "Pocho", decidió
             probar suerte ejerciendo labores de portero, en el encuentro disputado anoche. para la sorpresa de
             propios y ajenos, el desempeño del jugador fue muy sastisfactorio, dejando buenas sensaciones en el equipo.

             En palabras de Pocho "Yo creo que ni Ospina tapó lo que tapé", afirmó el jugador al finalizar el encuentro.

             Si Pocho se convertirá en un pilar en el arco, es un misterio por ahora, lo que es seguro, es que parece
             que al fin encontró un lugar en la cancha y en el equipo.
              `,
          'img-position': 'left',
          title: 'Pocho sigue siendo la polémica',
          img: 'assets/dates/01-02-2022/pocho.jpeg',
        },
        children: [],
      },
    ],
  },
};
