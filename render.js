(function () {
  const cv = window.CV;

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const icons = {
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    github:
      '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
  };
  const icon = (name) =>
    `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icons[name] || ""}</svg>`;

  const initials = (s) =>
    s.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");

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
          ${cv.contact.map((c) => `<li>${icon(c.icon)}<a href="${esc(c.href)}">${esc(c.label)}</a></li>`).join("")}
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
                  i.favorite ? '<span class="star" title="Favori">★</span>' : ""
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
      ${x.missions
        .map(
          (m) => `<div class="msg out">
            <div class="bubble">
              <p>${esc(m.text)}</p>
              <div class="meta"><span class="stack">${esc(m.stack)}</span><span class="ticks">✓✓</span></div>
            </div>
          </div>`
        )
        .join("")}
    </section>`;

  const main = `
    <div class="main">
      <header class="header">
        <h1 class="name">${esc(cv.firstName)} <span>${esc(cv.lastName)}</span></h1>
        <p class="role">&gt; ${esc(cv.role)}<span class="caret"></span></p>
        <p class="summary">${esc(cv.summary)}</p>
      </header>

      <h2 class="section-title">Expérience professionnelle</h2>
      <div class="chat">
        ${cv.experience.map(thread).join("")}
        <div class="msg out typing" aria-hidden="true"><div class="bubble"><i></i><i></i><i></i></div></div>
      </div>
    </div>`;

  document.getElementById("cv").innerHTML = sidebar + main;
  document.title = `${cv.firstName} ${cv.lastName} — CV`;
  document.getElementById("print-btn").addEventListener("click", () => window.print());
})();
