export function initIntro() {
    const intro = document.querySelector("#intro");
    const image = intro?.querySelector(".intro-image");
    const camera = intro?.querySelector(".intro-camera");
    const codeRow = intro?.querySelector(".monitor-code-row");
    const typingParts = codeRow?.querySelectorAll("[data-typing-part]");
    const indicator = intro?.querySelector(".scroll-indicator");
    const stage = intro?.querySelector(".intro-stage");
    const portfolio = document.querySelector("#portfolio");
    const homeButton = portfolio?.querySelector(".wordmark");
    const portfolioTitle = portfolio?.querySelector("#portfolio-title");
    const skipLink = document.querySelector("[data-skip-to-content]");

    if (
        !(intro instanceof HTMLElement)
        || !(image instanceof HTMLImageElement)
        || !(camera instanceof HTMLElement)
        || !(codeRow instanceof HTMLElement)
        || !typingParts
        || typingParts.length !== 3
        || !(typingParts[0] instanceof HTMLElement)
        || !(typingParts[1] instanceof HTMLElement)
        || !(typingParts[2] instanceof HTMLElement)
        || !(stage instanceof HTMLElement)
        || !(portfolio instanceof HTMLElement)
        || !(homeButton instanceof HTMLAnchorElement)
    ) {
        return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactViewport = window.matchMedia("(max-width: 1024px)");
    let entering = false;
    let entered = false;
    let focusPortfolioAfterEntry = false;
    let transitionTimer = 0;
    let touchStartY = null;
    let typingTimer = 0;
    const typingContent = ["<h2>", "Web Developer & IT Professional", "</h2>"];

    const updateEditorPosition = () => {
        if (compactViewport.matches) {
            codeRow.style.display = "none";
            codeRow.style.visibility = "hidden";
            return;
        }

        if (!image.naturalWidth || !image.naturalHeight || !stage.clientWidth || !stage.clientHeight) {
            return;
        }

        const contentWidth = stage.clientWidth;
        const contentHeight = stage.clientHeight;
        const isPortraitMobile = stage.clientWidth <= 600;
        const imageScale = isPortraitMobile
            ? Math.min(
                contentWidth / image.naturalWidth,
                contentHeight / image.naturalHeight,
            )
            : Math.max(
                contentWidth / image.naturalWidth,
                contentHeight / image.naturalHeight,
            );
        const imageOffsetX = (contentWidth - image.naturalWidth * imageScale) * 0.5;
        const imageOffsetY = (contentHeight - image.naturalHeight * imageScale)
            * (isPortraitMobile ? 0.5 : 0.44);
        const codeRowPosition = isPortraitMobile
            ? { x: 237, y: 557, width: 350 }
            : { x: 237, y: 557, width: 220 };
        const left = imageOffsetX + codeRowPosition.x * imageScale;
        const top = imageOffsetY + codeRowPosition.y * imageScale;
        const screenAngle = -2.3;

        codeRow.style.display = "block";
        codeRow.style.left = `${(left / contentWidth) * 100}%`;
        codeRow.style.top = `${(top / contentHeight) * 100}%`;
        codeRow.style.width = `${(codeRowPosition.width * imageScale / contentWidth) * 100}%`;
        codeRow.style.fontSize = `${(isPortraitMobile ? 12 : 9) * imageScale}px`;
        codeRow.style.setProperty("--monitor-line-angle", `${screenAngle}deg`);
        codeRow.style.visibility = "visible";
    };

    const stopTyping = () => {
        window.clearTimeout(typingTimer);
        typingTimer = 0;
    };

    const startTyping = () => {
        stopTyping();
        const text = typingContent.join("");
        typingParts.forEach((part) => {
            part.textContent = "";
        });

        if (compactViewport.matches) {
            codeRow.style.display = "none";
            codeRow.style.visibility = "hidden";
            return;
        }

        codeRow.style.display = "block";
        if (reducedMotion.matches) {
            typingParts.forEach((part, index) => {
                part.textContent = typingContent[index];
            });
            return;
        }

        let characterIndex = 0;
        let currentPartIndex = 0;
        let currentPartEnd = typingContent[0].length;

        const typeNextCharacter = () => {
            if (entering || entered) {
                return;
            }

            const character = text[characterIndex];
            typingParts[currentPartIndex].textContent += character;
            characterIndex += 1;

            if (characterIndex === currentPartEnd) {
                currentPartIndex += 1;
                if (currentPartIndex < typingContent.length) {
                    currentPartEnd += typingContent[currentPartIndex].length;
                }
            }

            if (characterIndex === text.length) {
                typingTimer = window.setTimeout(startTyping, 2600);
                return;
            }

            const pause = character === " " ? 35 : /[-&]/.test(character) ? 95 : 0;
            typingTimer = window.setTimeout(typeNextCharacter, 42 + Math.random() * 38 + pause);
        };

        typingTimer = window.setTimeout(typeNextCharacter, 450);
    };

    const finishEntry = () => {
        if (!entering) {
            return;
        }

        window.clearTimeout(transitionTimer);
        stopTyping();
        entering = false;
        entered = true;
        intro.classList.remove("is-entering");
        intro.classList.add("is-entered");
        camera.style.removeProperty("transform");
        camera.style.removeProperty("animation");
        intro.inert = true;
        portfolio.classList.add("is-entered");
        portfolio.inert = false;
        window.scrollTo({ top: 0, behavior: "instant" });

        if (
            portfolioTitle instanceof HTMLElement
            && (focusPortfolioAfterEntry || intro.contains(document.activeElement))
        ) {
            portfolioTitle.focus({ preventScroll: true });
            focusPortfolioAfterEntry = false;
        }
    };

    const enterPortfolio = () => {
        if (entering || entered) {
            return;
        }

        entering = true;
        stopTyping();

        if (reducedMotion.matches) {
            intro.classList.add("is-entering");
            finishEntry();
            return;
        }

        const cameraTransform = getComputedStyle(camera).transform;
        camera.style.animation = "none";
        camera.style.transform = cameraTransform;
        intro.classList.add("is-entering");
        window.requestAnimationFrame(() => {
            if (entering) {
                camera.style.removeProperty("transform");
            }
        });

        transitionTimer = window.setTimeout(finishEntry, 2100);
    };

    const handleCameraTransitionEnd = (event) => {
        if (event.target === camera && event.propertyName === "transform") {
            finishEntry();
        }
    };

    const handleWheel = (event) => {
        if (entered) {
            return;
        }

        if (event.deltaY === 0) {
            return;
        }

        event.preventDefault();

        if (event.deltaY < 0) {
            enterPortfolio();
        }
    };

    const handleTouchStart = (event) => {
        touchStartY = event.touches.length === 1 ? event.touches[0].clientY : null;
    };

    const handleTouchMove = (event) => {
        if (entering || entered || touchStartY === null || event.touches.length !== 1) {
            return;
        }

        if (touchStartY - event.touches[0].clientY > 16) {
            touchStartY = null;
            enterPortfolio();
        }
    };

    const handleTouchEnd = (event) => {
        if (entered || touchStartY === null || event.changedTouches.length !== 1) {
            touchStartY = null;
            return;
        }

        const swipeDistance = touchStartY - event.changedTouches[0].clientY;
        touchStartY = null;

        if (swipeDistance > 32) {
            enterPortfolio();
        }
    };

    const handleIndicatorClick = (event) => {
        event.preventDefault();
        enterPortfolio();
    };

    const handleSkipToContent = (event) => {
        event.preventDefault();

        if (!(portfolioTitle instanceof HTMLElement)) {
            return;
        }

        if (!entered) {
            focusPortfolioAfterEntry = true;
            enterPortfolio();
            return;
        }

        portfolioTitle.focus({ preventScroll: true });
        portfolioTitle.scrollIntoView({
            behavior: reducedMotion.matches ? "instant" : "smooth",
            block: "start",
        });
    };

    const handleHomeClick = (event) => {
        event.preventDefault();

        if (!entered) {
            return;
        }

        window.clearTimeout(transitionTimer);
        entering = false;
        entered = false;
        intro.classList.remove("is-entered");
        intro.inert = false;
        intro.classList.add("is-entering");
        portfolio.inert = true;
        portfolio.classList.remove("is-entered");
        window.scrollTo({ top: 0, behavior: "instant" });
        startTyping();

        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                intro.classList.remove("is-entering");

                if (indicator instanceof HTMLElement) {
                    indicator.focus({ preventScroll: true });
                }
            });
        });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", updateEditorPosition, { passive: true });
    if (skipLink instanceof HTMLAnchorElement) {
        skipLink.addEventListener("click", handleSkipToContent);
    }
    camera.addEventListener("transitionend", handleCameraTransitionEnd);
    compactViewport.addEventListener("change", () => {
        startTyping();
    });
    image.addEventListener("load", updateEditorPosition, { once: true });
    stage.addEventListener("touchstart", handleTouchStart, { passive: true });
    stage.addEventListener("touchmove", handleTouchMove, { passive: true });
    stage.addEventListener("touchend", handleTouchEnd, { passive: true });
    indicator?.addEventListener("click", handleIndicatorClick);
    homeButton.addEventListener("click", handleHomeClick);

    if (image.complete) {
        updateEditorPosition();
    }

    startTyping();
}
