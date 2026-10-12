let currentProject = null;
let currentIndex = 0;
let isZoomed = false;

function getSlugFromUrl() {
    return new URLSearchParams(window.location.search).get("slug");
}

function renderProject() {
    const slug = getSlugFromUrl();
    currentProject = slug ? projectBySlug(slug) : null;

    if (!currentProject) {
        document.getElementById("project-not-found").classList.remove("hidden");
        return;
    }

    document.getElementById("project-content").classList.remove("hidden");
    document.title = currentProject.title + " — " + SITE.name;

    const cat = categoryBySlug(currentProject.category);
    document.getElementById("proj-category").textContent = cat ? cat.name : "";
    document.getElementById("proj-title").textContent = currentProject.title;
    document.getElementById("proj-tools").innerHTML = currentProject.tools
        ? `<strong>Tools:</strong> ${currentProject.tools}` : "";
    document.getElementById("proj-date").innerHTML = currentProject.completedOn
        ? `<strong>Completed:</strong> ${formatDate(currentProject.completedOn)}` : "";
        document.getElementById("proj-date").innerHTML = currentProject.completedOn
        ? `<strong>Completed:</strong> ${formatDate(currentProject.completedOn)}` : "";
        const summaryEl = document.getElementById("proj-summary");
        if (currentProject.summary) {
            summaryEl.textContent = currentProject.summary;
            summaryEl.classList.remove("hidden");
        } else {
            summaryEl.classList.add("hidden");
        }

    // Screenshot grid
    const gallery = document.getElementById("proj-gallery");
    const images = currentProject.images || [];
    gallery.innerHTML = images.map((img, index) => `
        <button type="button" onclick="openLightbox(${index})" class="gallery-card fade-up">
            <img src="${img.src}" alt="${(img.caption || currentProject.title)}">
            ${img.caption ? `<p class="gallery-card-caption">${img.caption}</p>` : ""}
        </button>
    `).join("");

    // Description
    const descEl = document.getElementById("proj-description");
    if (currentProject.description) {
        descEl.innerHTML = escapeHtml(currentProject.description).replace(/\n/g, "<br>");
    } else {
        descEl.classList.add("hidden");
    }

    // Related projects
    const related = publishedProjects()
        .filter((p) => p.category === currentProject.category && p.slug !== currentProject.slug)
        .slice(0, 3);

    if (related.length > 0) {
        document.getElementById("proj-related-wrap").classList.remove("hidden");
        document.getElementById("proj-related-heading").textContent = "More in " + (cat ? cat.name : "this category");
        document.getElementById("proj-related").innerHTML = related.map((p) => {
            const cover = coverImage(p);
            const coverHtml = cover
                ? `<img src="${cover.src}" alt="${p.title}" class="homelab-card-cover">`
                : `<div class="homelab-card-cover"></div>`;
            return `
                <a href="project.html?slug=${p.slug}" class="homelab-card fade-up">
                    ${coverHtml}
                    <div class="homelab-card-body">
                        <div class="homelab-card-title" style="margin-bottom:0;">${p.title}</div>
                    </div>
                </a>
            `;
        }).join("");
    }

    initFadeUp();
}

function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

// --- Lightbox (zoom, prev/next, arrow keys) ---
function openLightbox(index) {
    currentIndex = index;
    renderLightbox();
    document.getElementById("lightbox").classList.add("open");
}

function renderLightbox() {
    const images = currentProject.images || [];
    const item = images[currentIndex];
    const img = document.getElementById("lightbox-img");
    img.src = item.src;
    resetZoom();

    document.getElementById("lightbox-fullsize").href = item.src;

    const captionEl = document.getElementById("lightbox-caption");
    const emptyEl = document.getElementById("lightbox-caption-empty");
    if (item.caption && item.caption.trim() !== "") {
        captionEl.textContent = item.caption;
        captionEl.classList.remove("hidden");
        emptyEl.classList.add("hidden");
    } else {
        captionEl.classList.add("hidden");
        emptyEl.classList.remove("hidden");
    }

    document.getElementById("lightbox-counter").textContent = (currentIndex + 1) + " / " + images.length;

    const showArrows = images.length > 1;
    document.getElementById("lightbox-prev").style.display = showArrows ? "flex" : "none";
    document.getElementById("lightbox-next").style.display = showArrows ? "flex" : "none";
}

function showPrev(e) {
    if (e) e.stopPropagation();
    const images = currentProject.images || [];
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    renderLightbox();
}

function showNext(e) {
    if (e) e.stopPropagation();
    const images = currentProject.images || [];
    currentIndex = (currentIndex + 1) % images.length;
    renderLightbox();
}

function closeLightbox() {
    document.getElementById("lightbox").classList.remove("open");
    resetZoom();
}

function toggleZoom() {
    const img = document.getElementById("lightbox-img");
    const wrap = document.getElementById("lightbox-img-wrap");
    isZoomed = !isZoomed;
    if (isZoomed) {
        img.style.maxWidth = "none";
        img.style.width = "180%";
        img.style.cursor = "zoom-out";
        wrap.style.justifyContent = "flex-start";
        wrap.style.alignItems = "flex-start";
    } else {
        resetZoom();
    }
}

function resetZoom() {
    const img = document.getElementById("lightbox-img");
    const wrap = document.getElementById("lightbox-img-wrap");
    isZoomed = false;
    img.style.width = "";
    img.style.maxWidth = "";
    img.style.cursor = "zoom-in";
    wrap.style.justifyContent = "";
    wrap.style.alignItems = "";
    wrap.scrollTop = 0;
    wrap.scrollLeft = 0;
}

document.addEventListener("keydown", (e) => {
    const box = document.getElementById("lightbox");
    if (!box.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "ArrowRight") showNext();
});

document.addEventListener("DOMContentLoaded", renderProject);
