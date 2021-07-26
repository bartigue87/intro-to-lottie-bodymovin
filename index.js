const button = document.querySelector('button');

const svgContainer = document.getElementById('svg');

const animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://assets6.lottiefiles.com/packages/lf20_rovf9gzu.json',
});

button.addEventListener('click', () => {
  animItem.goToAndPlay(0, true);
});
