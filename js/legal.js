const themeButton = document.querySelector("[data-legal-theme-toggle]");
const themeIcon = themeButton?.querySelector("[data-legal-theme-icon]");

if (themeButton instanceof HTMLButtonElement && themeIcon instanceof HTMLElement) {
    let transitionTimer = 0;
    const isEnglish = document.documentElement.lang === "en";
    const themeLabels = isEnglish
        ? { light: "Switch to light theme", dark: "Switch to dark theme" }
        : { light: "Cambiar a tema claro", dark: "Cambiar a tema oscuro" };

    themeButton.addEventListener("click", () => {
        const isLight = document.body.dataset.theme === "light";
        const nextTheme = isLight ? "dark" : "light";

        document.documentElement.classList.add("theme-transition");
        window.clearTimeout(transitionTimer);
        transitionTimer = window.setTimeout(() => {
            document.documentElement.classList.remove("theme-transition");
        }, 700);

        document.body.dataset.theme = nextTheme;
        themeButton.setAttribute("aria-pressed", String(!isLight));
        themeButton.setAttribute(
            "aria-label",
            isLight ? themeLabels.light : themeLabels.dark,
        );
        themeIcon.textContent = isLight ? "☾" : "☼";
        document.querySelector('meta[name="theme-color"]')?.setAttribute(
            "content",
            isLight ? "#0e1419" : "#f5f7fa",
        );
    });
}

const tableOfContents = document.querySelector("[data-legal-toc]");

if (tableOfContents instanceof HTMLElement && "IntersectionObserver" in window) {
    const links = Array.from(tableOfContents.querySelectorAll("a[href^='#']"));
    const sections = links
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter((section) => section instanceof HTMLElement);

    const observer = new IntersectionObserver((entries) => {
        const visibleSection = entries
            .filter((entry) => entry.isIntersecting)
            .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)[0];

        if (!visibleSection) {
            return;
        }

        links.forEach((link) => {
            if (link.hash === `#${visibleSection.target.id}`) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }, {
        rootMargin: "-15% 0px -70% 0px",
    });

    sections.forEach((section) => observer.observe(section));
}
