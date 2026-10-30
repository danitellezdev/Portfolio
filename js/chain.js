const SEGMENTS = 10;
const REST_LENGTH = 105;
const MAX_PULL = 70;
const PULL_THRESHOLD = 45;
const CONTAINER_WIDTH = 170;
const CONTAINER_HEIGHT = 240;
const STEP = 1000 / 60;
const GRAVITY = 0.9;
const DAMPING = 0.968;
const ITERATIONS = 14;

export function initThemeChain({ slot, handle, portfolio, onToggle }) {
    if (!(slot instanceof HTMLElement) || !(handle instanceof HTMLButtonElement) || !portfolio) {
        return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const container = document.createElement("div");
    container.className = "chain";
    const canvas = document.createElement("canvas");
    canvas.className = "chain__canvas";
    canvas.setAttribute("aria-hidden", "true");
    container.append(canvas, handle);
    document.body.append(container);

    const context = canvas.getContext("2d");
    if (!context) {
        return;
    }

    const anchorX = CONTAINER_WIDTH / 2;
    const points = Array.from({ length: SEGMENTS + 1 }, (_, index) => {
        const y = (REST_LENGTH / SEGMENTS) * index;
        return { x: anchorX, y, px: anchorX, py: y };
    });

    let ratio = 1;
    let extension = 0;
    let extensionVelocity = 0;
    let dragging = false;
    let triggered = false;
    let grabOffset = { x: 0, y: 0 };
    let target = { x: anchorX, y: REST_LENGTH };
    let lastScroll = window.scrollY;
    let accumulator = 0;
    let lastTime = performance.now();
    let elapsed = 0;
    let wasEntered = false;

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    const resize = () => {
        const rect = slot.getBoundingClientRect();
        container.style.left = `${rect.left + rect.width / 2 - CONTAINER_WIDTH / 2}px`;
        ratio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = CONTAINER_WIDTH * ratio;
        canvas.height = CONTAINER_HEIGHT * ratio;
        canvas.style.width = `${CONTAINER_WIDTH}px`;
        canvas.style.height = `${CONTAINER_HEIGHT}px`;
    };

    const kick = (vertical, horizontal) => {
        for (let index = 1; index < points.length; index += 1) {
            const weight = index / SEGMENTS;
            points[index].py += vertical * weight;
            points[index].px += horizontal * weight;
        }
    };

    const releaseHandle = () => {
        if (!dragging) {
            return;
        }
        dragging = false;
        triggered = false;
        handle.classList.remove("is-dragging");
    };

    const trigger = () => {
        triggered = true;
        onToggle();
        kick(-2, (Math.random() > 0.5 ? 1 : -1) * 1.5);
    };

    handle.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        handle.setPointerCapture(event.pointerId);
        const rect = container.getBoundingClientRect();
        const last = points[SEGMENTS];
        grabOffset = {
            x: last.x - (event.clientX - rect.left),
            y: last.y - (event.clientY - rect.top),
        };
        dragging = true;
        triggered = false;
        target = { x: last.x, y: last.y };
        handle.classList.add("is-dragging");
    });

    handle.addEventListener("pointermove", (event) => {
        if (!dragging) {
            return;
        }
        const rect = container.getBoundingClientRect();
        target = {
            x: event.clientX - rect.left + grabOffset.x,
            y: event.clientY - rect.top + grabOffset.y,
        };
    });

    handle.addEventListener("pointerup", releaseHandle);
    handle.addEventListener("pointercancel", releaseHandle);
    handle.addEventListener("lostpointercapture", releaseHandle);

    // Los clics con puntero se ignoran: el cambio de tema solo ocurre al tirar de la cadena.
    handle.addEventListener("click", (event) => {
        if (event.detail !== 0) {
            return;
        }
        extension = 40;
        extensionVelocity = 0;
        trigger();
    });

    const simulate = () => {
        const anchor = points[0];
        anchor.x = anchorX;
        anchor.y = -4;
        anchor.px = anchor.x;
        anchor.py = anchor.y;

        let pulled = 0;
        if (dragging) {
            const dx = target.x - anchorX;
            const dy = target.y - anchor.y;
            const distance = Math.hypot(dx, dy) || 1;
            const maxDistance = REST_LENGTH + MAX_PULL;
            const scale = Math.min(1, maxDistance / distance);
            target.x = anchorX + dx * scale;
            target.y = anchor.y + dy * scale;
            pulled = clamp(Math.hypot(dx * scale, dy * scale) - REST_LENGTH, -10, MAX_PULL);
            extension = pulled;
            extensionVelocity = 0;
            if (!triggered && pulled >= PULL_THRESHOLD) {
                trigger();
            }
        } else {
            extensionVelocity += -extension * 0.18;
            extensionVelocity *= 0.86;
            extension = clamp(extension + extensionVelocity, -10, MAX_PULL);
        }

        const segmentLength = (REST_LENGTH + extension) / SEGMENTS;

        for (let index = 1; index <= SEGMENTS; index += 1) {
            const point = points[index];
            if (dragging && index === SEGMENTS) {
                point.px = point.x;
                point.py = point.y;
                point.x = target.x;
                point.y = target.y;
                continue;
            }
            const wind = reducedMotion.matches
                ? 0
                : Math.sin(elapsed * 0.0011 + index * 0.45) * 0.005 * (index / SEGMENTS);
            const vx = (point.x - point.px) * DAMPING;
            const vy = (point.y - point.py) * DAMPING;
            point.px = point.x;
            point.py = point.y;
            point.x += vx + wind;
            point.y += vy + GRAVITY;
        }

        for (let iteration = 0; iteration < ITERATIONS; iteration += 1) {
            for (let index = 0; index < SEGMENTS; index += 1) {
                const a = points[index];
                const b = points[index + 1];
                const dx = b.x - a.x;
                const dy = b.y - a.y;
                const distance = Math.hypot(dx, dy) || 0.0001;
                const difference = (distance - segmentLength) / distance;
                const aPinned = index === 0;
                const bPinned = dragging && index + 1 === SEGMENTS;
                const aShare = aPinned ? 0 : bPinned ? 1 : 0.5;
                const bShare = bPinned ? 0 : aPinned ? 1 : 0.5;
                a.x += dx * difference * aShare;
                a.y += dy * difference * aShare;
                b.x -= dx * difference * bShare;
                b.y -= dy * difference * bShare;
            }
        }

        for (let index = 1; index <= SEGMENTS; index += 1) {
            const point = points[index];
            point.x = clamp(point.x, 14, CONTAINER_WIDTH - 14);
            point.y = clamp(point.y, -10, CONTAINER_HEIGHT - 44);
        }
    };

    const drawLink = (a, b, index, color) => {
        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2;
        const angle = Math.atan2(b.y - a.y, b.x - a.x);
        const length = Math.hypot(b.x - a.x, b.y - a.y) + 6;
        context.save();
        context.translate(mx, my);
        context.rotate(angle);
        context.strokeStyle = color;
        context.fillStyle = color;
        context.lineWidth = 2;
        context.beginPath();
        if (index % 2 === 0) {
            context.roundRect(-length / 2, -3.4, length, 6.8, 3.4);
            context.stroke();
        } else {
            context.roundRect(-length / 2, -1.3, length, 2.6, 1.3);
            context.fill();
        }
        context.restore();
    };

    const draw = () => {
        const color = getComputedStyle(document.body).getPropertyValue("--chain-color").trim() || "#b8bdc3";
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
        context.clearRect(0, 0, CONTAINER_WIDTH, CONTAINER_HEIGHT);
        context.shadowColor = "rgb(0 0 0 / 28%)";
        context.shadowBlur = 4;
        context.shadowOffsetY = 2;
        for (let index = 0; index < SEGMENTS; index += 1) {
            drawLink(points[index], points[index + 1], index, color);
        }
        context.shadowColor = "transparent";

        const last = points[SEGMENTS];
        const before = points[SEGMENTS - 1];
        const angle = Math.atan2(-(last.x - before.x), last.y - before.y);
        handle.style.transform = `translate(${last.x.toFixed(2)}px, ${(last.y - 2).toFixed(2)}px) rotate(${angle.toFixed(4)}rad)`;
    };

    const frame = (now) => {
        const delta = Math.min(now - lastTime, 100);
        lastTime = now;
        const entered = portfolio.classList.contains("is-entered");
        if (entered !== wasEntered) {
            wasEntered = entered;
            resize();
        }
        container.classList.toggle("is-visible", entered);

        const scroll = window.scrollY;
        const scrollDelta = scroll - lastScroll;
        lastScroll = scroll;

        if (entered && !document.hidden) {
            if (scrollDelta !== 0 && !reducedMotion.matches) {
                const force = clamp(scrollDelta, -40, 40);
                kick(force * 0.035, force * 0.012);
            }
            accumulator += delta;
            elapsed += delta;
            let steps = 0;
            while (accumulator >= STEP && steps < 4) {
                simulate();
                accumulator -= STEP;
                steps += 1;
            }
            accumulator = Math.min(accumulator, STEP);
            draw();
        }
        window.requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener("resize", resize);
    window.requestAnimationFrame((now) => {
        lastTime = now;
        frame(now);
    });
}
