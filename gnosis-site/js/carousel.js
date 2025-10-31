const carousels = document.querySelectorAll('.carousel-wrapper');

carousels.forEach(wrapper => {
  const container = wrapper.querySelector('.product-container');
  const btnPrev = wrapper.querySelector('.prev');
  const btnNext = wrapper.querySelector('.next');
  const indicators = wrapper.nextElementSibling?.querySelectorAll('span');

  let index = 0;
  const cardWidth = 300;

  btnNext.addEventListener('click', () => {
    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    index = Math.min(index + 1, (indicators?.length ?? 1) - 1);
    updateIndicator();
  });
  btnPrev.addEventListener('click', () => {
    container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    index = Math.max(index - 1, 0);
    updateIndicator();
  });

  function updateIndicator() {
    if (!indicators) return;
    indicators.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }

  updateIndicator();
});