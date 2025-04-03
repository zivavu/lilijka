<script lang="ts">
import IconifyIcon from '$lib/components/IconifyIcon/IconifyIcon.svelte';
import DecorationFlowers from '../../features/shared/DecorationFlowers/DecorationFlowers.svelte';
</script>

<svelte:head>
  <title>Kontakt | Blog Lili</title>
  <meta
    name="description"
    content="Skontaktuj się ze mną – Lila, autorka bloga o naturze i sztuce. Znajdź mnie na mediach społecznościowych lub wyślij wiadomość."
  />
</svelte:head>

<div class="contact-page">
  <div class="texture-overlay"></div>

  <div class="contact-header">
    <div class="container">
      <h1>Bądźmy w <span class="accent">kontakcie</span></h1>
      <div class="subtitle">Znajdź mnie w sieci lub wyślij wiadomość</div>
    </div>
  </div>

  <div class="contact-container">
    <div class="container">
      <div class="content-wrapper">
        <div class="contact-grid">
          <div class="contact-text-column">
            <p class="contact-lead">
              Cieszę się, że chcesz się ze mną skontaktować. Zawsze chętnie poznaje nowe osoby,
              wymieniam się pomysłami i inspiracjami związanymi z naturą, sztuką i wszystkim, co
              tworzy harmonijne życie.
            </p>

            <div class="contact-message">
              <p>
                Czy masz pytanie dotyczące jednego z moich artykułów? A może propozycję współpracy
                lub chcesz podzielić się swoimi przemyśleniami? Napisz do mnie, a postaram się
                odpowiedzieć najszybciej jak to możliwe.
              </p>
            </div>

            <div class="contact-info">
              <div class="contact-info-item">
                <IconifyIcon icon="mdi:email-outline" size={24} color="secondary" />
                <span>lila@przykladowy-email.pl</span>
              </div>

              <div class="contact-info-item">
                <IconifyIcon icon="mdi:map-marker-outline" size={24} color="secondary" />
                <span>Białowieża, Polska</span>
              </div>
            </div>
          </div>

          <div class="social-links-column">
            <div class="social-links-container">
              <h2>Obserwuj mnie</h2>

              <div class="social-links">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-card"
                  aria-label="Instagram"
                >
                  <div class="social-icon instagram">
                    <IconifyIcon icon="mdi:instagram" size={32} />
                  </div>
                  <div class="social-info">
                    <span class="social-name">Instagram</span>
                    <span class="social-handle">@lila_natura</span>
                  </div>
                  <div class="arrow-icon">
                    <IconifyIcon icon="mdi:arrow-right" size={20} />
                  </div>
                </a>

                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-card"
                  aria-label="Spotify"
                >
                  <div class="social-icon spotify">
                    <IconifyIcon icon="mdi:spotify" size={32} />
                  </div>
                  <div class="social-info">
                    <span class="social-name">Spotify</span>
                    <span class="social-handle">Playlista "Leśne Melodie"</span>
                  </div>
                  <div class="arrow-icon">
                    <IconifyIcon icon="mdi:arrow-right" size={20} />
                  </div>
                </a>

                <a href="mailto:lila@przykladowy-email.pl" class="social-card" aria-label="Email">
                  <div class="social-icon email">
                    <IconifyIcon icon="mdi:email" size={32} />
                  </div>
                  <div class="social-info">
                    <span class="social-name">Email</span>
                    <span class="social-handle">lila@przykladowy-email.pl</span>
                  </div>
                  <div class="arrow-icon">
                    <IconifyIcon icon="mdi:arrow-right" size={20} />
                  </div>
                </a>

                <a href="#" class="social-card" aria-label="Newsletter">
                  <div class="social-icon newsletter">
                    <IconifyIcon icon="mdi:bell-outline" size={32} />
                  </div>
                  <div class="social-info">
                    <span class="social-name">Newsletter</span>
                    <span class="social-handle">Zapisz się na mój newsletter</span>
                  </div>
                  <div class="arrow-icon">
                    <IconifyIcon icon="mdi:arrow-right" size={20} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-section">
          <h2>Napisz do mnie</h2>

          <form class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Imię</label>
                <div class="input-container">
                  <IconifyIcon icon="mdi:account-outline" size={18} color="secondary" />
                  <input type="text" id="name" name="name" required placeholder="Twoje imię" />
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <div class="input-container">
                  <IconifyIcon icon="mdi:email-outline" size={18} color="secondary" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Twój adres email"
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="subject">Temat</label>
              <div class="input-container">
                <IconifyIcon icon="mdi:format-title" size={18} color="secondary" />
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="O czym chcesz porozmawiać?"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="message">Wiadomość</label>
              <div class="input-container textarea-container">
                <IconifyIcon icon="mdi:message-text-outline" size={18} color="secondary" />
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Twoja wiadomość..."
                ></textarea>
              </div>
            </div>

            <button type="submit" class="submit-button">
              <span>Wyślij wiadomość</span>
              <IconifyIcon icon="mdi:send" size={18} />
            </button>
          </form>
        </div>

        <a href="/" class="back-link">
          <IconifyIcon icon="mdi:arrow-left" size={16} />
          Wróć do strony głównej
        </a>
      </div>
    </div>
  </div>

  <div class="page-decoration left">
    <DecorationFlowers count={10} color="primary" minOpacity={0.1} maxOpacity={0.2} zIndex={-1} />
  </div>

  <div class="page-decoration right">
    <DecorationFlowers count={10} color="secondary" minOpacity={0.1} maxOpacity={0.2} zIndex={-1} />
  </div>
</div>

<style>
.contact-page {
  position: relative;
  background-color: var(--background);
  min-height: 100vh;
  overflow: hidden;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4bfaa' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.texture-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d4bfaa' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
  opacity: 0.8;
}

.contact-header {
  position: relative;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(to bottom, rgba(212, 196, 177, 0.1), rgba(212, 196, 177, 0.3));
  padding: 2rem;
  z-index: 1;
}

.contact-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4bfaa' fill-opacity='0.15'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  z-index: -1;
  opacity: 0.7;
}

h1 {
  font-family: 'Georgia', serif;
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  color: var(--coffee);
  position: relative;
  display: inline-block;
}

h1::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -8px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary-light), transparent);
}

.accent {
  color: var(--primary);
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text-light);
  font-style: italic;
  margin-top: 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.contact-container {
  margin-top: -4rem;
  position: relative;
  z-index: 2;
}

.content-wrapper {
  background-color: var(--background-light);
  border-radius: 0.25rem;
  padding: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.content-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.contact-lead {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
}

.contact-message {
  padding: 1.5rem;
  background-color: var(--background);
  border-left: 3px solid var(--primary-light);
  margin-bottom: 2rem;
}

.contact-message p {
  margin: 0;
  line-height: 1.6;
  color: var(--text);
}

.contact-info {
  margin-top: 2rem;
}

.contact-info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: var(--text);
}

.social-links-container {
  padding: 2rem;
  background-color: var(--background);
  border-radius: 0.5rem;
  height: 100%;
}

.social-links-container h2 {
  font-family: 'Georgia', serif;
  color: var(--coffee);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: normal;
  position: relative;
}

.social-links-container h2::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 2px;
  background-color: var(--primary-light);
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-card {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: var(--background-light);
  border-radius: 0.25rem;
  text-decoration: none;
  color: var(--text);
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.social-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: var(--background-light);
  z-index: -1;
  transition: all 0.3s ease;
}

.social-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.social-card:hover .arrow-icon {
  transform: translateX(5px);
  opacity: 1;
}

.social-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: white;
  flex-shrink: 0;
}

.instagram {
  background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
}

.spotify {
  background-color: #1db954;
}

.email {
  background-color: var(--primary);
}

.newsletter {
  background-color: var(--secondary);
}

.social-info {
  flex: 1;
}

.social-name {
  display: block;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: var(--text-dark);
}

.social-handle {
  font-size: 0.85rem;
  color: var(--text-light);
}

.arrow-icon {
  opacity: 0.5;
  transition: all 0.2s ease;
  color: var(--secondary);
}

.contact-form-section {
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px dashed var(--secondary-light);
}

.contact-form-section h2 {
  font-family: 'Georgia', serif;
  color: var(--coffee);
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: normal;
}

.contact-form {
  max-width: 800px;
  margin: 0 auto;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
  font-size: 0.9rem;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid var(--secondary-light);
  border-radius: 0.25rem;
  background-color: var(--background);
  padding: 0 1rem;
  transition: all 0.2s ease;
}

.input-container:focus-within {
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.1);
}

.input-container IconifyIcon {
  margin-right: 0.5rem;
  opacity: 0.7;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem 0;
  background: none;
  border: none;
  outline: none;
  color: var(--text);
  font-family: inherit;
  font-size: 1rem;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.textarea-container {
  align-items: flex-start;
  padding-top: 0.75rem;
}

.textarea-container IconifyIcon {
  margin-top: 0.2rem;
}

input::placeholder,
textarea::placeholder {
  color: var(--text-light);
  opacity: 0.5;
}

.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;
}

.submit-button:hover {
  background-color: var(--primary-dark, #a06464);
  transform: translateY(-2px);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 3rem;
  color: var(--text-light);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: var(--primary);
}

.page-decoration {
  position: fixed;
  width: 40%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.page-decoration.left {
  top: 10%;
  left: 0;
}

.page-decoration.right {
  top: 40%;
  right: 0;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .content-wrapper {
    padding: 2rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
