<script lang="ts">
import IconifyIcon from '$lib/components/IconifyIcon/IconifyIcon.svelte';
import DecorationFlowers from '../../features/shared/DecorationFlowers/DecorationFlowers.svelte';
</script>

<svelte:head>
  <title>O mnie | Blog Lili</title>
  <meta
    name="description"
    content="Poznaj mnie lepiej - jestem Lila, artystyczna dusza lasu i autorka bloga o naturze, sztuce i życiu w harmonii z otoczeniem."
  />
</svelte:head>

<div class="about-page">
  <div class="texture-overlay"></div>

  <div class="about-header">
    <div class="container">
      <h1>Witaj, jestem <span class="accent">Lila</span></h1>
      <div class="subtitle">Artystyczna dusza lasu</div>
    </div>
  </div>

  <div class="about-container">
    <div class="container">
      <div class="content-wrapper">
        <div class="profile-section">
          <div class="profile-image">
            <div class="image-container">
              <IconifyIcon icon="mdi:flower" size={60} color="primary" />
              <div class="image-frame"></div>
            </div>
          </div>

          <div class="profile-content">
            <p class="profile-lead">
              Witaj w moim małym zakątku internetu, gdzie dzielę się moimi przemyśleniami,
              odkryciami i inspiracjami związanymi z naturą, sztuką i życiem w harmonii z
              otoczeniem.
            </p>

            <div class="profile-quote">
              <IconifyIcon icon="mdi:format-quote-open" size={24} color="secondary" />
              <p>
                Życie jest jak las – pełne niespodzianek, tajemnic i piękna czekającego na odkrycie,
                jeśli tylko masz cierpliwość, by się zatrzymać i naprawdę patrzeć.
              </p>
            </div>
          </div>
        </div>

        <div class="about-section">
          <div class="section-header">
            <h2>Moja historia</h2>
            <div class="section-decoration">
              <span></span>
              <IconifyIcon icon="mdi:flower-tulip" size={20} color="primary" />
              <span></span>
            </div>
          </div>

          <div class="about-text">
            <p>
              Od dziecka byłam zafascynowana otaczającym mnie światem przyrody. Dorastając w małej
              miejscowości na skraju Puszczy Białowieskiej, miałam szczęście poznawać świat, w
              którym granica między tym, co rzeczywiste, a tym co magiczne, wydawała się niezwykle
              cienka. To właśnie tam, podczas długich spacerów po leśnych ścieżkach, zrodziła się
              moja miłość do natury i wszystkiego, co z nią związane.
            </p>

            <p>
              Studia artystyczne pozwoliły mi połączyć moją pasję do natury z twórczym wyrażaniem
              emocji. Malarstwo, fotografia i pisanie stały się dla mnie sposobami na uchwycenie
              ulotnych chwil i głębokich przemyśleń, które towarzyszą mi podczas wędrówek po lesie
              czy obserwacji zmieniających się pór roku.
            </p>

            <p>
              Ten blog jest dla mnie przestrzenią, w której mogę dzielić się nie tylko moimi pracami
              i odkryciami, ale także refleksjami nad życiem w zgodzie z naturalnymi rytmami,
              pięknem znalezionym w najprostszych rzeczach i małymi cudami codzienności, które tak
              łatwo przeoczyć w pośpiechu współczesnego świata.
            </p>
          </div>
        </div>

        <div class="interests-section">
          <div class="section-header">
            <h2>Co mnie inspiruje</h2>
            <div class="section-decoration">
              <span></span>
              <IconifyIcon icon="mdi:sprout" size={20} color="primary" />
              <span></span>
            </div>
          </div>

          <div class="interests-grid">
            <div class="interest-card">
              <div class="interest-icon">
                <IconifyIcon icon="mdi:tree" size={32} color="secondary" />
              </div>
              <h3>Natura</h3>
              <p>
                Las i jego mieszkańcy, zmieniające się pory roku, dzikie łąki i tajemnicze bagna.
              </p>
            </div>

            <div class="interest-card">
              <div class="interest-icon">
                <IconifyIcon icon="mdi:palette" size={32} color="secondary" />
              </div>
              <h3>Sztuka</h3>
              <p>Malarstwo inspirowane naturą, ilustracja botaniczna, fotografia krajobrazowa.</p>
            </div>

            <div class="interest-card">
              <div class="interest-icon">
                <IconifyIcon icon="mdi:book-open-page-variant" size={32} color="secondary" />
              </div>
              <h3>Literatura</h3>
              <p>Poezja natury, stare legendy i baśnie, opowieści o tajemniczych miejscach.</p>
            </div>

            <div class="interest-card">
              <div class="interest-icon">
                <IconifyIcon icon="mdi:tea" size={32} color="secondary" />
              </div>
              <h3>Zielarstwo</h3>
              <p>Zbieranie i suszenie ziół, przygotowywanie naparów, naturalne remedium.</p>
            </div>
          </div>
        </div>

        <div class="contact-section">
          <div class="section-header">
            <h2>Bądźmy w kontakcie</h2>
            <div class="section-decoration">
              <span></span>
              <IconifyIcon icon="mdi:heart" size={20} color="primary" />
              <span></span>
            </div>
          </div>

          <div class="contact-redirect">
            <p>
              Jeśli chcesz się ze mną skontaktować, podzielić się przemyśleniami lub zaproponować
              współpracę, odwiedź moją stronę kontaktową.
            </p>

            <a href="/contact" class="contact-button">
              <div class="contact-button-content">
                <span>Skontaktuj się ze mną</span>
                <div class="button-icon">
                  <IconifyIcon icon="mdi:arrow-right" size={20} />
                </div>
              </div>
              <div class="button-decoration">
                <span class="flower-left">✿</span>
                <span class="flower-right">✿</span>
              </div>
            </a>
          </div>
        </div>

        <a href="/" class="back-link">
          <IconifyIcon icon="mdi:arrow-left" size={16} />
          Wróć do strony głównej
        </a>
      </div>
    </div>
  </div>

  <div class="page-decoration">
    <DecorationFlowers count={25} color="primary" minOpacity={0.15} maxOpacity={0.25} zIndex={-1} />
  </div>
</div>

<style>
.about-page {
  position: relative;
  background-color: var(--background);
  min-height: 100vh;
  overflow: hidden;
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

.about-header {
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

.about-header::before {
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

.about-container {
  margin-top: -4rem;
  position: relative;
  z-index: 2;
}

.content-wrapper {
  background-color: var(--background-light);
  border-radius: 0.25rem;
  padding: 3rem;
  max-width: 850px;
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

.profile-section {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  align-items: center;
}

.profile-image {
  flex-shrink: 0;
}

.image-container {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.image-frame {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  border: 2px solid var(--primary-light);
  opacity: 0.7;
}

.image-frame::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50%;
  border: 1px dashed var(--secondary-light);
  opacity: 0.5;
}

.profile-content {
  flex: 1;
}

.profile-lead {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
}

.profile-quote {
  padding: 1.5rem;
  border-left: 3px solid var(--primary-light);
  background: linear-gradient(to right, var(--background), var(--background-light));
  position: relative;
  font-style: italic;
  color: var(--text);
}

.profile-quote p {
  margin: 0;
  line-height: 1.6;
}

.profile-quote IconifyIcon {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  opacity: 0.2;
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

.about-section {
  margin-bottom: 4rem;
}

.about-text p {
  margin-bottom: 1.5rem;
  line-height: 1.7;
  color: var(--text);
}

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.interest-card {
  background-color: var(--background);
  padding: 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.interest-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--secondary-light);
  opacity: 0.7;
}

.interest-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.interest-icon {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
}

.interest-card h3 {
  font-family: 'Georgia', serif;
  color: var(--coffee);
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
  text-align: center;
}

.interest-card p {
  font-size: 0.9rem;
  color: var(--text);
  line-height: 1.5;
  text-align: center;
}

.contact-section {
  margin-bottom: 3rem;
}

.contact-redirect {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 1rem;
}

.contact-redirect p {
  margin-bottom: 2rem;
  line-height: 1.6;
}

.contact-button {
  display: inline-block;
  position: relative;
  padding: 1.2rem 3rem;
  background: linear-gradient(to right, var(--primary-light), var(--primary));
  color: white;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.2);
  overflow: hidden;
}

.contact-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.contact-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(var(--primary-rgb), 0.3);
}

.contact-button:hover::before {
  transform: translateX(100%);
}

.contact-button-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  position: relative;
  z-index: 1;
}

.button-icon {
  transition: transform 0.3s ease;
}

.contact-button:hover .button-icon {
  transform: translateX(5px);
}

.button-decoration {
  position: absolute;
  width: 100%;
  bottom: 5px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 0.75rem;
  opacity: 0.6;
  z-index: 0;
  pointer-events: none;
}

.flower-left,
.flower-right {
  font-size: 1rem;
  opacity: 0;
  transition: all 0.3s ease;
  transform: translateY(10px);
}

.contact-button:hover .flower-left {
  opacity: 1;
  transform: translateY(0);
}

.contact-button:hover .flower-right {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.1s;
}

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

.page-decoration {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .content-wrapper {
    padding: 2rem;
  }

  .profile-section {
    flex-direction: column;
    text-align: center;
  }

  .profile-quote {
    text-align: left;
  }

  .interests-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }

  .social-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>
