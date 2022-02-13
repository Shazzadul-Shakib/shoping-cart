// Increment decrement of Quantity
function quantityUpdate(product,isAddition) {
  const productQuantityId = document.getElementById(product+'-quantity');
  let productQuantity = parseInt(productQuantityId.value);
  if (isAddition==true) {
    productQuantity += 1;
    
  }
  else {
    if (productQuantity > 0) {
     productQuantity -= 1;
    }  
  }
  productQuantityId.value = productQuantity;
}

// product price
function productPrice(product,isAddition,amount) {
  const productPriceId = document.getElementById(product + '-price')
  const productPriceText = productPriceId.innerText;
  let productPrice = parseInt(productPriceText);
  if (isAddition) {
    productPriceId.innerText = productPrice + amount;
  }
  else {
    if (productPrice > 0) {
      productPriceId.innerText = productPrice - amount;
    }
  }
};

// Quantity of products
function getProducts(product) {
  const products = document.getElementById(product + '-quantity');
  return parseInt(products.value);
}
// ! Total price
function totalPrice(amount,isAddition,product) {
  const subTotal = document.getElementById('sub-total');
  // sub Total calculation
  const phonesPrice = getProducts("phone") * 1219;
  const casePrice = getProducts("case") * 59;
  const subtotalAmount = phonesPrice + casePrice;
  subTotal.innerText = subtotalAmount;
// Tax price calculation
  const taxPrice = document.getElementById('tax-amount');
  const taxPriceAmount = subtotalAmount * .1;
  taxPrice.innerText = taxPriceAmount.toFixed(2);
  // Total amount of cost
  const totalCost = document.getElementById('total-amount');
  const totalCostAmount = subtotalAmount+taxPriceAmount;
  totalCost.innerText = totalCostAmount.toFixed(2);
};

// phone quantity update
document.getElementById('phone-plus').addEventListener('click', function () {
  quantityUpdate('phone', true);
  productPrice('phone', true, 1219);
  totalPrice(1219,true,'phone');
});
document.getElementById('phone-minus').addEventListener('click', function () {
  quantityUpdate('phone', false);
  productPrice('phone', false, 1219);
  totalPrice(1219,false,'phone');
});



// case quantity Update
document.getElementById('case-plus').addEventListener('click', function () {
  quantityUpdate('case', true);
  productPrice('case', true, 59);
  totalPrice(59,true,'case');
});
document.getElementById('case-minus').addEventListener('click', function () {
  quantityUpdate('case', false);
  productPrice('case', false, 59);
  totalPrice(59,false,'case');
});
