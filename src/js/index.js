import * as mdb from 'mdb-ui-kit';
import { List } from './ListOfProducts';

const name = document.querySelector('#name');
const amount = document.querySelector('#amount');
const type_kg = document.querySelector('#type_kg');
const type_psc = document.querySelector('#type_pcs');
const category = document.querySelector('#category');
const button = document.querySelector('#button');

const data = {
  name: '',
  amount: '',
  type_amount: '',
  category: '',
};

name.addEventListener('input', (event) => {
  data.name = event.target.value;
  console.log(data.name);
});

amount.addEventListener('input', (event) => {
  data.amount = event.target.value;
  console.log(data.amount);
});

type_kg.addEventListener('change', (event) => {
  data.type_amount = event.target.nextSibling.nextSibling.innerText;
  console.log(data.type_amount);
});

type_psc.addEventListener('change', (event) => {
  data.type_amount = event.target.nextSibling.nextSibling.innerText;
  console.log(data.type_amount);
});

category.addEventListener('change', (event) => {
  data.category = event.target.value;
  console.log(data.category);
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  List.addProduct(data.name, data.amount, data.type_amount, data.category);
});

export default {
  mdb,
};
