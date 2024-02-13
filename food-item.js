import { foodItem } from './foodItem.json';

class FoodItems extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="biryani" class="category">
                <p class="category-name">Biryani</p>
            </div>
            <div id="chicken" class="category">
                <p class="category-name">Chicken Delicious</p>
            </div>
            <div id="paneer" class="category">
                <p class="category-name">Paneer Mania</p>
            </div>
            <div id="vegetable" class="category">
                <p class="category-name">Pure Veg Dishes</p>
            </div>
            <div id="chinese" class="category">
                <p class="category-name">Chinese Corner</p>
            </div>
            <div id="south-indian" class="category">
                <p class="category-name">South Indian</p>
            </div>
        `;

        this.displayItems();
    }

    displayItems() {
        const categories = ['biryani', 'chicken', 'paneer', 'vegetable', 'chinese', 'south indian'];

        categories.forEach(category => {
            const categoryElement = this.querySelector(`#${category}`);
            const categoryData = foodItem.filter(item => item.category.toLowerCase() === category);
            
            categoryData.forEach(item => {
                const itemCard = this.createItemCard(item);
                categoryElement.appendChild(itemCard);
            });
        });
    }

    createItemCard(item) {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';

        const cardTop = document.createElement('div');
        cardTop.className = 'card-top';

        const star = document.createElement('i');
        star.className = 'fa fa-star';
        star.innerText = ' ' + item.rating;

        const heart = document.createElement('i');
        heart.className = 'fa fa-heart-o add-to-cart';
        heart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        const img = document.createElement('img');
        img.src = item.img;

        const itemName = document.createElement('p');
        itemName.className = 'item-name';
        itemName.innerText = item.name;

        const itemPrice = document.createElement('p');
        itemPrice.className = 'item-price';
        itemPrice.innerText = 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        return itemCard;
    }
}

customElements.define('food-items', FoodItems);
