const confettiBtn = document.querySelector('.confettiBtn');
const rocketBtn = document.querySelector('.rocketBtn');
const danceBtn = document.querySelector('.danceBtn');
const buzzBtn = document.querySelector('.buzzBtn');

const svgContainer = document.getElementById('svg');
const svg2Container = document.getElementById('svg2');
const svg3Container = document.getElementById('svg3');
const svg4Container = document.getElementById('svg4');

const confetti = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://assets6.lottiefiles.com/packages/lf20_rovf9gzu.json',
});

const rocket = bodymovin.loadAnimation({
  wrapper: svg2Container,
  animType: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://assets5.lottiefiles.com/private_files/lf30_zojglfmn.json',
});

const dance = bodymovin.loadAnimation({
  wrapper: svg3Container,
  animType: 'svg',
  loop: true,
  autoplay: false,
  path: 'https://assets5.lottiefiles.com/packages/lf20_qqtavvc0.json',
});

const buzz = bodymovin.loadAnimation({
  wrapper: svg4Container,
  animType: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://assets6.lottiefiles.com/packages/lf20_5f2kwbj1.json',
});

confettiBtn.addEventListener('click', () => {
  confetti.goToAndPlay(0, true);
});

rocketBtn.addEventListener('click', () => {
  rocket.goToAndPlay(0, true);
});

danceBtn.addEventListener('click', () => {
  svg3Container.classList.remove('hide');
  dance.goToAndPlay(0, true);
});

buzzBtn.addEventListener('click', () => {
  svg4Container.classList.remove('hide');
  buzz.goToAndPlay(0, true);
});

buzz.addEventListener('complete', () => {
  svg4Container.classList.add('hide');
});
