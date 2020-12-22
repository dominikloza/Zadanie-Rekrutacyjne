const content = document.querySelector('.content');

const newList = {
  category: '',
  products: [],
};

let amount = 0;

export function saveListToLocalStorage(newObject) {
  let dataFromLocalStorage = [];
  // sprawdzamy czy w localStorage posiada dane
  if (localStorage.getItem('list') != null) {
    dataFromLocalStorage = JSON.parse(localStorage.getItem('list'));
    const categoryProduct = dataFromLocalStorage.filter((el) => el.category === newObject.category);
    // jesli istnieje kategoria
    if (categoryProduct.length) {
      console.log(categoryProduct[0]);
      categoryProduct[0].products.push(newObject.products);
      let amount = JSON.parse(localStorage.getItem('amount'));
      amount++;
      const counter = document.querySelector('#counter');
      counter.innerText = amount;
      localStorage.setItem('amount', JSON.stringify(amount));
      // jesli nie istnieje kategoria
    } else {
      newList.products = [];
      newList.products.push(newObject.products);
      newList.category = newObject.category;
      dataFromLocalStorage.push(newList);
      let amount = JSON.parse(localStorage.getItem('amount'));
      amount++;
      const counter = document.querySelector('#counter');
      counter.innerText = amount;
      localStorage.setItem('amount', JSON.stringify(amount));
    }
    localStorage.setItem('list', JSON.stringify(dataFromLocalStorage));
  } else {
    newList.products.push(newObject.products);
    newList.category = newObject.category;
    dataFromLocalStorage.push(newList);
    amount++;
    const counter = document.querySelector('#counter');
    counter.innerText = amount;
    localStorage.setItem('list', JSON.stringify(dataFromLocalStorage));
    localStorage.setItem('amount', JSON.stringify(amount));
  }
}

export function renderList() {
  content.innerHTML = '';
  const amount = JSON.parse(localStorage.getItem('amount'));
  const counter = document.querySelector('#counter');
  counter.innerText = amount;
  const list = JSON.parse(localStorage.getItem('list'));
  if (list !== null) {
    list.forEach((el) => {
      const box = document.createElement('div');
      box.classList.add('w-50', 'd-flex', 'flex-column', 'align-items-center', 'mb-5');
      content.appendChild(box);
      const title = document.createElement('h3');
      title.classList.add(`${el.category}`);
      title.innerText = `${el.category}`;
      box.appendChild(title);
      const listElement = box.appendChild(document.createElement('ul'));
      listElement.classList.add('list-group', 'fs-2', 'fw-bold', 'w-75');
      const listOfProducts = el.products.map((product) => {
        const categoryElement = listElement.appendChild(document.createElement('li'));
        categoryElement.classList.add(
          'list-group-item',
          'fs-4',
          'fw-normal',
          'w-100',
          'text-center',
          'd-flex',
          'justify-content-between',
          'align-items-center'
        );
        categoryElement.innerHTML = `${product} <i class="fas fa-trash-alt" id="delete"></i>`;
      });
    });
  }
}

export function deleteItem(category, itemToDelete) {
  let dataFromLocalStorage = [];
  let amount = JSON.parse(localStorage.getItem('amount'));
  amount--;
  const counter = document.querySelector('#counter');
  counter.innerText = amount;
  localStorage.setItem('amount', JSON.stringify(amount));
  dataFromLocalStorage = JSON.parse(localStorage.getItem('list'));
  const categoryFind = [...dataFromLocalStorage].filter((el) => el.category === category);
  console.log(categoryFind[0]);
  const index = categoryFind[0].products.findIndex((el) => el === itemToDelete);
  if (index !== -1) {
    categoryFind[0].products.splice(index, 1);
  }
  const indexReplace = dataFromLocalStorage.findIndex((el) => el.category === category);
  if (indexReplace !== -1) {
    if (!categoryFind[0].products.length) {
      dataFromLocalStorage.splice(indexReplace, 1);
    } else {
      dataFromLocalStorage.splice(indexReplace, 1, categoryFind[0]);
    }
  }

  localStorage.setItem('list', JSON.stringify(dataFromLocalStorage));
}
