// adding event listener to the products

const products = document.getElementsByClassName('product');

for (let product of products) {
  product.addEventListener('click', function (e) {
    const elementPrice = e.currentTarget.querySelector('.price');
    const elementPriceString = elementPrice.innerText;
    const price = parseFloat(elementPriceString);

    const totalPriceElement = document.getElementById('total-price');
    const totalPriceValueString = totalPriceElement.innerText;
    const totalPriceElementValue = parseFloat(totalPriceValueString);
    totalPrice = totalPriceElementValue + price;
    totalPriceElement.innerText = totalPrice;

    const orderList = document.getElementById('order-list');
    const li = document.createElement('li');
    li.innerText = e.currentTarget.querySelector(".product-name").innerText;
    orderList.appendChild(li);

    const totalElement = document.getElementById('total');
    const totalElementValueString = totalElement.innerText;
    const totalElementValue = parseFloat(totalElementValueString);
    totalElement.innerText = totalElementValue + price;
    
    const purchaseBtn = document.getElementById('purchase-btn');

    if(totalElement.innerText > 0){
      purchaseBtn.removeAttribute('disabled', true)
    }
    else{
      disabled,true;
    }

  })
}
// Go Home Button
const goHome = document.getElementById('go-home');
goHome.addEventListener('click',function(){
  location.reload()
})

// Coupon
const promoCode = document.getElementById('promo-code');
promoCode.addEventListener('keyup', function() {
  // get Items
  const applyBtn = document.getElementById('apply-btn')

  const totalPriceElement = document.getElementById('total-price');
  const totalPriceValueString = totalPriceElement.innerText;
  const totalPriceElementValue = parseFloat(totalPriceValueString);

  const totalElement = document.getElementById('total');
  const totalElementValueString = totalElement.innerText;
  let totalElementValue = parseFloat(totalElementValueString);

  const discountElement = document.getElementById('discount');

  const coupon = promoCode.value;

  if(coupon === "SELL200" && totalPriceElementValue >= 200) {
    applyBtn.removeAttribute('disabled');
    applyBtn.addEventListener('click', function() {
      const discount = totalPriceElementValue * .20;
      totalElementValue = totalElementValue - discount;
      discountElement.innerText = discount.toFixed(2);
      totalElement.innerText = totalElementValue;
      promoCode.value = '';
      applyBtn.setAttribute('disabled', 'true');


      console.log(totalElementValue);
    })
  }
})