<script lang="ts">
import IconifyIcon from '$lib/components/IconifyIcon/IconifyIcon.svelte';
import PageWrapper from '../../features/shared/PageWrapper/PageWrapper.svelte';
</script>

<svelte:head>
  <title>Kontakt | Blog Lili</title>
  <meta
    name="description"
    content="Skontaktuj się ze mną - jestem Lila, artystyczna dusza lasu i autorka bloga o naturze, sztuce i życiu w harmonii z otoczeniem."
  />
</svelte:head>

<PageWrapper title="Skontaktuj się " accentedWord="ze mną" subtitle="Czekam na Twoją wiadomość">
  <div class="contact-info-section">
    <p class="intro-text">
      Dziękuję, że zdecydowałeś się nawiązać kontakt. Chętnie odpowiem na Twoje pytania, wysłucham
      sugestii lub po prostu porozmawiam o wspólnych zainteresowaniach.
    </p>

    <div class="contact-grid">
      <div class="contact-card">
        <div class="card-icon">
          <IconifyIcon icon="mdi:email-outline" size={32} color="primary" />
        </div>
        <h3>Email</h3>
        <p>lila@lilijkablog.pl</p>
        <a href="mailto:lila@lilijkablog.pl" class="contact-link">Napisz do mnie</a>
      </div>

      <div class="contact-card">
        <div class="card-icon">
          <IconifyIcon icon="mdi:spotify" size={32} color="primary" />
        </div>
        <h3>Spotify</h3>
        <p>Lila's Forest Sounds</p>
        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" class="contact-link"
          >Posłuchaj</a
        >
      </div>

      <div class="contact-card">
        <div class="card-icon">
          <IconifyIcon icon="mdi:instagram" size={32} color="primary" />
        </div>
        <h3>Instagram</h3>
        <p>@lilijka_natura</p>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-link">Obserwuj</a
        >
      </div>
    </div>
  </div>

  <div class="contact-form-section">
    <div class="section-header">
      <h2>Napisz wiadomość</h2>
      <div class="section-decoration">
        <span></span>
        <IconifyIcon icon="mdi:flower" size={20} color="primary" />
        <span></span>
      </div>
    </div>

    <form class="contact-form">
      <div class="form-group">
        <label for="name">Imię</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div class="form-group">
        <label for="subject">Temat</label>
        <input type="text" id="subject" name="subject" required />
      </div>

      <div class="form-group">
        <label for="message">Wiadomość</label>
        <textarea id="message" name="message" rows="5" required></textarea>
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
</PageWrapper>

<style>
/* Contact Info Section */
.intro-text {
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 3rem;
  color: var(--text);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
  margin-bottom: 4rem;
}

.contact-card {
  background-color: var(--background);
  padding: 1.5rem;
  border-radius: 0.25rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, var(--primary-light), var(--primary));
  opacity: 0.7;
}

.contact-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.card-icon {
  margin-bottom: 1rem;
}

.contact-card h3 {
  font-family: 'Georgia', serif;
  color: var(--coffee);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.contact-card p {
  color: var(--text);
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.contact-link {
  display: inline-block;
  color: var(--primary);
  text-decoration: none;
  font-size: 0.85rem;
  padding: 0.4rem 0.8rem;
  border: 1px solid var(--primary-light);
  border-radius: 1.25rem;
  transition: all 0.3s ease;
}

.contact-link:hover {
  background-color: var(--primary);
  color: white;
}

/* Contact Form Section */
.contact-form-section {
  margin-bottom: 4rem;
}

.section-header {
  margin-bottom: 2rem;
  text-align: center;
}

.section-header h2 {
  font-family: 'Georgia', serif;
  color: var(--coffee);
  font-size: 1.8rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
}

.section-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
}

.section-decoration span {
  height: 1px;
  background: linear-gradient(
    to var(--direction, right),
    transparent,
    var(--secondary),
    transparent
  );
  flex-grow: 1;
  margin: 0 1rem;
  opacity: 0.5;
  max-width: 100px;
}

.section-decoration span:first-child {
  --direction: left;
}

.contact-form {
  max-width: 700px;
  margin: 0 auto;
  background-color: var(--background);
  padding: 2.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  position: relative;
}

.contact-form::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, var(--secondary-light), var(--secondary));
  opacity: 0.7;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(var(--primary-rgb), 0.2);
  border-radius: 0.25rem;
  background-color: white;
  font-family: inherit;
  font-size: 1rem;
  color: var(--text-dark);
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
}

.submit-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 2rem;
  background: linear-gradient(to right, var(--primary), var(--primary-dark));
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-family: inherit;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(var(--primary-rgb), 0.2);
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(var(--primary-rgb), 0.3);
}

.submit-button:active {
  transform: translateY(0);
}

/* Back Link */
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  color: var(--text-light);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: var(--primary);
}

/* Responsive */
@media (max-width: 768px) {
  .contact-form {
    padding: 1.5rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
