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
          image: require("@/assets/img/portfolio/websites/escaperoomdrachten-nl-2020-09-08-14_41_24.png"),
          tags: ["html 5", "css", "Wordpress"],
          description:
            "Nieuwe website Escaperoom Drachten. Met extra Custom Post Types om gemakkelijk een nieuwe kamer toe te voegen",
          link: "https://www.escaperoomdrachten.nl/",
        },
        {
          id: 2,
          name: "Timmerbedrijf R Wynia",
          image: require("@/assets/img/portfolio/websites/rwynia-nl-2020-09-08-14_41_44.png"),
          tags: ["html 5", "css", "Wordpress"],
          description:
            "Website van Timmerbedrijf R Wynia om online extra vindbaar te zijn",
          link: "https://www.rwynia.nl/",
        },
        {
          id: 17,
          name: "Webshop NH Wenje (in Development)",
          image: require("@/assets/img/portfolio/websites/nhwenje.png"),
          tags: ["html 5", "css", "Wordpress", "WooCommerce"],
          description: "Webshop van NH Wenje.",
        },
        {
          id: 3,
          name: "Emmelocked",
          image: require("@/assets/img/portfolio/leds_emmelocked.gif"),
          tags: ["C++", "Arduino"],
          description: "Licht Effect in Escaperoom Emmelocked.",
        },
        {
          id: 4,
          name: "Escaperoom Effect",
          image: require("@/assets/img/portfolio/clock_effect.gif"),
          tags: ["C++"],
          description: "Escaperoom Drachten doorgang effect",
        },
        {
          id: 5,
          name: "WebApp to send photo",
          image: require("@/assets/img/portfolio/photo_mailer.jpg"),
          tags: ["html 5", "css", "Flask", "Python"],
          description:
            "Web app om foto's te verzenden naar gasten. Inclusief een leuke mail.",
        },
        {
          id: 6,
          name: "WebApp keep track of work hours",
          image: require("@/assets/img/portfolio/escaperoomdrachten_uren.jpg"),
          tags: ["html 5", "css", "Django", "Python"],
          description:
            "Web app Escaperoom Drachten om de uren registratie van personeel bij te houden. Het personeel werkt steeds meer zelfstandig en zo kan iedereen makkelijk zien wat de planning is.",
        },
        {
          id: 7,
          name: "Control of clues send in the escaperoom",
          image: require("@/assets/img/portfolio/clue_control.jpg"),
          tags: ["PyQt5", "Python"],
          description:
            "GUI voor The Lost Ones. Hints kunnen zo makkelijk getypt worden en laten zien in de kamer",
        },
        {
          id: 8,
          name: "Control of escaperoom",
          image: require("@/assets/img/portfolio/automation.jpeg"),
          tags: ["Node", "javascript"],
          description:
            "PLC gebaseerd op een Raspberry Pi en een online Portaal om de acties te besturen",
        },
        {
          id: 9,
          name: "Escaperoom Game",
          image: require("@/assets/img/portfolio/buttongame.jpeg"),
          tags: ["C++", "Arduino"],
          description: "Fysieke escaperoom game",
        },
        {
          id: 10,
          name: "Todo App",
          image: require("@/assets/img/portfolio/todo.jpg"),
          tags: ["html 5", "css", "Django", "Python"],
          description: "TODO app",
        },
        {
          id: 11,
          name: "Watermarking Images",
          image: require("@/assets/img/portfolio/watermarked.jpg"),
          tags: ["PyQt5", "Python", "Pillow"],
          description:
            "Desktop app om het makkelijker te maken om foto's te watermerken. Het gaat per volledige folder",
        },
        {
          id: 12,
          name: "Escaperoom game",
          image: require("@/assets/img/portfolio/veet_effect.jpeg"),
          tags: ["C++", "Python"],
          description: "Licht effect voor een Game in The Lost Ones",
        },
        {
          id: 13,
          name: "Escaperoom game",
          image: require("@/assets/img/portfolio/touchscreen_js_game.jpg"),
          tags: ["Javascript", "Html", "Css"],
          description:
            "Touchscreen spel. Bezoekers moeten het juiste woord invoeren om verder te kunnen",
        },
        {
          id: 15,
          name: "Vue Monster Slayer",
          image: require("@/assets/img/portfolio/vue_monster_slayer.jpg"),
          tags: ["Vue", "Javascript", "Html", "Css"],
          description: "Simpel online click game",
          link: "https://remcohalman.nl/monster-slayer/",
        },
        {
          id: 14,
          name: "Holiday Countdown",
          image: require("@/assets/img/portfolio/websites/holiday_countdown.jpg"),
          tags: ["Javascript", "VueJS", "Html", "SCSS"],
          description: "Een countdown tot de komende feestdagen.",
          link: "https://www.remcohalman.nl/countdown",
        },
        {
          id: 16,
          name: "Vue versie van community website (vuejs branch)",
          image: require("@/assets/img/portfolio/websites/eddiejaoudecommunity-github-io-2020-10-09-12_35_03.png"),
          tags: ["Javascript", "VueJS", "Html", "SCSS", "CSS", "cypress"],
          description:
            "Een rebuild van een community website. Om verschillende frameworks te vergelijken. Cypress word gebruikt om te testen",
          link:
            "https://github.com/EddieJaoudeCommunity/EddieJaoudeCommunity.github.io/tree/vuejs",
        },
      ],
    };
  },
  mutations: {},
  getters: {
    portfolioItems: (state) => state.portfolioItems,
  },
  actions: {},
});

export default store;
