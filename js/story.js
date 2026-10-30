const HIDE_DELAY = 180;

export function initStory() {
    const grid = document.querySelector("[data-story]");
    if (!(grid instanceof HTMLElement)) {
        return;
    }

    const triggers = [".story__portrait", ".story-card__link", ".story-preview"]
        .flatMap((selector) => [...grid.querySelectorAll(selector)])
        .filter((element) => element instanceof HTMLElement);
    const canPreview = window.matchMedia(
        "(min-width: 1001px) and (hover: hover) and (pointer: fine) and (not (any-pointer: coarse))",
    );
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let hideTimer = 0;

    const show = () => {
        if (!canPreview.matches) {
            return;
        }

        window.clearTimeout(hideTimer);
        grid.classList.add("is-previewing");
    };

    const hide = () => {
        window.clearTimeout(hideTimer);
        hideTimer = window.setTimeout(() => grid.classList.remove("is-previewing"), HIDE_DELAY);
    };

    triggers.forEach((trigger) => {
        trigger.addEventListener("pointerenter", (event) => {
            if (event.pointerType !== "touch") {
                show();
            }
        });
        trigger.addEventListener("pointerleave", hide);
        trigger.addEventListener("focusin", show);
        trigger.addEventListener("focusout", hide);
    });

    canPreview.addEventListener("change", (event) => {
        if (!event.matches) {
            window.clearTimeout(hideTimer);
            grid.classList.remove("is-previewing");
        }
    });

    grid.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            window.clearTimeout(hideTimer);
            grid.classList.remove("is-previewing");
        }
    });

    let frame = 0;
    const updateParallax = () => {
        frame = 0;
        const rect = grid.getBoundingClientRect();
        const viewport = window.innerHeight;
        const progress = (rect.top + rect.height / 2 - viewport / 2) / (viewport / 2 + rect.height / 2);
        grid.style.setProperty("--story-shift", Math.max(-1, Math.min(1, progress)).toFixed(3));
    };

    const requestUpdate = () => {
        if (!frame && !reducedMotion.matches) {
            frame = window.requestAnimationFrame(updateParallax);
        }
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();
}
