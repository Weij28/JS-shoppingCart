import 'bootstrap/dist/css/bootstrap.css'  
import '@fortawesome/fontawesome-free/css/all.css'
import Cart from './cart';

const addToCart = btn => {
  btn.addEventListener('click', (e) => {
    // console.log('Ciao!Mio bello');
    const card = e.currentTarget.parentElement.parentElement
    const title = card.querySelector('.card-title').textContent 
    const price = parseFloat(card.querySelector('.price')
                      .textContent
                      .replace('$', ''))
    const id = card.dataset['productId']
                      
    const item = new CartItem({ id, title, price })
    cart.add(item)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.card .btn')
  buttons.forEach(addToCart)
  // buttons.forEach(btn => addToCart(btn))
  
})
