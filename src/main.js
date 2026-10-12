import './style.css'

const siteName = import.meta.env.VITE_SITE_NAME || 'Trames Anglais Lycée'
const description = import.meta.env.VITE_SITE_DESCRIPTION || 'Séquences et progressions'
const email = import.meta.env.VITE_CONTACT_EMAIL || ''
const facebookUrl = 'https://www.facebook.com/410547534736449/'

document.querySelector('#app').innerHTML = `
<header>
  <h1>${siteName}</h1>
  <p>${description}</p>
</header>
<nav>
  <a href="#sequences">Séquences</a>
  <a href="/inscription.html">Inscription</a>
  <a href="${facebookUrl}" target="_blank">Facebook</a>
</nav>
<main>
  <section id="sequences">
    <div class="sequence">
      <h2>The English-Speaking World</h2>
      <div class="meta">Niveau : Première / Terminale — Durée : 4-5 séances</div>
      <p>Objectif : comprendre la diversité du monde anglophone à travers le Commonwealth.</p>
    </div>
    <div class="sequence">
      <h2>Made in Dagenham</h2>
      <div class="meta">Niveau : Bac Pro — Durée : 6 séances</div>
      <p>Objectif : travailler le vocabulaire du monde du travail et l'égalité professionnelle.</p>
    </div>
    <div class="sequence">
      <h2>Orwell & Dystopia</h2>
      <div class="meta">Niveau : Terminale — Durée : 5 séances</div>
      <p>Objectif : analyser les procédés de la dystopie à travers 1984.</p>
    </div>
    <div class="sequence">
      <h2>Festivals & Celebrations</h2>
      <div class="meta">Niveau : Seconde / Première — Durée : 3 séances</div>
      <p>Objectif : découvrir les fêtes du monde anglophone.</p>
    </div>
  </section>
  <section class="links">
    <h2>Autres ressources</h2>
    <a href="https://fiches-gerex.netlify.app" target="_blank">→ Fiches GEREX</a>
    <a href="https://fetes-monde-anglophone.netlify.app" target="_blank">→ Fêtes du monde anglophone</a>
  </section>
</main>
<footer class="site-footer">
  <div class="footer-content">
    <div class="footer-brand">
      <div class="footer-logo">📚</div>
      <div>
        <strong>${siteName}</strong>
        <p>${description}</p>
      </div>
    </div>
    <div class="footer-links">
      <a href="/inscription.html">Inscription</a>
      <a href="${facebookUrl}" target="_blank">Facebook</a>
      <a href="mailto:${email}">${email || 'Contact'}</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© ${new Date().getFullYear()} — Talence</span>
  </div>
</footer>
`
