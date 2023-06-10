const Scales = {
  0: '0',
  50: '.5',
  75: '.75',
  90: '.9',
  95: '.95',
  100: '1',
  105: '1.05',
  110: '1.1',
  125: '1.25',
  150: '1.5'
}

let max = 10;
for (let i = 0; i <= max; i+=0.5) {
  Scales[i] = i;
}
module.exports = {
  Scales
}
