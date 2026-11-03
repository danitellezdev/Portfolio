import { initThemeChain } from "./chain.js";
import { initStory } from "./story.js";

export function initPortfolio() {
    const translations = {
        es: {
            title: "Daniel Téllez — Desarrollador web",
            metaDescription: "Daniel Téllez — desarrollo web e interfaces digitales.",
            introLabel: "Introducción",
            scrollPrompt: "Desliza hacia arriba para continuar",
            homeLabel: "Volver al inicio",
            navLabel: "Navegación principal",
            navExperience: "Experiencia",
            navProjects: "Proyectos",
            navEducation: "Formación",
            navSkills: "Habilidades",
            navContact: "Contacto",
            languageToggleLabel: "Cambiar idioma a inglés",
            themeLightLabel: "Cambiar a tema claro",
            themeDarkLabel: "Cambiar a tema oscuro",
            heroEyebrow: "Disponible",
            heroName: "Daniel Téllez",
            heroRoleWeb: "Desarrollador web",
            heroRoleIT: "profesional IT",
            heroDescription: "Me gusta construir productos digitales que sean útiles, claros y fáciles de usar. Combino desarrollo web, creatividad y una curiosidad constante por aprender y mejorar cada proyecto.",
            heroProjectsButton: "Explorar proyectos",
            heroContactButton: "Hablemos",
            heroLocation: "Modalidad de trabajo · Híbrido",
            profileImageLabel: "Retrato de Daniel Téllez",
            profileCaption: "CREATIVIDAD · TECNOLOGÍA · DISEÑO",
            experienceTitle: "Experiencia",
            experience1Date: "2026 — Actualidad",
            experience1Company: "AmSpec Iberia · Los Barrios",
            experience1Type: "Sistemas e infraestructura",
            experience1Role: "Soporte IT y Automatización",
            experience1Description: "Soporte técnico a usuarios y colaboración en proyectos de mejora tecnológica y automatización de procesos internos. Participación en la optimización de herramientas corporativas y resolución de incidencias en un entorno empresarial internacional.",
            experience2Date: "2025 — Actualidad",
            experience2Company: "Decathlon · Los Barrios",
            experience2Type: "Soporte Técnico y Resolución de problemas",
            experience2Role: "Técnico taller",
            experience2Description: "Responsable del diagnóstico, reparación y mantenimiento de productos deportivos, utilizando herramientas técnicas y digitales para la gestión de incidencias y el seguimiento de procesos. Esta experiencia reforzó mi capacidad de análisis, resolución de problemas y atención al detalle, habilidades que hoy aplico al desarrollo web y al soporte IT.",
            tagItSupport: "Soporte IT",
            tagAutomation: "Automatización",
            tagProblemSolving: "Resolución de problemas",
            tagTroubleshooting: "Diagnóstico de averías",
            tagTechnicalSupport: "Soporte técnico",
            tagSystems: "Sistemas",
            tagNetworks: "Redes",
            experience3Date: "2023 — Actualidad",
            experience3Company: "Proyectos personales · Remoto",
            experience3Type: "Desarrollo web y soluciones digitales",
            experience3Role: "Desarrollador web",
            experience3Description: "Desarrollo de aplicaciones web, herramientas digitales y proyectos tecnológicos propios utilizando tecnologías modernas, bases de datos, frameworks e inteligencia artificial. Desde la planificación hasta la implementación, combino desarrollo, diseño y resolución de problemas para crear soluciones funcionales, escalables y centradas en el usuario.",
            tagWebDevelopment: "Desarrollo web",
            tagDatabases: "Bases de datos",
            tagFrameworks: "Frameworks",
            tagAI: "IA",
            storyTitle: "Más allá del código",
            storyText1: "Más allá de la tecnología, llevo más de una década vinculado al mundo de la interpretación y los proyectos creativos. Esta experiencia me ha ayudado a desarrollar habilidades de comunicación, trabajo en equipo, adaptación y confianza para afrontar nuevos retos.",
            storyText2: "La creatividad siempre ha sido una parte importante de mi trayectoria. Hoy aplico esa misma creatividad al desarrollo web, combinando tecnología, diseño y resolución de problemas para construir experiencias digitales con personalidad propia.",
            storyFooter: "Explora algunos de mis proyectos artísticos en",
            storyImageLabel: "Retrato de Daniel Téllez. Visitar danitellez.es",
            storyLinkLabel: "danitellez.es (se abre en una pestaña nueva)",
            projectsTitle: "Proyectos destacados",
            project1Type: "Automatización y monitorización",
            project1Title: "Backup Monitor",
            project1Description: "Sistema de monitorización diseñado para ofrecer visibilidad completa sobre las copias de seguridad de los laboratorios. Automatiza la recopilación de datos, clasifica estados de funcionamiento, genera informes Excel y proporciona un panel web centralizado para detectar incidencias de forma rápida y eficiente.",
            projectPreviewLabel: "Vista previa del proyecto",
            projectPreviewClose: "Cerrar vista previa",
            projectPreviewZoomIn: "Ampliar imagen",
            projectPreviewZoomOut: "Reducir imagen",
            projectPreviewAlt: "Panel de monitorización de copias de seguridad con indicadores operativos, advertencias y errores",
            projectPreviewPrevious: "Foto anterior",
            projectPreviewNext: "Foto siguiente",
            projectGalleryHomeAlt: "Captura de la página de inicio de danitellez.es",
            projectGalleryFilmographyAlt: "Captura de la filmografía de danitellez.es",
            projectGalleryVideobookAlt: "Captura del videobook de danitellez.es",
            projectGalleryPressAlt: "Captura de la sección de prensa de danitellez.es",
            projectGalleryContactAlt: "Captura de la sección de contacto de danitellez.es",
            projectGalleryLiberarteHomeAlt: "Página de inicio de la plataforma LiberArte",
            projectGalleryLiberarteLoginAlt: "Inicio de sesión de LiberArte",
            projectGalleryLiberarteAdminAlt: "Panel de administración de LiberArte con indicadores de gestión",
            projectGalleryLiberarteActivitiesAlt: "Módulo de administración de actividades de LiberArte",
            projectGalleryLiberarteEmployeesAlt: "Módulo de gestión de empleados de LiberArte",
            projectGalleryLiberarteRegistrationsAlt: "Módulo de inscripciones de LiberArte",
            projectGalleryLiberarteUsersAlt: "Módulo de gestión de usuarios de LiberArte",
            projectGalleryLiberarteTutorAlt: "Panel de tutor de LiberArte",
            projectGalleryLiberarteTutorActivitiesAlt: "Actividades disponibles en el panel de tutor de LiberArte",
            projectGalleryLiberarteSchedulesAlt: "Horarios del panel de tutor de LiberArte",
            projectGalleryLiberarteStudentAlt: "Perfil de alumno en LiberArte",
            projectGalleryLiberartePricingAlt: "Tarifas de las actividades de LiberArte",
            projectGalleryLiberarteNewsAlt: "Novedades de LiberArte",
            projectGalleryLiberarteContactAlt: "Página de contacto de LiberArte",
            projectGalleryVerbQuestPracticeAlt: "Ejercicio interactivo de verbos en VerbQuest",
            projectGalleryVerbQuestProgressAlt: "Seguimiento del progreso de aprendizaje en VerbQuest",
            projectGalleryVerbQuestChallengeAlt: "Reto de aprendizaje de inglés en VerbQuest",
            projectGalleryVerbQuestAchievementAlt: "Logro obtenido en la plataforma educativa VerbQuest",
            project2Type: "Diseño web y marca personal",
            project2Title: "Danitellez.es",
            project2Description: "Sitio web profesional desarrollado para presentar la trayectoria artística y audiovisual de Dani Téllez. Diseñado como portfolio digital, reúne biografía, filmografía, book fotográfico, videobook, apariciones en medios y vías de contacto en una experiencia visual moderna, accesible y optimizada para cualquier dispositivo.",
            project2ImageAlt: "Captura de la portada de danitellez.es con un retrato profesional de Dani Téllez",
            project2Accessibility: "Accesibilidad",
            project2Responsive: "Responsive Design",
            projectWebsiteLink: "Ver sitio",
            project3Type: "APLICACIÓN WEB FULL STACK",
            project3Title: "LiberArte",
            project3Description: "Aplicación web desarrollada para digitalizar y centralizar la gestión de un centro infantil de actividades artísticas. Incorpora distintos niveles de acceso, paneles personalizados y una arquitectura basada en API que conecta una interfaz moderna con un sistema de gestión completo para administradores, empleados y tutores.",
            project4Type: "APLICACIÓN WEB EDUCATIVA",
            project4Title: "VerbQuest",
            project4Description: "Plataforma educativa desarrollada para facilitar el aprendizaje del inglés mediante ejercicios interactivos, seguimiento del progreso y mecánicas de gamificación. El proyecto incorpora prácticas de verbos y tiempos verbales, interfaz bilingüe y almacenamiento local para ofrecer una experiencia personalizada sin necesidad de registro.",
            projectLink: "Ver proyecto",
            archiveOpen: "Deslizar",
            archiveClose: "Cerrar",
            archiveOpenLabel: "Desplegar el archivador de proyectos",
            archiveCloseLabel: "Cerrar el archivador de proyectos",
            educationTitle: "Formación y Certificaciones",
            educationAcademicTitle: "Formación académica",
            educationComplementaryTitle: "Formación complementaria",
            educationFinished: "Finalizado",
            educationCompleted: "Completado",
            educationInProgress: "Cursando",
            educationDawTitle: "Desarrollo de Aplicaciones Web (DAW)",
            educationDawDescription: "Formación orientada al desarrollo de soluciones web modernas, combinando programación, bases de datos, diseño de interfaces y metodologías de desarrollo para crear aplicaciones funcionales y escalables.",
            educationJavascriptTitle: "Máster en JavaScript y Desarrollo Web Full-Stack",
            educationJavascriptDescription: "Especialización en desarrollo web Full Stack mediante tecnologías modernas del ecosistema JavaScript, abordando tanto el desarrollo frontend como backend y la creación de aplicaciones completas.",
            educationFullStackTitle: "Curso de Programación Web Full-Stack",
            educationFullStackDescription: "Formación práctica en desarrollo web completo, trabajando la comunicación entre cliente y servidor, bases de datos y la construcción de aplicaciones dinámicas.",
            educationJavaTitle: "Curso de Programación en Java",
            educationJavaDescription: "Formación en fundamentos de Java, programación orientada a objetos, estructuras de datos y buenas prácticas para el desarrollo de aplicaciones.",
            educationPythonCopilotTitle: "Python + Copilot: Aprende a programar con IA",
            educationPythonCopilotDescription: "Aprendizaje de Python combinado con el uso de GitHub Copilot para automatización, resolución de problemas y desarrollo asistido por inteligencia artificial.",
            skillsTitle: "Tecnologías y competencias",
            skillsLanguages: "Idiomas",
            skillResponsive: "Diseño responsive",
            skillAccessibility: "Accesibilidad web",
            skillsTools: "Herramientas",
            skillRestApis: "APIs REST",
            skillAuthPermissions: "Autenticación y permisos",
            skillVisualStudioCode: "Visual Studio Code",
            skillWebDeployment: "Despliegue web",
            skillSpanishNative: "Español (Nativo)",
            skillEnglishB1: "Inglés (B1)",
            skillAutomation: "Automatización",
            skillsInfrastructure: "IT e infraestructura",
            skillsAi: "Inteligencia Artificial",
            skillAiAutomation: "Automatización con IA",
            skillContentGeneration: "Generación de Contenido",
            skillDevelopmentAssistance: "Asistencia al Desarrollo",
            skillNetworks: "Redes",
            skillItSupport: "Soporte IT",
            contactTitle: "¿Tienes algo en mente?",
            formName: "Nombre",
            formNamePlaceholder: "Tu nombre",
            formEmail: "Email",
            formEmailPlaceholder: "tu@email.com",
            formMessage: "Mensaje",
            formMessagePlaceholder: "Cuéntame un poco sobre tu proyecto...",
            formSubmit: "Enviar mensaje",
            formSending: "Enviando mensaje...",
            formValidationError: "Escribe tu nombre y un mensaje antes de enviar.",
            formError: "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directamente.",
            contactInfoLabel: "Información de contacto",
            contactSocialEyebrow: "También puedes encontrarme en",
            linkedinPlaceholder: "LinkedIn",
            githubPlaceholder: "GitHub",
            cvPrompt: "¿Quieres conocer más?",
            cvDownload: "Descargar CV",
            backToTopLabel: "Volver arriba",
            footerCredit: "Diseñado y construido con intención",
            footerBackToTop: "Volver al inicio",
            formStatus: "Mensaje enviado. Te responderé lo antes posible.",
            emailSubject: (name) => `Nuevo mensaje de ${name}`,
        },
        en: {
            title: "Daniel Téllez — Web Developer",
            metaDescription: "Daniel Téllez — web development and digital interfaces.",
            introLabel: "Introduction",
            scrollPrompt: "Swipe up to continue",
            homeLabel: "Back to home",
            navLabel: "Main navigation",
            navExperience: "Experience",
            navProjects: "Projects",
            navEducation: "Education",
            navSkills: "Skills",
            navContact: "Contact",
            languageToggleLabel: "Switch language to Spanish",
            themeLightLabel: "Switch to light theme",
            themeDarkLabel: "Switch to dark theme",
            heroEyebrow: "Available",
            heroName: "Daniel Téllez",
            heroRoleWeb: "Web developer",
            heroRoleIT: "IT professional",
            heroDescription: "I enjoy building digital products that are useful, clear, and easy to use. I combine web development, creativity, and a constant curiosity to learn and improve every project.",
            heroProjectsButton: "Explore projects",
            heroContactButton: "Get in touch",
            heroLocation: "Work arrangement · Hybrid",
            profileImageLabel: "Portrait of Daniel Téllez",
            profileCaption: "CREATIVITY · TECHNOLOGY · DESIGN",
            experienceTitle: "Experience",
            experienceNote: "Sample content: replace dates, companies, and roles with your own experience.",
            experience1Date: "2026 — Present",
            experience1Company: "AmSpec Iberia · Los Barrios",
            experience1Type: "Systems and infrastructure",
            experience1Role: "IT Support & Automation",
            experience1Description: "Technical support for users and collaboration on technology improvement projects and the automation of internal processes. Involved in optimizing corporate tools and resolving incidents in an international business environment.",
            experience2Date: "2025 — Present",
            experience2Company: "Decathlon · Los Barrios",
            experience2Type: "Technical support & problem solving",
            experience2Role: "Workshop technician",
            experience2Description: "Responsible for diagnosing, repairing, and maintaining sports products, using technical and digital tools to manage incidents and track processes. This experience strengthened my analytical skills, problem solving, and attention to detail, which I now apply to web development and IT support.",
            tagItSupport: "IT Support",
            tagAutomation: "Automation",
            tagProblemSolving: "Problem Solving",
            tagTroubleshooting: "Troubleshooting",
            tagTechnicalSupport: "Technical Support",
            tagSystems: "Systems",
            tagNetworks: "Networking",
            experience3Date: "2023 — Present",
            experience3Company: "Personal projects · Remote",
            experience3Type: "Web development & digital solutions",
            experience3Role: "Web developer",
            experience3Description: "Development of web applications, digital tools, and my own technology projects using modern technologies, databases, frameworks, and artificial intelligence. From planning through to implementation, I combine development, design, and problem solving to create functional, scalable, user-centered solutions.",
            tagWebDevelopment: "Web development",
            tagDatabases: "Databases",
            tagFrameworks: "Frameworks",
            tagAI: "AI",
            storyTitle: "Beyond code",
            storyText1: "Beyond technology, I have been involved in acting and creative projects for over a decade. This experience has helped me develop communication, teamwork, adaptability, and the confidence to take on new challenges.",
            storyText2: "Creativity has always been an important part of my journey. Today I apply that same creativity to web development, combining technology, design, and problem solving to build digital experiences with a personality of their own.",
            storyFooter: "Explore some of my artistic projects at",
            storyImageLabel: "Portrait of Daniel Téllez. Visit danitellez.es",
            storyLinkLabel: "danitellez.es (opens in a new tab)",
            projectsTitle: "Featured projects",
            project1Type: "Automation & Monitoring",
            project1Title: "Backup Monitor",
            project1Description: "A monitoring system designed to provide complete visibility into laboratory backups. It automates data collection, classifies operational statuses, generates Excel reports, and provides a centralized web dashboard to detect incidents quickly and efficiently.",
            projectPreviewLabel: "Project preview",
            projectPreviewClose: "Close preview",
            projectPreviewZoomIn: "Zoom in on image",
            projectPreviewZoomOut: "Zoom out on image",
            projectPreviewAlt: "Backup monitoring dashboard showing operational, warning, and error indicators",
            projectPreviewPrevious: "Previous photo",
            projectPreviewNext: "Next photo",
            projectGalleryHomeAlt: "Screenshot of the danitellez.es home page",
            projectGalleryFilmographyAlt: "Screenshot of the danitellez.es filmography",
            projectGalleryVideobookAlt: "Screenshot of the danitellez.es videobook",
            projectGalleryPressAlt: "Screenshot of the danitellez.es press section",
            projectGalleryContactAlt: "Screenshot of the danitellez.es contact section",
            projectGalleryLiberarteHomeAlt: "LiberArte platform homepage",
            projectGalleryLiberarteLoginAlt: "LiberArte login screen",
            projectGalleryLiberarteAdminAlt: "LiberArte administration dashboard with management metrics",
            projectGalleryLiberarteActivitiesAlt: "LiberArte activity administration module",
            projectGalleryLiberarteEmployeesAlt: "LiberArte employee management module",
            projectGalleryLiberarteRegistrationsAlt: "LiberArte registrations module",
            projectGalleryLiberarteUsersAlt: "LiberArte user management module",
            projectGalleryLiberarteTutorAlt: "LiberArte tutor dashboard",
            projectGalleryLiberarteTutorActivitiesAlt: "Activities in the LiberArte tutor dashboard",
            projectGalleryLiberarteSchedulesAlt: "Schedules in the LiberArte tutor dashboard",
            projectGalleryLiberarteStudentAlt: "Student profile in LiberArte",
            projectGalleryLiberartePricingAlt: "LiberArte activity pricing",
            projectGalleryLiberarteNewsAlt: "LiberArte news page",
            projectGalleryLiberarteContactAlt: "LiberArte contact page",
            projectGalleryVerbQuestPracticeAlt: "Interactive verb exercise in VerbQuest",
            projectGalleryVerbQuestProgressAlt: "Learning progress tracking in VerbQuest",
            projectGalleryVerbQuestChallengeAlt: "English learning challenge in VerbQuest",
            projectGalleryVerbQuestAchievementAlt: "Achievement earned in the VerbQuest learning platform",
            project2Type: "Web Design & Personal Branding",
            project2Title: "Danitellez.es",
            project2Description: "A professional website showcasing Dani Téllez's artistic and audiovisual career. Designed as a digital portfolio, it brings together his biography, filmography, photo book, video reel, media appearances, and contact details in a modern, accessible experience optimized for every device.",
            project2ImageAlt: "Homepage screenshot of danitellez.es featuring a professional portrait of Dani Téllez",
            project2Accessibility: "Accessibility",
            project2Responsive: "Responsive Design",
            projectWebsiteLink: "Visit site",
            project3Type: "FULL-STACK WEB APPLICATION",
            project3Title: "LiberArte",
            project3Description: "A web application built to digitize and centralize the management of a children's center for artistic activities. It features multiple access levels, tailored dashboards, and an API-based architecture connecting a modern interface to a complete management system for administrators, employees, and guardians.",
            project4Type: "EDUCATIONAL WEB APPLICATION",
            project4Title: "VerbQuest",
            project4Description: "An educational platform designed to support English learning through interactive exercises, progress tracking, and gamification. It includes verb and tense practice, a bilingual interface, and local storage to provide a personalized experience without requiring registration.",
            projectLink: "View project",
            archiveOpen: "Slide",
            archiveClose: "Close",
            archiveOpenLabel: "Open the project file",
            archiveCloseLabel: "Close the project file",
            educationTitle: "Education & Certifications",
            educationAcademicTitle: "Academic education",
            educationComplementaryTitle: "Additional education",
            educationFinished: "Completed",
            educationCompleted: "Completed",
            educationInProgress: "In progress",
            educationDawTitle: "Web Application Development (DAW)",
            educationDawDescription: "Training focused on building modern web solutions, combining programming, databases, interface design, and development methodologies to create functional, scalable applications.",
            educationJavascriptTitle: "Master's in JavaScript and Full-Stack Web Development",
            educationJavascriptDescription: "Specialization in Full-Stack web development using modern JavaScript ecosystem technologies, covering both frontend and backend development and the creation of complete applications.",
            educationFullStackTitle: "Full-Stack Web Programming Course",
            educationFullStackDescription: "Practical training in full-stack web development, covering client-server communication, databases, and building dynamic applications.",
            educationJavaTitle: "Java Programming Course",
            educationJavaDescription: "Training in Java fundamentals, object-oriented programming, data structures, and best practices for application development.",
            educationPythonCopilotTitle: "Python + Copilot: Learn to Code with AI",
            educationPythonCopilotDescription: "Learning Python alongside GitHub Copilot for automation, problem-solving, and AI-assisted development.",
            skillsTitle: "Technologies & competencies",
            skillsLanguages: "Languages",
            skillResponsive: "Responsive design",
            skillAccessibility: "Web accessibility",
            skillsTools: "Tools",
            skillRestApis: "REST APIs",
            skillAuthPermissions: "Authentication & permissions",
            skillVisualStudioCode: "Visual Studio Code",
            skillWebDeployment: "Web deployment",
            skillSpanishNative: "Spanish (Native)",
            skillEnglishB1: "English (B1)",
            skillAutomation: "Automation",
            skillsInfrastructure: "IT & infrastructure",
            skillsAi: "Artificial Intelligence",
            skillAiAutomation: "AI automation",
            skillContentGeneration: "Content generation",
            skillDevelopmentAssistance: "Development assistance",
            skillNetworks: "Networking",
            skillItSupport: "IT support",
            contactTitle: "Have something in mind?",
            formName: "Name",
            formNamePlaceholder: "Your name",
            formEmail: "Email",
            formEmailPlaceholder: "you@email.com",
            formMessage: "Message",
            formMessagePlaceholder: "Tell me a little about your project...",
            formSubmit: "Send message",
            formSending: "Sending message...",
            formValidationError: "Please enter your name and a message before sending.",
            formError: "The message could not be sent. Try again or email me directly.",
            contactInfoLabel: "Contact information",
            contactSocialEyebrow: "You can also find me on",
            linkedinPlaceholder: "LinkedIn",
            githubPlaceholder: "GitHub",
            cvPrompt: "Want to learn more?",
            cvDownload: "Download CV",
            backToTopLabel: "Back to top",
            footerCredit: "Designed and built with intention",
            footerBackToTop: "Back to home",
            formStatus: "Message sent. I’ll get back to you as soon as possible.",
            emailSubject: (name) => `New message from ${name}`,
        },
    };
    const elements = document.querySelectorAll(".reveal");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if ("IntersectionObserver" in window && !reducedMotion.matches) {
        document.documentElement.classList.add("has-motion");

        const observer = new IntersectionObserver((entries, activeObserver) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    activeObserver.unobserve(entry.target);
                }
            }
        }, {
            threshold: 0.12,
            rootMargin: "0px 0px -5% 0px",
        });

        elements.forEach((element) => observer.observe(element));
    }

    const backToTop = document.querySelector("[data-back-to-top]");
    const experienceSection = document.getElementById("experiencia");
    if (backToTop instanceof HTMLAnchorElement && experienceSection instanceof HTMLElement) {
        const updateBackToTopVisibility = () => {
            backToTop.classList.toggle(
                "is-visible",
                experienceSection.getBoundingClientRect().top <= window.innerHeight,
            );
        };

        window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
        window.addEventListener("resize", updateBackToTopVisibility);
        updateBackToTopVisibility();
    }

    const themeToggle = document.querySelector(".chain-handle");
    const themeIcon = themeToggle?.querySelector(".chain-handle__icon");
    const languageToggle = document.querySelector(".language-toggle");
    const languageLabel = languageToggle?.querySelector(".language-toggle__label");
    const projectPreviewDialog = document.querySelector("[data-project-preview-dialog]");
    const projectPreviewImage = projectPreviewDialog?.querySelector(".project-preview__image");
    const projectPreviewZoom = projectPreviewDialog?.querySelector("[data-project-preview-zoom]");
    const projectPreviewPrevious = projectPreviewDialog?.querySelector("[data-project-preview-previous]");
    const projectPreviewNext = projectPreviewDialog?.querySelector("[data-project-preview-next]");
    let currentLanguage = document.documentElement.lang === "en" ? "en" : "es";
    const projectGalleries = {
        backup: [
            {
                src: "assets/images/backup/completa_backup.png",
                altKey: "projectPreviewAlt",
            },
        ],
        danitellez: [
            {
                src: "assets/images/danitellez.es/danitellez.es_.png",
                altKey: "projectGalleryHomeAlt",
            },
            {
                src: "assets/images/danitellez.es/danitellez.es_filmografia.html.png",
                altKey: "projectGalleryFilmographyAlt",
            },
            {
                src: "assets/images/danitellez.es/danitellez.es_videobook.html.png",
                altKey: "projectGalleryVideobookAlt",
            },
            {
                src: "assets/images/danitellez.es/danitellez.es_prensa.html.png",
                altKey: "projectGalleryPressAlt",
            },
            {
                src: "assets/images/danitellez.es/danitellez.es_contacto.html.png",
                altKey: "projectGalleryContactAlt",
            },
        ],
        liberarte: [
            {
                src: "assets/images/liberarte/localhost_5173_.png",
                altKey: "projectGalleryLiberarteHomeAlt",
            },
            {
                src: "assets/images/liberarte/localhost_5173_login.png",
                altKey: "projectGalleryLiberarteLoginAlt",
            },
            {
                src: "assets/images/liberarte/localhost_5173_admin.png",
                altKey: "projectGalleryLiberarteAdminAlt",
            },
            {
                src: "assets/images/liberarte/localhost_5173_admin_actividades.png",
                altKey: "projectGalleryLiberarteActivitiesAlt",
            },
            {
                src: "assets/images/liberarte/localhost_5173_admin_empleados.png",
                altKey: "projectGalleryLiberarteEmployeesAlt",
            },
            {
                src: "assets/images/liberarte/localhost_5173_admin_inscripciones.png",
                altKey: "projectGalleryLiberarteRegistrationsAlt",
            },
            {
                src: "assets/images/liberarte/localhost_5173_admin_usuarios.png",
                altKey: "projectGalleryLiberarteUsersAlt",
            },
            {
                src: "assets/images/liberarte/localhost_5173_tutor.png",
                altKey: "projectGalleryLiberarteTutorAlt",
            },
            {
                src: "assets/images/liberarte/localhost_5173_tutor_actividades.png",
                altKey: "projectGalleryLiberarteTutorActivitiesAlt",
            },
            {
                src: "assets/images/liberarte/localhost_5173_tutor_horarios.png",
                altKey: "projectGalleryLiberarteSchedulesAlt",
            },
            {
                src: "assets/images/liberarte/localhost_5173_tutor_perfil-alumno.png",
                altKey: "projectGalleryLiberarteStudentAlt",
            },
            {
                src: "assets/images/liberarte/localhost_5173_tarifas.png",
                altKey: "projectGalleryLiberartePricingAlt",
            },
            {
                src: "assets/images/liberarte/localhost_5173_novedades.png",
                altKey: "projectGalleryLiberarteNewsAlt",
            },
            {
                src: "assets/images/liberarte/localhost_5173_contacto.png",
                altKey: "projectGalleryLiberarteContactAlt",
            },
        ],
        verbquest: [
            {
                src: "assets/images/verbquest/dominaverbos.png",
                altKey: "projectGalleryVerbQuestPracticeAlt",
            },
            {
                src: "assets/images/verbquest/dominaverbos2.png",
                altKey: "projectGalleryVerbQuestProgressAlt",
            },
            {
                src: "assets/images/verbquest/dominaverbos3.png",
                altKey: "projectGalleryVerbQuestChallengeAlt",
            },
            {
                src: "assets/images/verbquest/dominaverbos4.png",
                altKey: "projectGalleryVerbQuestAchievementAlt",
            },
        ],
    };
    let activeGallery = projectGalleries.backup;
    let currentGalleryIndex = 0;

    const syncProjectPreviewZoom = () => {
        if (
            !(projectPreviewDialog instanceof HTMLDialogElement)
            || !(projectPreviewZoom instanceof HTMLButtonElement)
        ) {
            return;
        }

        const isZoomed = projectPreviewDialog.classList.contains("project-preview--zoomed");
        projectPreviewZoom.setAttribute("aria-pressed", String(isZoomed));
        projectPreviewZoom.setAttribute(
            "aria-label",
            translations[currentLanguage][isZoomed ? "projectPreviewZoomOut" : "projectPreviewZoomIn"],
        );
        projectPreviewZoom.textContent = isZoomed ? "-zoom" : "+zoom";
    };

    const updateProjectPreviewImage = () => {
        if (!(projectPreviewImage instanceof HTMLImageElement)) {
            return;
        }

        const image = activeGallery[currentGalleryIndex];
        if (!image) {
            throw new Error("The project preview gallery has no images.");
        }

        const altText = translations[currentLanguage][image.altKey];
        if (typeof altText !== "string") {
            throw new Error(`Missing image description: ${image.altKey}`);
        }

        projectPreviewImage.src = image.src;
        projectPreviewImage.alt = altText;

        if (projectPreviewPrevious instanceof HTMLButtonElement) {
            projectPreviewPrevious.hidden = activeGallery.length < 2;
        }
        if (projectPreviewNext instanceof HTMLButtonElement) {
            projectPreviewNext.hidden = activeGallery.length < 2;
        }
    };

    const selectProjectPreviewImage = (index) => {
        if (!(projectPreviewDialog instanceof HTMLDialogElement) || activeGallery.length === 0) {
            return;
        }

        currentGalleryIndex = (index + activeGallery.length) % activeGallery.length;
        projectPreviewDialog.classList.remove("project-preview--zoomed");
        projectPreviewDialog.scrollTop = 0;
        projectPreviewDialog.scrollLeft = 0;
        updateProjectPreviewImage();
        syncProjectPreviewZoom();
    };

    if (
        themeToggle instanceof HTMLButtonElement
        && themeIcon instanceof HTMLElement
    ) {
        let themeTransitionTimer = 0;
        const toggleTheme = () => {
            const isLight = document.body.dataset.theme === "light";
            const nextTheme = isLight ? "dark" : "light";
            document.documentElement.classList.add("theme-transition");
            window.clearTimeout(themeTransitionTimer);
            themeTransitionTimer = window.setTimeout(() => {
                document.documentElement.classList.remove("theme-transition");
            }, 700);
            document.body.dataset.theme = nextTheme;
            themeToggle.setAttribute(
                "aria-label",
                translations[currentLanguage][isLight ? "themeLightLabel" : "themeDarkLabel"],
            );
            themeIcon.textContent = isLight ? "☾" : "☼";
            document.querySelector('meta[name="theme-color"]')?.setAttribute(
                "content",
                isLight ? "#0e1419" : "#f5f7fa",
            );
        };

        initThemeChain({
            slot: document.querySelector(".chain-slot"),
            handle: themeToggle,
            portfolio: document.getElementById("portfolio"),
            onToggle: toggleTheme,
        });
    }

    const setLanguage = (language) => {
        currentLanguage = language;
        const dictionary = translations[language];
        document.documentElement.lang = language;
        document.title = dictionary.title;

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.dataset.i18n;
            const translation = dictionary[key];
            if (typeof translation === "string") {
                element.textContent = translation;
            }
        });

        document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
            const key = element.dataset.i18nAria;
            const translation = dictionary[key];
            if (typeof translation === "string") {
                element.setAttribute("aria-label", translation);
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
            const key = element.dataset.i18nPlaceholder;
            const translation = dictionary[key];
            if (typeof translation === "string") {
                element.setAttribute("placeholder", translation);
            }
        });

        const description = document.querySelector('meta[name="description"]');
        const translatedDescription = description?.dataset.i18nContent;
        if (description instanceof HTMLMetaElement && translatedDescription) {
            description.content = dictionary[translatedDescription];
        }

        if (languageToggle instanceof HTMLButtonElement && languageLabel instanceof HTMLElement) {
            const targetLanguage = language === "es" ? "en" : "es";
            languageLabel.textContent = targetLanguage.toUpperCase();
            languageToggle.setAttribute("aria-label", dictionary.languageToggleLabel);
        }

        if (themeToggle instanceof HTMLButtonElement) {
            const isLight = document.body.dataset.theme === "light";
            themeToggle.setAttribute("aria-label", dictionary[isLight ? "themeDarkLabel" : "themeLightLabel"]);
        }

        updateProjectPreviewImage();
        syncProjectPreviewZoom();
    };

    setLanguage(currentLanguage);
    initStory();

    if (languageToggle instanceof HTMLButtonElement) {
        languageToggle.addEventListener("click", () => {
            setLanguage(currentLanguage === "es" ? "en" : "es");
        });
    }

    const projectPreviewTriggers = document.querySelectorAll("[data-project-preview]");
    const projectPreviewClose = projectPreviewDialog?.querySelector("[data-project-preview-close]");

    if (
        projectPreviewTriggers.length > 0
        && projectPreviewDialog instanceof HTMLDialogElement
        && projectPreviewClose instanceof HTMLButtonElement
        && projectPreviewZoom instanceof HTMLButtonElement
        && projectPreviewImage instanceof HTMLImageElement
        && projectPreviewPrevious instanceof HTMLButtonElement
        && projectPreviewNext instanceof HTMLButtonElement
    ) {
        const closeProjectPreview = () => {
            projectPreviewDialog.close();
            projectPreviewDialog.classList.remove("project-preview--zoomed");
            syncProjectPreviewZoom();
        };

        projectPreviewTriggers.forEach((trigger) => {
            if (!(trigger instanceof HTMLAnchorElement)) {
                return;
            }

            trigger.addEventListener("click", (event) => {
                const galleryKey = trigger.dataset.projectGallery;
                const gallery = projectGalleries[galleryKey];
                if (!gallery) {
                    throw new Error(`Unknown project preview gallery: ${galleryKey}`);
                }

                event.preventDefault();
                activeGallery = gallery;
                selectProjectPreviewImage(0);
                projectPreviewDialog.showModal();
            });
        });

        projectPreviewPrevious.addEventListener("click", () => {
            selectProjectPreviewImage(currentGalleryIndex - 1);
        });

        projectPreviewNext.addEventListener("click", () => {
            selectProjectPreviewImage(currentGalleryIndex + 1);
        });

        projectPreviewZoom.addEventListener("click", () => {
            projectPreviewDialog.classList.toggle("project-preview--zoomed");
            syncProjectPreviewZoom();
        });

        projectPreviewClose.addEventListener("click", () => {
            closeProjectPreview();
        });

        projectPreviewDialog.addEventListener("close", () => {
            projectPreviewDialog.classList.remove("project-preview--zoomed");
            syncProjectPreviewZoom();
        });

        projectPreviewDialog.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                event.preventDefault();
                closeProjectPreview();
            }
        });

        projectPreviewDialog.addEventListener("click", (event) => {
            if (event.target === projectPreviewDialog) {
                closeProjectPreview();
            }
        });
    }

    const archive = document.querySelector("[data-project-archive]");
    const archiveGrid = archive?.querySelector("[data-project-archive-grid]");
    const archiveOpen = archive?.querySelector("[data-archive-open]");
    const archiveClose = archive?.querySelector("[data-archive-close]");

    if (
        archive instanceof HTMLElement
        && archiveGrid instanceof HTMLElement
        && archiveOpen instanceof HTMLButtonElement
        && archiveClose instanceof HTMLButtonElement
    ) {
        const archiveCards = Array.from(archiveGrid.querySelectorAll(".project-card"));
        const stagger = 80;
        let isStacked = true;

        const getPeek = () => (window.innerWidth <= 680 ? 9 : 34);

        const applyArchiveState = () => {
            archive.classList.toggle("is-stacked", isStacked);
            archiveOpen.setAttribute("aria-expanded", String(!isStacked));
            archiveCards.forEach((card, index) => {
                card.inert = isStacked && index > 0;
            });
            archiveClose.inert = isStacked;
            archiveOpen.inert = !isStacked;
        };

        const layoutArchive = ({ animate = false } = {}) => {
            if (!animate) {
                archive.classList.add("is-measuring");
            }

            const peek = getPeek();
            archiveGrid.style.height = "";
            archiveGrid.style.setProperty("--archive-card-h", "0px");
            const cardHeight = Math.max(...archiveCards.map((card) => card.offsetHeight));
            archiveGrid.style.setProperty("--archive-card-h", `${cardHeight}px`);
            archive.style.setProperty("--archive-card-h", `${cardHeight}px`);

            const openHeight = archiveGrid.offsetHeight;
            const base = archiveCards[0];
            archiveCards.forEach((card, index) => {
                card.style.setProperty("--stack-x", `${base.offsetLeft - card.offsetLeft + index * peek}px`);
                card.style.setProperty("--stack-y", `${base.offsetTop - card.offsetTop}px`);
                card.style.setProperty("--stack-z", String(archiveCards.length - index));
            });
            archive.style.setProperty("--stack-w", `${base.offsetWidth + (archiveCards.length - 1) * peek}px`);
            archiveGrid.style.height = `${isStacked ? cardHeight : openHeight}px`;
            archiveGrid.dataset.openHeight = String(openHeight);
            archiveGrid.dataset.stackedHeight = String(cardHeight);

            if (!animate) {
                void archive.offsetHeight;
                archive.classList.remove("is-measuring");
            }
        };

        const setArchiveStacked = (stacked) => {
            if (stacked === isStacked) {
                return;
            }

            isStacked = stacked;
            const lastIndex = archiveCards.length - 1;
            archiveCards.forEach((card, index) => {
                const order = stacked ? lastIndex - index : index;
                card.style.setProperty("--archive-delay", `${order * stagger}ms`);
                card.classList.add("is-visible");
            });
            archiveGrid.style.height = `${stacked ? archiveGrid.dataset.stackedHeight : archiveGrid.dataset.openHeight}px`;
            applyArchiveState();
        };

        applyArchiveState();
        layoutArchive();

        archiveOpen.addEventListener("click", () => setArchiveStacked(false));
        archiveClose.addEventListener("click", () => setArchiveStacked(true));

        archiveGrid.addEventListener("click", (event) => {
            if (!isStacked) {
                return;
            }

            const first = archiveCards[0].getBoundingClientRect();
            const stackRight = first.left + archiveCards[0].offsetWidth + (archiveCards.length - 1) * getPeek();
            const insideStack = event.clientX > first.right
                && event.clientX <= stackRight
                && event.clientY >= first.top
                && event.clientY <= first.bottom;

            if (insideStack) {
                setArchiveStacked(false);
            }
        });

        let archiveResizeFrame = 0;
        window.addEventListener("resize", () => {
            window.cancelAnimationFrame(archiveResizeFrame);
            archiveResizeFrame = window.requestAnimationFrame(() => layoutArchive());
        });
        window.addEventListener("load", () => layoutArchive());
        archiveCards.forEach((card) => {
            card.querySelectorAll("img").forEach((image) => {
                if (!image.complete) {
                    image.addEventListener("load", () => layoutArchive(), { once: true });
                }
            });
        });

        if (languageToggle instanceof HTMLButtonElement) {
            languageToggle.addEventListener("click", () => layoutArchive());
        }
    }

    const contactForm = document.querySelector("[data-contact-form]");
    const contactStatus = document.querySelector("[data-contact-status]");

    if (contactForm instanceof HTMLFormElement && contactStatus instanceof HTMLElement) {
        contactForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            if (!contactForm.reportValidity()) {
                return;
            }

            const formData = new FormData(contactForm);
            const name = String(formData.get("name") ?? "").trim();
            const email = String(formData.get("email") ?? "").trim();
            const message = String(formData.get("message") ?? "").trim();
            const dictionary = translations[currentLanguage];

            if (!name || !message) {
                contactStatus.textContent = dictionary.formValidationError;
                return;
            }

            const submitButton = contactForm.querySelector('button[type="submit"]');
            if (submitButton instanceof HTMLButtonElement) {
                submitButton.disabled = true;
            }
            contactForm.setAttribute("aria-busy", "true");
            contactStatus.textContent = dictionary.formSending;

            try {
                formData.set("_subject", dictionary.emailSubject(name));
                const response = await fetch(contactForm.action, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                    },
                    body: formData,
                });
                const result = await response.json();

                if (!response.ok || result.ok !== true) {
                    const detail = Array.isArray(result.errors)
                        ? result.errors.map((item) => item.message).filter(Boolean).join(" ")
                        : result.error || result.message;
                    throw new Error(detail || `Formspree returned HTTP ${response.status}.`);
                }

                contactStatus.textContent = dictionary.formStatus;
                contactForm.reset();
            } catch (error) {
                console.error("Contact form submission failed.", error);
                contactStatus.textContent = dictionary.formError;
            } finally {
                contactForm.removeAttribute("aria-busy");
                if (submitButton instanceof HTMLButtonElement) {
                    submitButton.disabled = false;
                }
            }
        });
    }

    const year = document.querySelector("[data-current-year]");

    if (year instanceof HTMLElement) {
        year.textContent = String(new Date().getFullYear());
    }
}
