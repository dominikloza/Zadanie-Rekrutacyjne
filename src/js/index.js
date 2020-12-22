import * as mdb from 'mdb-ui-kit';
import { List } from './ListOfProducts';
import { deleteItem, renderList, saveListToLocalStorage } from './LocalStorage';

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

renderList();

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

button.addEventListener('click', (event) => {
  event.preventDefault();
  List.addProduct(data.name, data.amount, data.type_amount, data.category);
  const newLocal = {
    category: data.category,
    products: `${data.name} - ${data.amount} ${data.type_amount}`,
  };
  saveListToLocalStorage(newLocal);
  document.querySelector('h2').firstChild.innerText = amount;
  document.querySelector('form').reset();
});

document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'delete') {
    deleteItem(
      e.target.parentElement.parentElement.previousSibling.innerText,
      e.target.parentElement.innerText
    );
    if (e.target.parentElement.parentElement.children.length - 1 === 0) {
      console.log(e.target.parentElement.parentElement);
      e.target.parentElement.parentElement.parentElement.remove();
      e.target.parentElement.remove();
    } else {
      e.target.parentElement.remove();
    }
  }
});

export default {
  mdb,
};
