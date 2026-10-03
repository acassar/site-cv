(function () {
  const cv = window.CV;

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const icons = {
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    linkedin:
      '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.01M12 17v-7m0 3a3 3 0 0 1 6 0v4"/>',
    globe:
      '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    github:
      '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
  };
  const icon = (name) =>
    `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icons[name] || ""}</svg>`;

  const initials = (s) =>
    s.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");

  const yearsSince = (ym) => {
    const [y, m] = ym.split("-").map(Number);
    const now = new Date();
    return Math.floor((now.getFullYear() * 12 + now.getMonth() + 1 - (y * 12 + m)) / 12);
  };
  const summary = cv.summary.replace("{years}", yearsSince(cv.careerStart));

  const sideTitle = (t) => `<h3 class="side-title">${esc(t)}</h3>`;

  const sidebar = `
    <aside class="sidebar">
      <div class="photo">
        <span>${esc(initials(cv.firstName + " " + cv.lastName))}</span>
        ${cv.photo ? `<img src="${esc(cv.photo)}" alt="" onerror="this.remove()">` : ""}
      </div>

      <section>
        ${sideTitle("Contact")}
        <ul class="contact">
          ${cv.contact.map((c) => `<li${c.printOnly ? ' class="print-only"' : ""}>${icon(c.icon)}${c.href ? `<a href="${esc(c.href)}">${esc(c.label)}</a>` : `<span>${esc(c.label)}</span>`}</li>`).join("")}
        </ul>
      </section>

      <section>
        ${sideTitle("Diplômes")}
        <ul class="edu">
          ${cv.education
            .map(
              (e) => `<li>
                <span class="year">${esc(e.year)}</span>
                <span class="degree">${esc(e.degree)}</span>
                <span class="school">${esc(e.school)}</span>
              </li>`
            )
            .join("")}
        </ul>
      </section>

      <section class="skills">
        ${sideTitle("Compétences")}
        ${cv.skills
          .map(
            (g) => `<h4>${esc(g.group)}</h4>
            <ul>${g.items
              .map(
                (i) => `<li>${esc(i.label)}${
                  i.favorite
                    ? '<svg class="star" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9z"/></svg>'
                    : ""
                }</li>`
              )
              .join("")}</ul>`
          )
          .join("")}
      </section>

      <section class="side-bottom">
        ${sideTitle("Langues")}
        <div class="tags">${cv.languages.map((l) => `<span class="tag">${esc(l)}</span>`).join("")}</div>
        ${sideTitle("Loisirs")}
        <div class="tags">${cv.hobbies.map((h) => `<span class="tag">${esc(h)}</span>`).join("")}</div>
      </section>
    </aside>`;

  const thread = (x) => `
    <section class="thread">
      <div class="day"><span>${esc(x.period)}</span></div>
      <div class="msg in">
        <div class="avatar">${esc(initials(x.company))}</div>
        <div class="bubble">
          <strong>${esc(x.company)}</strong>
          <small>${esc(x.detail)}</small>
        </div>
      </div>
      ${x.missions.map(mission).join("")}
    </section>`;

  const bullets = (items) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;

  function mission(m) {
    const body = `<p>${esc(m.text)}</p>
      <div class="meta">${
        m.details
          ? '<span class="more-hint">Détails<svg class="chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></span>'
          : ""
      }<span class="stack">${esc(m.stack)}</span><svg class="ticks" viewBox="0 0 22 16" aria-hidden="true"><path d="m1.5 8.5 4 4 9-10m-5 10 9-10"/></svg></div>`;
    return `<div class="msg out">${
      m.details
        ? `<details class="bubble"><summary>${body}</summary><div class="more">${bullets(m.details)}</div></details>`
        : `<div class="bubble">${body}</div>`
    }</div>`;
  }

  const detailBlock = (x) => `
    <section class="detail-block">
      <div class="detail-company">
        <div class="avatar">${esc(initials(x.company))}</div>
        <div><strong>${esc(x.company)}</strong><small>${esc(x.detail)}</small></div>
        <span class="period">${esc(x.period)}</span>
      </div>
      <div class="detail-missions">
        ${x.missions
          .filter((m) => m.details)
          .map(
            (m) => `<article class="detail-mission">
              <h3>${esc(m.text)}</h3>
              <span class="stack">${esc(m.stack)}</span>
              ${bullets(m.details)}
            </article>`
          )
          .join("")}
      </div>
    </section>`;

  const detailsPage = `
    <header class="details-header">
      <div>
        <h2>${esc(cv.firstName)} <span>${esc(cv.lastName)}</span></h2>
        <p>&gt; Réalisations en détail</p>
      </div>
      <span class="page-num">2/2</span>
    </header>
    ${cv.experience.map(detailBlock).join("")}`;

  const main = `
    <div class="main">
      <header class="header">
        <h1 class="name">${esc(cv.firstName)} <span>${esc(cv.lastName)}</span></h1>
        <p class="role">&gt; ${esc(cv.role)}<span class="caret"></span></p>
        <p class="summary">${esc(summary)}</p>
      </header>

      <h2 class="section-title">Expérience professionnelle</h2>
      <div class="chat">
        ${cv.experience.map(thread).join("")}
        <div class="msg out typing" aria-hidden="true"><div class="bubble"><i></i><i></i><i></i></div></div>
      </div>
    </div>`;

  document.getElementById("cv").innerHTML = main + sidebar;
  document.getElementById("cv-details").innerHTML = detailsPage;

  const params = new URLSearchParams(location.search);
  if (params.has("og")) document.body.classList.add("og");
  if (params.has("complet")) document.body.classList.add("complete");
  document.title = `${cv.firstName} ${cv.lastName} — CV`;

  const print = (complete) => {
    document.body.classList.toggle("complete", complete);
    window.print();
  };
  document.getElementById("print-btn").addEventListener("click", () => print(false));
  document.getElementById("print-full-btn").addEventListener("click", () => print(true));
})();
