document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.getElementById('add-to-cart');
    const notification = document.getElementById('notification');

    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            notification.textContent = 'Товар успешно добавлен в корзину!';
            notification.style.display = 'block';

            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        });
    }

    // Пример использования параметра URL для изменения содержимого страницы товара
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    if (productId) {
        const productImage = document.getElementById('product-image');
        const productTitle = document.getElementById('product-title');
        const productDescription = document.getElementById('product-description');
        const productPrice = document.getElementById('product-price');

        switch (productId) {
            case '1':
                productImage.src = '/images/book.jpeg';
                productTitle.textContent = 'Книга Гарри Поттер и Философский Камень';
                productDescription.textContent = 'Первая часть великой франшизы о Гарри Поттере, написанная Джоан Кейтлин Роулинг';
                productPrice.textContent = '4500 сом';
                break;
            case '2':
                productImage.src = '/images/wand.jpg';
                productTitle.textContent = 'Бузинная Палочка';
                productDescription.textContent = 'Великая бузинная Волшебная палочка, принадлежащаяя Проффессору Дамблдору, также являющейся одной из даров смерти';
                productPrice.textContent = '12300 сом';
                break;
            case '3':
                productImage.src = 'images/hat.jpg';
                productTitle.textContent = 'Говорящая Шляпа';
                productDescription.textContent = 'Говорящая шляпа в из Хогвартса, которая определяет в какой факультет поступят новые студенты';
                productPrice.textContent = '15700 сом';
                break;
            default:
                break;
        }
    }
});
