/**
 * Success International Church — Homepage Renderer
 * ---------------------------------------------------------------
 * Reads SERMONS from sermons-data.js and fills in every element in
 * index.html tagged with a [data-hook]. This is what makes adding a
 * sermon to sermons-data.js actually show up on the homepage —
 * without this file, index.html is just static HTML and never
 * changes no matter what's in the data file.
 *
 * Runs on DOMContentLoaded, BEFORE audio-player.js's own
 * DOMContentLoaded handler (script order in index.html guarantees
 * this), so the audio elements already have their real `src` set
 * by the time the player wires itself up.
 */

(function () {
  function hook(name) {
    return document.querySelector(`[data-hook="${name}"]`);
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function whatsappShareUrl(quote, sermon) {
    const notesUrl = `${window.location.origin}/sermons/${sermon.slug}.html`;
    const text = `"${quote}" — ${sermon.title}, Success International Church. ${notesUrl}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  function facebookShareUrl(sermon) {
    const notesUrl = `${window.location.origin}/sermons/${sermon.slug}.html`;
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(notesUrl)}`;
  }

  function render() {
    if (typeof SERMONS === "undefined" || SERMONS.length === 0) return;

    const latest = getLatestSermon();
    const others = SERMONS.filter((s) => s.slug !== latest.slug).sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    const notesUrl = `sermons/${latest.slug}.html`;

    // --- Hero ---------------------------------------------------------
    hook("hero-notes-link").setAttribute("href", notesUrl);
    hook("hero-audio").setAttribute("src", latest.audioSrc);
    hook("hero-title").textContent = latest.title;
    hook("hero-sub").textContent = `${latest.scriptureRef} · Latest Message`;

    // --- Featured sermon ------------------------------------------------
    hook("featured-title").textContent = latest.title;
    hook("featured-scripture").textContent = latest.scriptureRef;
    hook("featured-date").textContent = formatDate(latest.date);
    hook("featured-length").textContent = latest.durationLabel
      ? `${latest.durationLabel.split(":")[0]} minutes`
      : "";
    hook("featured-description").textContent = latest.description;
    hook("featured-notes-link").setAttribute("href", notesUrl);
    hook("featured-audio").setAttribute("src", latest.audioSrc);
    hook("featured-player-title").textContent = latest.title;
    hook("featured-player-sub").textContent = latest.durationLabel || "";
    hook("featured-download").setAttribute("href", latest.audioSrc);

    // --- Signposts (dynamic points list) --------------------------------
    const signpostsEl = hook("signposts-container");
    if (signpostsEl && latest.points && latest.points.length) {
      const [first, ...rest] = latest.points;
      const labelFor = (i) =>
        ["Sign post one", "Sign post two", "Sign post three", "Sign post four"][i] ||
        `Sign post ${i + 1}`;

      let html = `
        <div class="signpost signpost-vision">
          <p class="signpost-label">${labelFor(0)}</p>
          <h3>${escapeHtml(first.title)}</h3>
          <p>${escapeHtml(first.body)}</p>
        </div>`;

      if (rest.length) {
        html += `<div class="signpost-secondary-col">`;
        rest.forEach((p, i) => {
          html += `
            <div class="signpost signpost-diligence">
              <p class="signpost-label">${labelFor(i + 1)}</p>
              <h3>${escapeHtml(p.title)}</h3>
              <p>${escapeHtml(p.body)}</p>
            </div>`;
        });
        html += `</div>`;
      }
      signpostsEl.innerHTML = html;
    }

    // --- Quotes -----------------------------------------------------------
    const quotesEl = hook("quotes-container");
    if (quotesEl && latest.quotes && latest.quotes.length) {
      quotesEl.innerHTML = latest.quotes
        .map(
          (q) => `
        <div class="quote-card">
          <blockquote>&ldquo;${escapeHtml(q)}&rdquo;</blockquote>
          <div class="quote-share">
            <a href="${whatsappShareUrl(q, latest)}" target="_blank" rel="noopener">WhatsApp</a>
            <a href="${facebookShareUrl(latest)}" target="_blank" rel="noopener">Facebook</a>
          </div>
        </div>`
        )
        .join("");
    }

    // --- Scripture feature --------------------------------------------------
    hook("scripture-text").innerHTML = `&ldquo;${escapeHtml(latest.scriptureText)}&rdquo;`;
    hook("scripture-ref").textContent = `${latest.scriptureRef}, KJV`;

    // --- Notes preview -----------------------------------------------------
    hook("notes-preview-title").textContent = latest.title;
    hook("notes-preview-link").setAttribute("href", notesUrl);

    const pointsListEl = hook("notes-preview-points");
    if (pointsListEl) {
      pointsListEl.innerHTML = latest.points
        .map((p) => `<li>${escapeHtml(p.title)} — ${escapeHtml(p.summary)}</li>`)
        .join("");
    }

    const appsListEl = hook("notes-preview-applications");
    if (appsListEl) {
      appsListEl.innerHTML = latest.applications
        .slice(0, 2)
        .map((a) => `<li>${escapeHtml(a)}</li>`)
        .join("");
    }

    // --- More messages (keeps older sermons reachable) ----------------------
    if (others.length) {
      const section = hook("more-messages-section");
      const list = hook("more-messages-list");
      section.style.display = "";
      list.innerHTML = others
        .map(
          (s) => `
        <div class="notes-card">
          <h4><a href="sermons/${s.slug}.html" style="color: var(--ink); text-decoration: none;">${escapeHtml(s.title)}</a></h4>
          <p style="color: var(--brown); margin: 0;">${s.scriptureRef} · ${formatDate(s.date)}</p>
        </div>`
        )
        .join("");
    }
  }

  document.addEventListener("DOMContentLoaded", render);
})();
