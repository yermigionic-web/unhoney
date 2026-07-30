/* Black Hive SVG floor-plan explorer */
(function () {
  const NS = "http://www.w3.org/2000/svg";

  function el(name, attrs, parent) {
    const node = document.createElementNS(NS, name);
    if (attrs) {
      Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
    }
    if (parent) parent.appendChild(node);
    return node;
  }

  function initHiveGame() {
    const svg = document.getElementById("hiveMap");
    const panelTitle = document.getElementById("hiveRoomTitle");
    const panelBody = document.getElementById("hiveRoomBody");
    const panelLabel = document.querySelector(".hive__panel-label");
    const cluesEl = document.getElementById("hiveClues");
    const progress = document.getElementById("hiveProgress");
    const finale = document.getElementById("hiveFinale");
    if (!svg || !UH.hiveRooms) return;

    const found = new Set(
      JSON.parse(localStorage.getItem("uh_hive_clues") || "[]")
    );

    // Background plate
    el("rect", { x: 0, y: 0, width: 640, height: 420, fill: "#0a0a0e" }, svg);

    // Soft ambient
    const defs = el("defs", null, svg);
    const grad = el("radialGradient", { id: "hiveAmbient", cx: "50%", cy: "40%", r: "60%" }, defs);
    el("stop", { offset: "0%", "stop-color": "#e91e8c", "stop-opacity": "0.12" }, grad);
    el("stop", { offset: "100%", "stop-color": "#050507", "stop-opacity": "0" }, grad);
    el("rect", { x: 0, y: 0, width: 640, height: 420, fill: "url(#hiveAmbient)", class: "hive-decor" }, svg);

    // Outer mansion wall
    el("rect", {
      x: 40, y: 36, width: 560, height: 348, rx: 4,
      fill: "none", stroke: "#c8c8d0", "stroke-width": 2, opacity: "0.55", class: "hive-decor",
    }, svg);
    el("text", {
      x: 320, y: 28, fill: "#e91e8c", "font-family": "JetBrains Mono, monospace",
      "font-size": "9", "text-anchor": "middle", "letter-spacing": "0.2em", class: "hive-decor",
    }, svg).textContent = "BLACK HIVE · FLOOR 01 · LIVE FEED";

    // Corridor cross
    el("rect", { x: 280, y: 80, width: 80, height: 260, class: "hive-corridor" }, svg);
    el("rect", { x: 100, y: 180, width: 440, height: 60, class: "hive-corridor" }, svg);

    // Decorative chain motif (SVG, logo language)
    const chain = el("g", { class: "hive-decor", opacity: "0.35" }, svg);
    for (let i = 0; i < 8; i++) {
      el("ellipse", {
        cx: 70 + i * 18, cy: 400, rx: 6, ry: 9,
        fill: "none", stroke: "#c8c8d0", "stroke-width": "1.2",
        transform: `rotate(${i % 2 ? 25 : -25} ${70 + i * 18} 400)`,
      }, chain);
    }
    // Magenta heart drip mark
    el("path", {
      d: "M560 392 C560 392 552 384 552 378 C552 373 556 370 560 374 C564 370 568 373 568 378 C568 384 560 392 560 392Z",
      fill: "#e91e8c", opacity: "0.7", class: "hive-decor",
    }, svg);

    const layout = {
      bar: { x: 70, y: 70, w: 190, h: 100, labelX: 165, labelY: 125 },
      pool: { x: 380, y: 70, w: 190, h: 100, labelX: 475, labelY: 125 },
      garden: { x: 70, y: 250, w: 190, h: 110, labelX: 165, labelY: 310 },
      smoke: { x: 380, y: 250, w: 190, h: 110, labelX: 475, labelY: 310 },
    };

    const shortLabels = { bar: "BAR", pool: "POOL", garden: "GARDEN", smoke: "SMOKE" };

    UH.hiveRooms.forEach((room) => {
      const L = layout[room.id];
      const g = el("g", {
        class: "hive-room" + (found.has(room.id) ? " is-found" : ""),
        id: "room-" + room.id,
        tabindex: "0",
        role: "button",
        "aria-label": room.name,
      }, svg);

      el("rect", {
        class: "hive-room__fill",
        x: L.x, y: L.y, width: L.w, height: L.h, rx: "2",
      }, g);

      // Inner dashed “camera frame”
      el("rect", {
        x: L.x + 8, y: L.y + 8, width: L.w - 16, height: L.h - 16, rx: "1",
        fill: "none", stroke: "#e91e8c", "stroke-width": "0.8",
        "stroke-dasharray": "4 3", opacity: "0.35", class: "hive-decor",
      }, g);

      el("text", {
        class: "hive-room__label",
        x: L.labelX, y: L.labelY,
      }, g).textContent = shortLabels[room.id];

      // Status pip
      el("circle", {
        cx: L.x + L.w - 16, cy: L.y + 16, r: 4,
        fill: found.has(room.id) ? "#e91e8c" : "#3a3a44",
        class: "hive-room-pip",
      }, g);

      function activate() {
        selectRoom(room, g);
      }
      g.addEventListener("click", activate);
      g.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activate();
        }
      });
    });

    // Center hub label
    el("text", {
      x: 320, y: 208, fill: "#7a7a88", "font-family": "Syne, sans-serif",
      "font-size": "10", "font-weight": "700", "text-anchor": "middle",
      "letter-spacing": "0.15em", class: "hive-decor",
    }, svg).textContent = "LOBBY";
    el("text", {
      x: 320, y: 222, fill: "#e91e8c", "font-family": "JetBrains Mono, monospace",
      "font-size": "8", "text-anchor": "middle", class: "hive-decor",
    }, svg).textContent = "REC ●";

    function updateProgress() {
      progress.textContent = `CLUES ${found.size} / 4`;
      if (found.size >= 4) {
        finale.hidden = false;
      }
      localStorage.setItem("uh_hive_clues", JSON.stringify([...found]));
    }

    function selectRoom(room, g) {
      panelLabel.textContent = "FEED · " + room.id.toUpperCase() + " · LIVE";
      panelTitle.textContent = room.name;
      panelBody.textContent = room.log;

      if (!found.has(room.id)) {
        found.add(room.id);
        g.classList.add("is-found");
        const pip = g.querySelector(".hive-room-pip");
        if (pip) pip.setAttribute("fill", "#e91e8c");

        const li = document.createElement("li");
        li.textContent = room.clue;
        cluesEl.appendChild(li);
      }

      updateProgress();
    }

    // Restore clue list UI
    UH.hiveRooms.forEach((room) => {
      if (found.has(room.id)) {
        const li = document.createElement("li");
        li.textContent = room.clue;
        cluesEl.appendChild(li);
      }
    });
    updateProgress();
  }

  UH.initHiveGame = initHiveGame;
})();
