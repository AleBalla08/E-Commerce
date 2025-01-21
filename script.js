const url = 'https://fakestoreapi.com/products'

const container = document.querySelector('#product1 .pro-container');

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao requisitar')
        }
        return response.json()
    })
    .then(data => {
        console.log(data, 'dados da api')
        data.forEach(product => {
            const pro = document.createElement('div')
            pro.classList.add('pro')

            pro.innerHTML = `
                <img src="${product.image}" alt="">
                <div class="desc">
                    <span>${product.category}</span>
                    <h5>${product.title}</h5>
                    <div class="stars">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>$${product.price}</h4>
                </div>
                <a href="#"><i class="fa fa-cart-shopping cart"></i></a>`


            container.appendChild(pro)

        });
    })
    .catch(error => {
        console.log(error, 'erro')
    })


const bar = document.getElementById('bar');
const close = document.getElementById('close')
const navbar = document.getElementById('navbar')

if (bar) {
    bar.addEventListener('click', () => {
        navbar.style.right = '0px'
    })
}

if (close) {
    close.addEventListener('click', () => {
        navbar.style.right = '-300px'
    })
}








