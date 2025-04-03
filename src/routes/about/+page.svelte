<script lang="ts">
import IconifyIcon from '$lib/components/IconifyIcon/IconifyIcon.svelte';
import PageWrapper from '../../features/shared/PageWrapper/PageWrapper.svelte';
</script>

<svelte:head>
  <title>O mnie | Blog Lili</title>
  <meta
    name="description"
    content="Poznaj mnie lepiej - jestem Lila, artystyczna dusza lasu i autorka bloga o naturze, sztuce i życiu w harmonii z otoczeniem."
  />
</svelte:head>

<PageWrapper title="Witaj, jestem " accentedWord="Lila" subtitle="Artystyczna dusza lasu">
  <div class="profile-section">
    <div class="profile-image">
      <div class="image-container">
        <IconifyIcon icon="mdi:flower" size={60} color="primary" />
        <div class="image-frame"></div>
      </div>
    </div>

    <div class="profile-content">
      <p class="profile-lead">
        Witaj w moim małym zakątku internetu, gdzie dzielę się moimi przemyśleniami, odkryciami i
        inspiracjami związanymi z naturą, sztuką i życiem w harmonii z otoczeniem.
      </p>

      <div class="profile-quote">
        <IconifyIcon icon="mdi:format-quote-open" size={24} color="secondary" />
        <p>
          Życie jest jak las – pełne niespodzianek, tajemnic i piękna czekającego na odkrycie, jeśli
          tylko masz cierpliwość, by się zatrzymać i naprawdę patrzeć.
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
        miejscowości na skraju Puszczy Białowieskiej, miałam szczęście poznawać świat, w którym
        granica między tym, co rzeczywiste, a tym co magiczne, wydawała się niezwykle cienka. To
        właśnie tam, podczas długich spacerów po leśnych ścieżkach, zrodziła się moja miłość do
        natury i wszystkiego, co z nią związane.
      </p>

      <p>
        Studia artystyczne pozwoliły mi połączyć moją pasję do natury z twórczym wyrażaniem emocji.
        Malarstwo, fotografia i pisanie stały się dla mnie sposobami na uchwycenie ulotnych chwil i
        głębokich przemyśleń, które towarzyszą mi podczas wędrówek po lesie czy obserwacji
        zmieniających się pór roku.
      </p>

      <p>
        Ten blog jest dla mnie przestrzenią, w której mogę dzielić się nie tylko moimi pracami i
        odkryciami, ale także refleksjami nad życiem w zgodzie z naturalnymi rytmami, pięknem
        znalezionym w najprostszych rzeczach i małymi cudami codzienności, które tak łatwo przeoczyć
        w pośpiechu współczesnego świata.
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
        <p>Las i jego mieszkańcy, zmieniające się pory roku, dzikie łąki i tajemnicze bagna.</p>
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
</PageWrapper>

<style>
/* Keep only the specific styling for the content elements, remove all the page structure styles */
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

/* Section Styles */
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

/* Interests Grid */
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

/* Contact Section */
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

/* Responsive Styles */
@media (max-width: 768px) {
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
}
</style>
