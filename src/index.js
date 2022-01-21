const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const count = document.getElementById('count');

let counter = 0;
count.textContent = counter;

const updateCount = () => {
  count.textContent = counter;
}

const handlePlus = () => {
  counter++;
  updateCount();
};

const handleMinus = () => {
  counter--;
  updateCount();
};

plus.addEventListener('click', handlePlus);

minus.addEventListener('click', handleMinus);
