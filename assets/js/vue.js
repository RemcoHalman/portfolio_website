Vue.component("portfolio", {
    template: `
    <div>
    <div class="row">
        <div v-for="(project, index) in projects" class="col-md-6 col-lg-3 mb-5">
            <div
                :key="project.projectId"
                class="portfolio-item mx-auto"
                data-toggle="modal"
                v-bind:data-target="'#modal_project_'+project.projectId"
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
    <!-- Portfolio Modals-->
    <!-- Portfolio Modal 1-->
    <div
        v-for="(project, index) in projects"
        class="portfolio-modal modal fade"
        v-bind:id="'modal_project_' + project.projectId"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <button
                    class="close"
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                    <span aria-hidden="true"
                        ><i class="fas fa-times"></i
                    ></span>
                </button>
                <div class="modal-body text-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <!-- Portfolio Modal - Title-->
                                <h2
                                    class="portfolio-modal-title text-secondary text-uppercase mb-0"
                                    id="portfolioModal1Label"
                                >
                                    {{project.projectName}}
                                </h2>
                                <!-- Icon Divider-->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                </div>
                                <!-- Portfolio Modal - Image-->
                                <img
                                    class="img-fluid rounded mb-5"
                                    :src="project.projectImage"
                                    :alt="project.projectName"
                                />
                                <!-- Portfolio Modal - Text-->
                                <p class="mb-5">
                                <!-- Set project description -->
                                {{project.projectDescription}}
                                </p>
                                <hr>
                                <h2 class="h5">
                                    Tech stack used
                                </h2>
                                <p class="">
                                    <div class="badge badge-pill badge-dark mx-1" v-for="tag in project.projectTags">{{tag}}</div>
                                </p>
                                <button
                                    class="btn btn-primary mt-5"
                                    data-dismiss="modal"
                                >
                                    <i class="fas fa-times fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
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
                    projectDescription:
                        "Nieuwe website Escaperoom Drachten. Met extra Custom Post Types om gemakkelijk een nieuwe kamer toe te voegen",
                },
                {
                    projectId: 2,
                    projectName: "Timmerbedrijf R Wynia",
                    projectImage:
                        "/assets/img/portfolio/websites/rwynia-nl-2020-09-08-14_41_44.png",
                    projectTags: ["html 5", "css", "Wordpress"],
                    projectDescription:
                        "Website van Timmerbedrijf R Wynia om online extra vindbaar te zijn",
                },
                {
                    projectId: 3,
                    projectName: "Emmelocked",
                    projectImage: "/assets/img/portfolio/leds_emmelocked.gif",
                    projectTags: ["C++", "Arduino"],
                    projectDescription:
                        "Licht Effect in Escaperoom Emmelocked.",
                },
                {
                    projectId: 4,
                    projectName: "Escaperoom Effect",
                    projectImage: "/assets/img/portfolio/clock_effect.gif",
                    projectTags: ["C++"],
                    projectDescription: "Escaperoom Drachten doorgang effect",
                },
                {
                    projectId: 5,
                    projectName: "WebApp to send photo",
                    projectImage: "/assets/img/portfolio/photo_mailer.jpg",
                    projectTags: ["html 5", "css", "Flask", "Python"],
                    projectDescription:
                        "Web app om foto's te verzenden naar gasten.<br/>Inclusief een leuke mail.",
                },
                {
                    projectId: 6,
                    projectName: "WebApp keep track of work hours",
                    projectImage:
                        "/assets/img/portfolio/escaperoomdrachten_uren.jpg",
                    projectTags: ["html 5", "css", "Django", "Python"],
                    projectDescription:
                        "Web app Escaperoom Drachten om de uren registratie van personeel bij te houden. <br/> Personeel werkt steeds meer zelfstandig en zo kan iedereen makkelijk zien wat de planning is",
                },
                {
                    projectId: 7,
                    projectName: "Control of clues send in the escaperoom",
                    projectImage: "/assets/img/portfolio/clue_control.jpg",
                    projectTags: ["PyQt5", "Python"],
                    projectDescription:
                        "GUI voor The Lost Ones. Hints kunnen zo makkelijk getypt worden en laten zien in de kamer",
                },
                {
                    projectId: 8,
                    projectName: "Control of escaperoom",
                    projectImage: "/assets/img/portfolio/automation.jpeg",
                    projectTags: ["Node", "javascript"],
                    projectDescription:
                        "PLC gebaseerd op een Raspberry Pi en een online Portaal om de acties te besturen",
                },
                {
                    projectId: 9,
                    projectName: "Escaperoom Game",
                    projectImage: "/assets/img/portfolio/buttongame.jpeg",
                    projectTags: ["C++", "Arduino"],
                    projectDescription: "Fysieke escaperoom game",
                },
                {
                    projectId: 10,
                    projectName: "Todo App",
                    projectImage: "/assets/img/portfolio/todo.jpg",
                    projectTags: ["html 5", "css", "Django", "Python"],
                    projectDescription: "TODO app",
                },
                {
                    projectId: 11,
                    projectName: "Watermarking Images",
                    projectImage: "/assets/img/portfolio/watermarked.jpg",
                    projectTags: ["PyQt5", "Python", "Pillow"],
                    projectDescription:
                        "Desktop app om het makkelijker te maken om foto's te watermerken. Het gaat per volledige folder",
                },
                {
                    projectId: 12,
                    projectName: "Escaperoom game",
                    projectImage: "/assets/img/portfolio/veet_effect.jpeg",
                    projectTags: ["C++", "Python"],
                    projectDescription:
                        "Licht effect voor een Game in The Lost Ones",
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
