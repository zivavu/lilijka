<script lang="ts">
const { title } = $props<{
  title: string;
}>();
</script>

<h3 class="section-title">
  <span class="title-line"></span>
  <span class="title-text">
    {title}
  </span>
  <span class="title-line"></span>
</h3>

<style>
.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--coffee);
  font-weight: normal;
  font-size: 1.2rem;
}

.title-line {
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
}

.title-line:first-child {
  --direction: left;
}

.title-text {
  font-family: 'Georgia', serif;
  letter-spacing: 1px;
  position: relative;
}

.title-text::before,
.title-text::after {
  content: '✿';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.7rem;
  color: var(--primary-light);
  opacity: 0.8;
}

.title-text::before {
  left: -1.5rem;
}

.title-text::after {
  right: -1.5rem;
}
</style>
