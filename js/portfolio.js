import { initThemeChain } from "./chain.js";
import { initStory } from "./story.js";
import { translations } from "./translations.js";

export function initPortfolio() {
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
    const cvDownloadDialog = document.querySelector("[data-cv-download-dialog]");
    const cvDownloadTriggers = document.querySelectorAll("[data-cv-download-trigger]");
    const cvDownloadClose = cvDownloadDialog?.querySelector("[data-cv-download-close]");
    const projectPreviewDialog = document.querySelector("[data-project-preview-dialog]");
    const projectPreviewImage = projectPreviewDialog?.querySelector(".project-preview__image");
    const projectPreviewZoom = projectPreviewDialog?.querySelector("[data-project-preview-zoom]");
    const projectPreviewPrevious = projectPreviewDialog?.querySelector("[data-project-preview-previous]");
    const projectPreviewNext = projectPreviewDialog?.querySelector("[data-project-preview-next]");
    const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
    let currentLanguage = requestedLanguage === "en" || document.documentElement.lang === "en" ? "en" : "es";
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
        const currentUrl = new URL(window.location.href);
        if (language === "en") {
            currentUrl.searchParams.set("lang", "en");
        } else {
            currentUrl.searchParams.delete("lang");
        }
        window.history.replaceState(null, "", `${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`);
        const canonicalUrl = language === "en"
            ? "https://danieltellez.dev/?lang=en"
            : "https://danieltellez.dev/";
        document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
        document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonicalUrl);

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

        document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
            const key = element.dataset.i18nAlt;
            const translation = dictionary[key];
            if (typeof translation === "string") {
                element.setAttribute("alt", translation);
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
            const key = element.dataset.i18nPlaceholder;
            const translation = dictionary[key];
            if (typeof translation === "string") {
                element.setAttribute("placeholder", translation);
            }
        });

        document.querySelectorAll("[data-i18n-href]").forEach((element) => {
            const key = element.dataset.i18nHref;
            const translation = dictionary[key];
            if (typeof translation === "string") {
                element.setAttribute("href", translation);
            }
        });

        document.querySelectorAll("meta[data-i18n-content]").forEach((element) => {
            const key = element.dataset.i18nContent;
            const translation = dictionary[key];
            if (element instanceof HTMLMetaElement && typeof translation === "string") {
                element.content = translation;
            }
        });

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

    if (
        cvDownloadDialog instanceof HTMLDialogElement
        && cvDownloadClose instanceof HTMLButtonElement
    ) {
        cvDownloadTriggers.forEach((trigger) => {
            if (!(trigger instanceof HTMLButtonElement)) {
                return;
            }

            trigger.addEventListener("click", () => {
                if (!cvDownloadDialog.open) {
                    cvDownloadDialog.showModal();
                }
            });
        });

        cvDownloadClose.addEventListener("click", () => {
            cvDownloadDialog.close();
        });

        cvDownloadDialog.addEventListener("click", (event) => {
            if (event.target === cvDownloadDialog) {
                cvDownloadDialog.close();
            }
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
