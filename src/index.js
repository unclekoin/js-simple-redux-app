import { createStore } from 'redux';

const INCREASE = 'increase';
const DECREASE = 'decrease';

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const count = document.getElementById('count');

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};
const countStore = createStore(countReducer);
count.textContent = countStore.getState();

const onChange = () => {
  count.textContent = countStore.getState();
}

countStore.subscribe(onChange)

plus.addEventListener('click', () => {
  countStore.dispatch({ type: INCREASE });
});

minus.addEventListener('click', () => {
  countStore.dispatch({ type: DECREASE });
});
