// Shared helpers used by both index.html and project.html
// Styling here intentionally mirrors the main portfolio.html (same fonts,
// nav, cards, footer) so this sub-site reads as one continuous site.

function categoryBySlug(slug) {
    return CATEGORIES.find((c) => c.slug === slug);
}

function projectBySlug(slug) {
    return PROJECTS.find((p) => p.slug === slug && p.published !== false);
}

function publishedProjects() {
    return PROJECTS.filter((p) => p.published !== false);
}

function formatDate(isoString) {
    if (!isoString) return "";
    const d = new Date(isoString + "T00:00:00");
    if (isNaN(d)) return isoString;
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function coverImage(project) {
    return project.images && project.images.length ? project.images[0] : null;
}

function siteInitials() {
    const namePart = (SITE.name || "").split("—")[0].trim();
    const words = namePart.split(/\s+/).filter(Boolean);
    const initials = words.slice(0, 2).map((w) => w[0].toUpperCase()).join("");
    return (initials || "P") + ".";
}

/* ---------- Day / Night mode ---------- */
// Dark is the default (matches the main portfolio.html), 'light' class opts
// a visitor into the day-mode palette defined in assets/css/theme.css.

function isLightMode() {
    return document.documentElement.classList.contains("light");
}

function applyTheme(isLight) {
    document.documentElement.classList.toggle("light", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
    updateThemeToggleIcon();
}

function toggleTheme() {
    applyTheme(!isLightMode());
}

function updateThemeToggleIcon() {
    document.querySelectorAll(".theme-toggle").forEach((btn) => {
        // Sun icon in dark mode (click for day mode), moon icon in light mode (click for night mode)
        btn.innerHTML = isLightMode()
            ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
            : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg>`;
        btn.setAttribute("aria-label", isLightMode() ? "Switch to night mode" : "Switch to day mode");
    });
}

/* ---------- Nav / footer (same structure & classes as portfolio.html) ---------- */

function renderHeader() {
    document.title = SITE.name;
    const el = document.getElementById("site-header");
    if (!el) return;
    const initials = siteInitials();
    el.innerHTML = `
        <a href="../portfolio.html" class="nav-logo">${initials}</a>
        <ul class="nav-links">
            <li><a href="../portfolio.html">Portfolio</a></li>
            <li><a href="index.html">Lab Projects</a></li>
            <li><button type="button" class="theme-toggle" onclick="toggleTheme()"></button></li>
        </ul>
    `;
    updateThemeToggleIcon();
}

function renderFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;
    const initials = siteInitials();
    el.innerHTML = `
        <a href="index.html" class="footer-logo">${initials}</a>
        <div class="footer-copy">&copy; ${new Date().getFullYear()} ${SITE.name}</div>
        <div class="footer-links">
            <a href="../portfolio.html">Main Portfolio</a>
        </div>
    `;
}

function initFadeUp() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    }, { threshold: 0.1 });
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFooter();
    initFadeUp();
});
