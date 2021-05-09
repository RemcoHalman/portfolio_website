import { createStore } from "vuex";

const store = createStore({
  modules: {
    // name: nameModule,
  },
  state() {
    return {
      portfolioItems: [
        {
          id: 1,
          name: "Escaperoom Drachten",
          type: "Website",
          image: require("@/assets/img/portfolio/websites/escaperoomdrachten-nl-2020-09-08-14_41_24.png"),
          tags: ["html 5", "css", "Wordpress"],
          description:
            "Nieuwe website Escaperoom Drachten. Met extra Custom Post Types om gemakkelijk een nieuwe kamer toe te voegen",
          link: "https://www.escaperoomdrachten.nl/",
          link_short: "Escaperoom Drachten",
        },
        {
          id: 2,
          name: "Timmerbedrijf R Wynia",
          type: "Website",
          image: require("@/assets/img/portfolio/websites/rwynia-nl-2020-09-08-14_41_44.png"),
          tags: ["html 5", "css", "Wordpress"],
          description:
            "Website van Timmerbedrijf R Wynia om online extra vindbaar te zijn",
          link: "https://www.rwynia.nl/",
          link_short: "Timmerbedrijf R Wynia",
        },
        {
          id: 17,
          name: "Webshop NH Wenje",
          type: "Webshop",
          image: require("@/assets/img/portfolio/websites/nhwenje.png"),
          tags: ["html 5", "css", "Wordpress", "WooCommerce"],
          description: "Webshop van NH Wenje.",
          link: "https://www.nhwenje.nl/",
          link_short: "Webshop NH wenje",
        },
        {
          id: 17,
          name: "Presale Website",
          type: "Website",
          image: require("@/assets/img/portfolio/websites/presale.png"),
          tags: ["Javascript", "Html", "SCSS", "CSS"],
          description:
            "Een website gemaakt vanaf een PDF ontwerp. Het geheel is responsive",
        },
        {
          id: 3,
          name: "Emmelocked",
          type: "Arduino Game",
          image: require("@/assets/img/portfolio/leds_emmelocked.gif"),
          tags: ["C++", "Arduino"],
          description: "Licht Effect in Escaperoom Emmelocked.",
          link_short: "",
        },
        {
          id: 4,
          name: "Escaperoom Effect",
          type: "Arduino Game",
          image: require("@/assets/img/portfolio/clock_effect.gif"),
          tags: ["C++"],
          description: "Escaperoom Drachten doorgang effect",
          link_short: "",
        },
        {
          id: 5,
          name: "WebApp to send photo",
          type: "Webapp",
          image: require("@/assets/img/portfolio/photo_mailer.jpg"),
          tags: ["html 5", "css", "Flask", "Python"],
          description:
            "Web app om foto's te verzenden naar gasten. Inclusief een leuke mail.",
          link_short: "",
        },
        {
          id: 6,
          name: "Time Tracker",
          type: "Webapp",
          image: require("@/assets/img/portfolio/escaperoomdrachten_uren.jpg"),
          tags: ["html 5", "css", "Django", "Python"],
          description:
            "Web app Escaperoom Drachten om de uren registratie van personeel bij te houden. Het personeel werkt steeds meer zelfstandig en zo kan iedereen makkelijk zien wat de planning is.",
          link_short: "",
        },
        {
          id: 7,
          name: "Clues interface",
          type: "Desktop App",
          image: require("@/assets/img/portfolio/clue_control.jpg"),
          tags: ["PyQt5", "Python"],
          description:
            "GUI voor The Lost Ones. Hints kunnen zo makkelijk getypt worden en laten zien in de kamer",
          link_short: "",
        },
        {
          id: 8,
          name: "Control of escaperoom",
          type: "PLC",
          image: require("@/assets/img/portfolio/automation.jpeg"),
          tags: ["Node", "javascript"],
          description:
            "PLC gebaseerd op een Raspberry Pi en een online Portaal om de acties te besturen",
          link_short: "",
        },
        {
          id: 9,
          name: "Escaperoom Game",
          type: "Arduino Game",
          image: require("@/assets/img/portfolio/buttongame.jpeg"),
          tags: ["C++", "Arduino"],
          description: "Fysieke escaperoom game",
          link_short: "",
        },
        {
          id: 10,
          name: "Todo App",
          type: "Webapp",
          image: require("@/assets/img/portfolio/todo.jpg"),
          tags: ["html 5", "css", "Django", "Python"],
          description: "TODO app",
          link_short: "",
        },
        {
          id: 11,
          name: "Watermarking Images",
          type: "Desktop App",
          image: require("@/assets/img/portfolio/watermarked.jpg"),
          tags: ["PyQt5", "Python", "Pillow"],
          description:
            "Desktop app om het makkelijker te maken om foto's te watermerken. Het gaat per volledige folder",
          link_short: "",
        },
        {
          id: 12,
          name: "Escaperoom game",
          type: "Arduino Game",
          image: require("@/assets/img/portfolio/veet_effect.jpeg"),
          tags: ["C++", "Python"],
          description: "Licht effect voor een Game in The Lost Ones",
          link_short: "",
        },
        {
          id: 13,
          name: "Escaperoom game",
          type: "Webgame",
          image: require("@/assets/img/portfolio/touchscreen_js_game.jpg"),
          tags: ["Javascript", "Html", "Css"],
          description:
            "Touchscreen spel. Bezoekers moeten het juiste woord invoeren om verder te kunnen",
          link_short: "",
        },
        {
          id: 15,
          name: "Vue Monster Slayer",
          type: "Webgame",
          image: require("@/assets/img/portfolio/vue_monster_slayer.jpg"),
          tags: ["Vue", "Javascript", "Html", "Css"],
          description: "Simpel online click game",
          link_short: "",
        },
        {
          id: 14,
          name: "Holiday Countdown",
          type: "Webapp",
          image: require("@/assets/img/portfolio/websites/holiday_countdown.jpg"),
          tags: ["Javascript", "VueJS", "Html", "SCSS"],
          description: "Een countdown tot de komende feestdagen.",
          link_short: "",
        },
        {
          id: 16,
          name: "Vue versie van community website (vuejs branch)",
          type: "Website",
          image: require("@/assets/img/portfolio/websites/eddiejaoudecommunity-github-io-2020-10-09-12_35_03.png"),
          tags: ["Javascript", "VueJS", "Html", "SCSS", "CSS", "cypress"],
          description:
            "Een rebuild van een community website. Om verschillende frameworks te vergelijken. Cypress word gebruikt om te testen",
          link:
            "https://github.com/EddieJaoudeCommunity/EddieJaoudeCommunity.github.io/tree/vuejs",
          link_short: "Vue Branch",
        },
      ],
      internShips: {
        intership_2: {
          company: "Adfunturepark B.V.",
          function: "Vormgever",
          start: "07-2013",
          stopped: "02-2013",
          location: "Dokkum",
        },
        intership_1: {
          company: "NOFCOM.nl / noordoostfriesland",
          function: "Vormgever",
          start: "02-2011",
          stopped: "09-2011",
          location: "Oenkerk",
        },
      },
      workExperience: {
        job_7: {
          company: "Vanquish Yachts",
          function: "Monteur Afbouw",
          start: "6-2021",
          stopped: "tot op heden",
          location: "Marknesse",
        },
        job_6: {
          company: "VodafoneZiggo B.V.",
          function: "Advisor / WiFi Crew",
          start: "12-2020",
          stopped: "6-2021",
          location: "Leeuwarden",
        },
        job_5: {
          company: "Escaperoom Drachten v.o.f.",
          function: "Zelfstandig Ondernemer",
          start: "04-2016",
          stopped: "tot op heden",
          location: "Drachten",
        },
        job_4: {
          company: "Adfunturepark B.V.",
          function: "Parttime Medewerker, Later aandeelhouder",
          start: "12-2010",
          stopped: "03-2016",
          location: "Dokkum",
        },
        job_3: {
          company: "Poiesz Supermarkten B.V.",
          function: "Vakkenvuller, Kassa medewerker",
          start: "06-2010",
          stopped: "07-2011",
          location: "Dokkum",
        },
        job_1: {
          company: "Camping en Recreatiecentrum Lauwersoog B.V.",
          function: "Afwashulp, Snackbarhulp",
          start: "05-2009",
          stopped: "08-2010",
          location: "Lauwersoog",
        },
      },
      education: {
        middelbareschool: {
          school: "Piter Jelles Dalton",
          locatie: "Dokkum",
          opleiding: "Natuur en techniek",
          startjaar: 2005,
          examenjaar: 2009,
        },
        middelbaarberoepsonderwijs: {
          school: "Friesland College",
          locatie: "Leeuwarden",
          opleiding: "Mediavormgeving MBO4",
          startjaar: 2009,
          examenjaar: 2013,
        },
      },
      skillset: {
        languages: ["HTML5", "SCSS/CSS", "Python", "Javascript", "C++"],
        frameworks: [
          ["Flask", "Python"],
          ["Django", "Python"],
          ["Vue.js", "Javascript"],
        ],
        programmas: ["Adobe Photoshop", "Adobe Illustrator"],
        extra: ["Docker", "Git", "Linux", "Mac OS"],
      },
    };
  },
  mutations: {},
  getters: {
    portfolioItems: (state) => state.portfolioItems,
    workExperience: (state) => {
      return state.workExperience;
    },
    internShips: (state) => state.internShips,
    education: (state) => state.education,
  },
  actions: {},
});

export default store;
