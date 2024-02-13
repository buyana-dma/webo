const vegData= [...new Map(foodItem.map(item=> [item['category'],item])).values()];
console.log(vegData);

class TasteSelector extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="category-list" class="category-list"></div>
        `;
        this.selectTaste();
    }

    selectTaste() {
        const categoryList = this.querySelector('#category-list');

        vegData.forEach(item => {
            const listCard = document.createElement('div');
            listCard.className = 'list-card';

            const listImg = document.createElement('img');
            listImg.src = item.img;

            const listName = document.createElement('a');
            listName.className = 'list-name';
            listName.innerText = item.category;
            listName.href = '#' + item.category;

            listCard.appendChild(listImg);
            listCard.appendChild(listName);

            categoryList.appendChild(listCard.cloneNode(true));
        });
    }
}

customElements.define('taste-selector', TasteSelector);
