/**
 * Success International Church — Share Link Fixer
 * ---------------------------------------------------------------
 * Fills in WhatsApp / Facebook share links with the ACTUAL current
 * page URL, read from window.location — never hardcoded. This way
 * share links keep working correctly even if the site's domain
 * changes later (e.g. moving from Netlify to Vercel, or to a
 * custom domain), with nothing to update by hand.
 *
 * Usage: give the anchor tag data-share="whatsapp" or
 * data-share="facebook", plus data-share-text="..." on the
 * WhatsApp link for the message that goes before the link.
 */

(function () {
  function fixShareLinks(root) {
    const url = window.location.href;

    const waLink = root.querySelector('[data-share="whatsapp"]');
    if (waLink) {
      const baseText = waLink.getAttribute("data-share-text") || document.title;
      waLink.href = `https://wa.me/?text=${encodeURIComponent(baseText + " " + url)}`;
    }

    const fbLink = root.querySelector('[data-share="facebook"]');
    if (fbLink) {
      fbLink.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".share-row").forEach(fixShareLinks);
  });
})();
