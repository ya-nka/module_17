const btn = document.querySelector('.btn');

const svgPlus = document.getElementById('svgPlus');
const svgMinus = document.getElementById('svgMinus');

btn.addEventListener('click', function (event) {
  event.preventDefault();
  svgPlus.toggle();
  svgMinus.toggle();
});
