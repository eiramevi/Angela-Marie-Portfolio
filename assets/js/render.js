(function renderHomelabCards() {
  const grid = document.getElementById('homelab-cards');
  const empty = document.getElementById('homelab-empty');
  const viewMoreWrap = document.getElementById('homelab-view-more-wrap');
  if (!grid || typeof PROJECTS === 'undefined') return;

  const MAX_CARDS = 3;
  const published = PROJECTS.filter((p) => p.published !== false);

  if (published.length === 0) {
    empty.classList.remove('hidden');
    return;
  }

  const displayed = published.slice(0, MAX_CARDS);

  grid.innerHTML = displayed.map((project) => {
    const cat = (typeof CATEGORIES !== 'undefined')
        ? CATEGORIES.find((c) => c.slug === project.category)
        : null;
    const cover = project.images && project.images.length ? project.images[0].src : null;
    const coverHtml = cover
        ? `<img src="homelab/${cover}" alt="${project.title}" class="homelab-card-cover">`
        : `<div class="homelab-card-cover" style="display:flex;align-items:center;justify-content:center;color:var(--muted);font-family:'DM Mono',monospace;font-size:0.75rem;">No screenshot yet</div>`;

    return `
      <a href="homelab/project.html?slug=${project.slug}" class="homelab-card fade-up">
        ${coverHtml}
        <div class="homelab-card-body">
          <div class="homelab-card-category">${cat ? cat.name : ''}</div>
          <div class="homelab-card-title">${project.title}</div>
          ${project.summary ? `<div class="homelab-card-desc">${project.summary}</div>` : ''}
        </div>
      </a>
    `;
  }).join('');

  if (published.length > MAX_CARDS && viewMoreWrap) {
    viewMoreWrap.classList.remove('hidden');
  }
})();

// Fade-up on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Hero entrance animation
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('#hero');
  hero.style.opacity = '0';
  hero.style.transform = 'translateY(20px)';
  hero.style.transition = 'opacity 1s ease, transform 1s ease';
  setTimeout(() => {
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
  }, 100);
});

/* ============================================================
   CERTIFICATES — cards + lightbox
   Cards are always clickable (buttons) and open the full-size
   certificate in a lightbox. If a certificate has a
   credentialUrl, a "Verify credential" link shows in the
   lightbox's side panel; otherwise that link is just hidden.
   ============================================================ */

(function renderCertificates() {
  const grid = document.getElementById('certificates-grid');
  const empty = document.getElementById('certificates-empty');
  if (!grid || typeof CERTIFICATES === 'undefined') return;

  if (CERTIFICATES.length === 0) {
    empty.classList.remove('hidden');
    return;
  }

  grid.innerHTML = CERTIFICATES.map((cert, index) => {
    const coverHtml = cert.image
        ? `<img src="${cert.image}" alt="${cert.title}" class="cert-card-cover">`
        : `<div class="cert-card-cover" style="display:flex;align-items:center;justify-content:center;color:var(--muted);font-family:'DM Mono',monospace;font-size:0.75rem;">No image yet</div>`;

    const dateHtml = cert.date ? `<div class="cert-card-date">${formatCertDate(cert.date)}</div>` : '';

    return `
        <button type="button" class="cert-card fade-up" onclick="openCertLightbox(${index})">
            ${coverHtml}
            <div class="cert-card-body">
              ${cert.issuer ? `<div class="cert-card-issuer">${cert.issuer}</div>` : ''}
              <div class="cert-card-title">${cert.title}</div>
              ${dateHtml}
            </div>
        </button>
    `;
  }).join('');

  // Newly-injected cards need to be handed to the fade-up observer too.
  document.querySelectorAll('#certificates-grid .fade-up').forEach((el) => observer.observe(el));

  updateCertNavVisibility();
})();

function updateCertNavVisibility() {
  const track = document.getElementById('certificates-grid');
  const prevBtn = document.getElementById('cert-prev-btn');
  const nextBtn = document.getElementById('cert-next-btn');
  if (!track || !prevBtn || !nextBtn) return;

  const hasOverflow = track.scrollWidth > track.clientWidth + 4;
  prevBtn.classList.toggle('hidden', !hasOverflow);
  nextBtn.classList.toggle('hidden', !hasOverflow);
}

function scrollCertsPrev() {
  const track = document.getElementById('certificates-grid');
  if (!track) return;
  track.scrollBy({ left: -284, behavior: 'smooth' });
}

function scrollCertsNext() {
  const track = document.getElementById('certificates-grid');
  if (!track) return;
  track.scrollBy({ left: 284, behavior: 'smooth' });
}

window.addEventListener('resize', updateCertNavVisibility);

function formatCertDate(isoString) {
  if (!isoString) return '';
  const d = new Date(isoString + 'T00:00:00');
  if (isNaN(d)) return isoString;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

let certLightboxIndex = 0;

function openCertLightbox(index) {
  certLightboxIndex = index;
  renderCertLightbox();
  document.getElementById('cert-lightbox').classList.add('open');
}

function closeCertLightbox() {
  document.getElementById('cert-lightbox').classList.remove('open');
}

function showPrevCert(e) {
  if (e) e.stopPropagation();
  certLightboxIndex = (certLightboxIndex - 1 + CERTIFICATES.length) % CERTIFICATES.length;
  renderCertLightbox();
}

function showNextCert(e) {
  if (e) e.stopPropagation();
  certLightboxIndex = (certLightboxIndex + 1) % CERTIFICATES.length;
  renderCertLightbox();
}

function renderCertLightbox() {
  const cert = CERTIFICATES[certLightboxIndex];

  document.getElementById('cert-lightbox-img').src = cert.image || '';
  document.getElementById('cert-lightbox-img').alt = cert.title || '';

  const showArrows = CERTIFICATES.length > 1;
  document.getElementById('cert-lightbox-prev').classList.toggle('hidden', !showArrows);
  document.getElementById('cert-lightbox-next').classList.toggle('hidden', !showArrows);
}

document.addEventListener('keydown', (e) => {
  const box = document.getElementById('cert-lightbox');
  if (!box || !box.classList.contains('open')) return;
  if (e.key === 'Escape') closeCertLightbox();
  if (e.key === 'ArrowLeft') showPrevCert();
  if (e.key === 'ArrowRight') showNextCert();
});
