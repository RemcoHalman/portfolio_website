Vue.component("portfolio", {
    template: `
    <div>
    <div class="row">
        <div v-for="(project, index) in projects"" class="col-md-6 col-lg-3 mb-5">
            <div
                :key="project.projectId"
                class="portfolio-item mx-auto"
                data-toggle="modal"
                v-bind:data-target="project.projectId"
            >
                <div
                    class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                >
                    <div
                        class="portfolio-item-caption-content text-center text-white"
                    >
                        <i class="fas fa-plus fa-3x"></i>
                    </div>
                </div>
                <img
                    class="img-fluid"
                    v-bind:src="project.projectImage"
                    alt="projectName"
                />
            </div>
        </div>
    </div>
    </div>
                
    `,
    data() {
        return {
            projects: [
                {
                    projectId: 1,
                    projectName: "Escaperoom Drachten",
                    projectImage:
                        "/assets/img/portfolio/websites/escaperoomdrachten-nl-2020-09-08-14_41_24.png",
                    projectTags: ["html 5", "css", "Wordpress"],
                },
                {
                    projectId: 2,
                    projectName: "Timmerbedrijf R Wynia",
                    projectImage:
                        "/assets/img/portfolio/websites/rwynia-nl-2020-09-08-14_41_44.png",
                    projectTags: ["html 5", "css", "Wordpress"],
                },
                {
                    projectId: 3,
                    projectName: "Emmelocked",
                    projectImage: "/assets/img/portfolio/leds_emmelocked.gif",
                    projectTags: ["C++"],
                },
                {
                    projectId: 4,
                    projectName: "Escaperoom Effect",
                    projectImage: "/assets/img/portfolio/clock_effect.gif",
                    projectTags: ["C++"],
                },
                {
                    projectId: 5,
                    projectName: "Web App to send photo",
                    projectImage: "/assets/img/portfolio/photo_mailer.jpg",
                    projectTags: ["html 5", "css", "Flask", "Python"],
                },
                {
                    projectId: 6,
                    projectName: "Web App keep track of work hours",
                    projectImage:
                        "/assets/img/portfolio/escaperoomdrachten_uren.jpg",
                    projectTags: ["html 5", "css", "Django", "Python"],
                },
                {
                    projectId: 7,
                    projectName: "Control of clues send in the escaperoom",
                    projectImage: "/assets/img/portfolio/clue_control.jpg",
                    projectTags: ["PyQt5", "Python"],
                },
                {
                    projectId: 8,
                    projectName: "Control of escaperoom",
                    projectImage: "/assets/img/portfolio/automation.jpeg",
                    projectTags: ["Node", "javascript"],
                },
                {
                    projectId: 9,
                    projectName: "Escaperoom Game",
                    projectImage: "/assets/img/portfolio/buttongame.jpeg",
                    projectTags: ["C++"],
                },
                {
                    projectId: 10,
                    projectName: "Todo App",
                    projectImage: "/assets/img/portfolio/todo.jpg",
                    projectTags: ["html 5", "css", "Django", "Python"],
                },
                {
                    projectId: 11,
                    projectName: "",
                    projectImage: "/assets/img/portfolio/watermarked.jpg",
                    projectTags: ["PyQt5", "Python"],
                },
                {
                    projectId: 12,
                    projectName: "",
                    projectImage: "/assets/img/portfolio/veet_effect.jpeg",
                    projectTags: ["C++", "Python"],
                },
            ],
        };
    },
});

var app = new Vue({
    el: "#app",
    data: {},
    methods: {},
});
