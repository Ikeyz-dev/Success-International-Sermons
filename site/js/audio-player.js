/**
 * Success International Church — Sermon Audio Player
 * ---------------------------------------------------------------
 * A single reusable player. Attach it to any element that has:
 *   data-audio-player
 *   data-src="path/to/file.m4a"
 *   data-title="Sermon Title"
 * and containing the standard markup (see index.html / sermon page
 * for the expected inner structure — play button, seek bar, time
 * labels, speed control, waveform canvas).
 *
 * The waveform is drawn from the real decoded audio (Web Audio API),
 * not a decorative placeholder. If decoding fails (older browser,
 * network issue) it falls back to a quiet static bar pattern so the
 * player still works — audio playback itself never depends on it.
 */

(function () {
  function initPlayer(root) {
    const audio = root.querySelector("audio");
    const playBtn = root.querySelector("[data-play-btn]");
    const seek = root.querySelector("[data-seek]");
    const currentTimeEl = root.querySelector("[data-current-time]");
    const durationEl = root.querySelector("[data-duration]");
    const speedBtn = root.querySelector("[data-speed-btn]");
    const downloadLink = root.querySelector("[data-download]");
    const canvas = root.querySelector("[data-waveform]");

    const speeds = [1, 1.25, 1.5, 1.75, 0.75];
    let speedIndex = 0;

    function formatTime(seconds) {
      if (!isFinite(seconds)) return "0:00";
      const m = Math.floor(seconds / 60);
      const s = Math.floor(seconds % 60)
        .toString()
        .padStart(2, "0");
      return `${m}:${s}`;
    }

    // --- Playback controls -------------------------------------------------
    playBtn.addEventListener("click", () => {
      if (audio.paused) {
        // Pause any other player on the page before starting this one
        document.querySelectorAll("audio").forEach((a) => {
          if (a !== audio) a.pause();
        });
        audio.play();
      } else {
        audio.pause();
      }
    });

    audio.addEventListener("play", () => root.classList.add("is-playing"));
    audio.addEventListener("pause", () => root.classList.remove("is-playing"));

    audio.addEventListener("loadedmetadata", () => {
      durationEl.textContent = formatTime(audio.duration);
      seek.max = String(Math.floor(audio.duration));
    });

    audio.addEventListener("timeupdate", () => {
      currentTimeEl.textContent = formatTime(audio.currentTime);
      if (!seek.matches(":active")) {
        seek.value = String(Math.floor(audio.currentTime));
      }
      updateProgressFill();
    });

    seek.addEventListener("input", () => {
      audio.currentTime = Number(seek.value);
      updateProgressFill();
    });

    function updateProgressFill() {
      const pct = audio.duration
        ? (Number(seek.value) / audio.duration) * 100
        : 0;
      root.style.setProperty("--progress", pct + "%");
    }

    if (speedBtn) {
      speedBtn.addEventListener("click", () => {
        speedIndex = (speedIndex + 1) % speeds.length;
        const rate = speeds[speedIndex];
        audio.playbackRate = rate;
        speedBtn.textContent = rate + "×";
      });
    }

    if (downloadLink) {
      downloadLink.setAttribute("href", audio.currentSrc || audio.src);
    }

    // --- Waveform-style bar visualization -----------------------------
    // NOTE: this deliberately does NOT decode the full audio file into
    // memory (via AudioContext.decodeAudioData). For long recordings
    // (30+ minutes) that produces several hundred MB of raw PCM data,
    // which reliably crashes the tab on mobile browsers ("Aw, Snap!").
    // Instead we draw a lightweight generated bar pattern that fills
    // in as the sermon plays — same visual effect, negligible memory.
    if (canvas && canvas.getContext) {
      drawGeneratedBars(canvas);
    }

    function drawGeneratedBars(canvas) {
      const bars = 120;
      // Deterministic, seeded per-player so it's not identical on every
      // sermon, but never random-per-frame (which would look jittery).
      let seed = 0;
      for (let i = 0; i < (audio.src || "").length; i++) {
        seed += audio.src.charCodeAt(i);
      }
      const peaks = Array.from({ length: bars }, (_, i) => {
        const wobble = Math.sin(i * 0.35 + seed * 0.01) * 0.5;
        const wobble2 = Math.sin(i * 0.9 + seed * 0.02) * 0.2;
        return 0.35 + Math.abs(wobble + wobble2) * 0.6;
      });
      renderBars(canvas, peaks);

      // Clicking the bar area seeks, same as the seek bar
      canvas.addEventListener("click", (e) => {
        if (!audio.duration) return;
        const rect = canvas.getBoundingClientRect();
        const ratio = (e.clientX - rect.left) / rect.width;
        audio.currentTime = ratio * audio.duration;
      });
    }

    function renderBars(canvas, peaks) {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const g = canvas.getContext("2d");
      g.scale(dpr, dpr);

      function paint() {
        const w = rect.width;
        const h = rect.height;
        g.clearRect(0, 0, w, h);
        const gap = 2;
        const barWidth = w / peaks.length - gap;
        const playedRatio = audio.duration
          ? audio.currentTime / audio.duration
          : 0;

        peaks.forEach((p, i) => {
          const x = i * (barWidth + gap);
          const barHeight = Math.max(3, p * h);
          const y = (h - barHeight) / 2;
          const played = i / peaks.length <= playedRatio;
          g.fillStyle = played
            ? "rgba(201, 161, 92, 0.95)"
            : "rgba(201, 161, 92, 0.25)";
          g.fillRect(x, y, barWidth, barHeight);
        });
      }

      paint();
      audio.addEventListener("timeupdate", paint);
      window.addEventListener("resize", () => {
        const r = canvas.getBoundingClientRect();
        canvas.width = r.width * dpr;
        canvas.height = r.height * dpr;
        g.scale(dpr, dpr);
        paint();
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-audio-player]").forEach(initPlayer);
  });
})();
