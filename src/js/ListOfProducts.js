class ListOfProducts {
    addProduct(name, amount, type_amount, category) {
        const content = document.querySelector(".content");
        const toCheck = content.querySelectorAll("h3");
        if (!Array.from(toCheck).filter(el => el.innerText === category).length) {
            const box = document.createElement("div");
            box.classList.add("w-75", "d-flex", "flex-column", "align-items-center");
            content.appendChild(box);
            const title = box.appendChild(document.createElement("h3"));
            title.innerText = `${category}`;
            title.classList.add(`${category}`);
            const listElement = box.appendChild(document.createElement("ul"));
            listElement.classList.add("list-group", "fs-2", "fw-bold", "w-75");
            const categoryElement = listElement.appendChild(document.createElement("li"));
            categoryElement.classList.add("list-group-item", "fs-4", "fw-normal", "w-100", "text-center");
            categoryElement.innerHTML = `${name} - ${amount} ${type_amount}`;
        } else {
      const thisCategory = document.querySelector(`h3.${category}`).nextElementSibling;
      const newProduct = thisCategory.appendChild(document.createElement("li"));
            newProduct.classList.add("list-group-item", "fs-4", "fw-normal", "w-100", "text-center");
      newProduct.innerHTML = `${name} - ${amount} ${type_amount}`;
    }
  }
}

export const List = new ListOfProducts();
