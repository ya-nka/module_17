const btn = document.querySelector('.btn');

const svgPlus = document.getElementById('svgPlus');
const svgMinus = document.getElementById('svgMinus');
const on = true;

btn.addEventListener('click', function () {
  svgPlus.style.display = 'none';
  if (svgPlus.style.display == 'none') {
    svgMinus.style.display = 'block';
  } else {
    svgPlus.style.display = 'block';
  }
});
