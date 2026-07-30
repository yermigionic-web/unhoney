/* Underground Honey — app shell */
(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  let activeChar = null;
  let entered = false;

  const splash = $("#splash");
  const splashEnter = $("#splashEnter");
  const shatter = $("#shatter");
  const chromeBar = $("#chrome");
  const main = $("#main");
  const bgm = $("#bgm");
  const muteBtn = $("#muteBtn");
  const castGrid = $("#castGrid");
  const modal = $("#charModal");
  const unlockForm = $("#unlockForm");
  const unlockInput = $("#unlockInput");
  const unlockErr = $("#unlockErr");

  function playBgm() {
    if (!bgm) return;
    try {
      bgm.volume = 0.45;
      const p = bgm.play();
      if (p && typeof p.catch === "function") p.catch(function () {});
    } catch (_) {}
  }

  function enterSite(e) {
    if (entered) return;
    entered = true;
    if (e) {
      try { e.preventDefault(); } catch (_) {}
    }

    playBgm();
    if (shatter) shatter.classList.add("is-active");
    if (splash) splash.classList.add("is-gone");

    const glitch = $("#glitchText");
    const lines = ["CLASSIFIED BROADCAST", "愛は罪", "BLACK HIVE ONLINE", "12 CONTESTANTS", "LOVE IS A SIN"];
    let i = 0;
    const glitchTimer = setInterval(function () {
      i = (i + 1) % lines.length;
      if (glitch) glitch.textContent = lines[i];
    }, 160);

    setTimeout(function () {
      clearInterval(glitchTimer);
      if (chromeBar) chromeBar.hidden = false;
      if (main) main.hidden = false;
      if (shatter) shatter.classList.remove("is-active");
      try {
        renderCast("all");
        if (window.UH && typeof UH.initHiveGame === "function") UH.initHiveGame();
        const probe = new Image();
        probe.onload = function () {
          const stage = $(".intro__stage");
          if (stage) stage.classList.add("has-exterior");
        };
        probe.src = "assets/hive_exterior.jpg";
      } catch (err) {
        console.error(err);
      }
      window.scrollTo(0, 0);
    }, 1150);
  }

  /* Bind enter FIRST so later errors can't block the splash */
  function bindEnter(el) {
    if (!el) return;
    el.addEventListener("click", enterSite);
    el.addEventListener("touchend", function (e) {
      e.preventDefault();
      enterSite(e);
    }, { passive: false });
  }
  bindEnter(splashEnter);
  if (splash) {
    splash.style.cursor = "pointer";
    splash.addEventListener("click", function (e) {
      if (e.target.closest && e.target.closest("#muteBtn")) return;
      enterSite(e);
    });
    splash.addEventListener("touchend", function (e) {
      if (e.target.closest && e.target.closest("#muteBtn")) return;
      e.preventDefault();
      enterSite(e);
    }, { passive: false });
  }

  function getUnlocked() {
    try {
      return new Set(JSON.parse(localStorage.getItem(UH.STORAGE_KEY) || "[]"));
    } catch (_) {
      return new Set();
    }
  }

  function setUnlocked(set) {
    localStorage.setItem(UH.STORAGE_KEY, JSON.stringify(Array.from(set)));
  }

  function isUnlocked(char) {
    if (!char.locked) return true;
    return getUnlocked().has(char.id);
  }

  function displayChar(char) {
    if (char.locked && isUnlocked(char) && char.unlockedProfile) {
      return Object.assign({}, char, char.unlockedProfile, {
        locked: false,
        jp: char.unlockedProfile.jp,
      });
    }
    return char;
  }

  function renderCast(filter) {
    if (!castGrid || !window.UH) return;
    filter = filter || "all";
    castGrid.innerHTML = "";
    UH.characters.forEach(function (raw) {
      if (filter !== "all" && raw.gender !== filter) return;

      const unlocked = isUnlocked(raw);
      const char = displayChar(raw);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cast-card" + (raw.locked && !unlocked ? " is-locked" : "");
      btn.dataset.id = raw.id;
      btn.dataset.gender = raw.gender;

      const showName = raw.locked && !unlocked ? "???" : char.name;
      const showJob = raw.locked && !unlocked ? "CLASSIFIED" : char.job;

      btn.innerHTML =
        '<img class="cast-card__img" src="' + raw.poster + '" alt="' + showName + '" loading="lazy" width="300" height="400" />' +
        '<div class="cast-card__veil"></div>' +
        (raw.locked && !unlocked
          ? '<div class="cast-card__lock" aria-hidden="true"><svg viewBox="0 0 64 64" width="36" height="36"><rect x="14" y="28" width="36" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M22 28v-8a10 10 0 0120 0v8" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="42" r="3" fill="currentColor"/></svg></div><span class="cast-card__badge">LOCKED</span>'
          : raw.locked && unlocked
            ? '<span class="cast-card__badge">UNLOCKED</span>'
            : "") +
        '<div class="cast-card__info"><h3 class="cast-card__name">' + showName + '</h3><p class="cast-card__role">' + showJob + "</p></div>";

      btn.addEventListener("click", function () { openModal(raw.id); });
      castGrid.appendChild(btn);
    });
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    activeChar = null;
  }

  function profileHTML(char) {
    const rows = [
      ["OCCUPATION", char.job],
      ["SPEECH", char.speech],
      ["PROFILE", char.summary],
      ["APPEARANCE", char.look],
      ["BACKGROUND", char.bg],
      ["LIKES", char.like],
      ["DISLIKES", char.dislike],
      ["BEHAVIOR", char.habit],
      ["WHY HERE", char.reason],
    ];
    if (char.nick) rows.push(["ADDRESSING", char.nick]);

    return (
      rows
        .map(function (pair) {
          return '<div class="profile-block"><h4>' + pair[0] + "</h4><p>" + pair[1] + "</p></div>";
        })
        .join("") +
      '<blockquote class="profile-quote">' +
      char.quote +
      "<cite>" +
      (char.quoteKo || "") +
      "</cite></blockquote>"
    );
  }

  function openModal(id) {
    if (!window.UH) return;
    const raw = UH.characters.find(function (c) { return c.id === id; });
    if (!raw) return;
    activeChar = raw;
    const unlocked = isUnlocked(raw);
    const char = displayChar(raw);

    const img = $("#modalImg");
    const lockedEl = $("#modalLocked");
    const poster = $(".modal__poster");
    const meta = $("#modalMeta");
    const name = $("#modalName");
    const jp = $("#modalJp");
    const content = $("#modalContent");

    if (img) {
      img.src = raw.poster;
      img.alt = unlocked || !raw.locked ? char.name : "비공개 출연자";
    }

    if (raw.locked && !unlocked) {
      if (poster) poster.classList.add("is-blurred");
      if (lockedEl) lockedEl.hidden = false;
      if (unlockForm) unlockForm.hidden = false;
      if (unlockInput) unlockInput.value = "";
      if (unlockErr) unlockErr.hidden = true;
      if (meta) meta.textContent = "FILE / UH-???? · " + (raw.gender === "f" ? "FEMALE" : "MALE");
      if (name) name.textContent = "???";
      if (jp) jp.textContent = "登場禁止 · BEFORE EP.05";
      if (content) {
        content.innerHTML =
          '<div class="profile-block"><h4>STATUS</h4><p>메기 파일. 5화 이전 공개 금지. 비밀번호는 해당 인물의 <strong>한국어 이름</strong>입니다.</p></div>' +
          '<div class="profile-block"><h4>NOTE</h4><p>' + raw.summary + "</p></div>";
      }
    } else {
      if (poster) poster.classList.remove("is-blurred");
      if (lockedEl) lockedEl.hidden = true;
      if (unlockForm) unlockForm.hidden = true;
      if (meta) {
        meta.textContent =
          "FILE / UH-" +
          String(raw.id).toUpperCase() +
          " · " +
          char.age +
          " · " +
          (char.height || "—") +
          " · " +
          (raw.gender === "f" ? "FEMALE" : "MALE");
      }
      if (name) name.textContent = char.name;
      if (jp) jp.textContent = char.jp;
      if (content) content.innerHTML = profileHTML(char);
    }

    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const closeBtn = $(".modal__close");
    if (closeBtn) closeBtn.focus();
  }

  if (unlockForm) {
    unlockForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!activeChar || !activeChar.locked) return;
      const val = (unlockInput && unlockInput.value ? unlockInput.value : "").trim();
      if (val === activeChar.password) {
        const set = getUnlocked();
        set.add(activeChar.id);
        setUnlocked(set);
        if (unlockErr) unlockErr.hidden = true;
        const id = activeChar.id;
        const active = $(".chip.is-active");
        const filter = (active && active.dataset.filter) || "all";
        renderCast(filter);
        openModal(id);
      } else {
        if (unlockErr) unlockErr.hidden = false;
        if (unlockInput) unlockInput.select();
      }
    });
  }

  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target.hasAttribute("data-close")) closeModal();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal && !modal.hidden) closeModal();
  });

  $$(".chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      $$(".chip").forEach(function (c) {
        c.classList.remove("is-active");
        c.setAttribute("aria-selected", "false");
      });
      chip.classList.add("is-active");
      chip.setAttribute("aria-selected", "true");
      renderCast(chip.dataset.filter);
    });
  });

  if (muteBtn && bgm) {
    muteBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      bgm.muted = !bgm.muted;
      muteBtn.classList.toggle("is-muted", bgm.muted);
      muteBtn.setAttribute("aria-pressed", String(bgm.muted));
      muteBtn.setAttribute("aria-label", bgm.muted ? "BGM 켜기" : "BGM 음소거");
    });
  }

  if ("requestIdleCallback" in window && window.UH) {
    requestIdleCallback(function () {
      UH.characters.forEach(function (c) {
        const img = new Image();
        img.src = c.poster;
      });
    });
  }
})();
