let checkout = document.querySelector('#checkout');
let size = document.querySelector('#size');
let crust = document.querySelector('#crust');
let toppings = document.querySelector('#toppings');
let delivery = document.querySelector('#delivery');
let quantity = document.querySelector('#quantity');
let deliveryOpt = document.querySelector('#deliveryOpt');
let noPizzas = document.querySelector('#noPizzas');
let deliveryOption = document.querySelector('#deliveryOption');
let amount = document.querySelector('#amount');
let desc = document.querySelector('#desc');
let deliveryMsg = document.querySelector('#deliveryMsg');
let total = document.querySelector('.total');

// When checkout button is clicked, call showSummary function
checkout.addEventListener('click', showSummary);

// Constructor
function Pizza(size, crust, toppings, crustPrice, toppingsPrice){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings; 
    this.crustPrice = 300;
    this.toppingsPrice = 400;
    this.smallPrice = 300;
    this.mediumPrice = 500;
    this.sizePrize = 700;
}

//Prototype
Pizza.prototype.price = function() {
    return crustPrice+toppingsPrice
  };
   

  // showSummary Function
function showSummary(e){
    e.preventDefault();
    total.classList.add('show')
    let pizzaSize = size.options[size.selectedIndex].value;
    let pizzaCrust = crust.options[crust.selectedIndex].value;
    let pizzaToppings = toppings.options[toppings.selectedIndex].value;
    let pizzaDelivery = delivery.options[delivery.selectedIndex].value;
    let pizzaQuantity = quantity.value;

    if(pizzaDelivery == "To be delivered" && deliveryOpt.innerHTML === ""){
        let p = document.createElement('p');
        let txt = document.createTextNode("Delivery cost: Ksh 300");
        p.id="delivery-cost";
        p.appendChild(txt);

        let input = document.createElement('input');
        input.id = "deliveryPlace";
        input.type="text";

        let label = document.createElement('label');
        let labelTxt = document.createTextNode("Delivery Location");
        label.appendChild(labelTxt);

        deliveryOpt.appendChild(p);
        deliveryOpt.appendChild(labelTxt);
        deliveryOpt.appendChild(input);
        deliveryMsg.innerHTML = "your order will be delivered to your location";

    }
    else{
        while (deliveryOpt.firstChild) {
            deliveryOpt.firstChild.remove();
        }
    }

    let crustPrice = 300;
    let toppingsPrice = 400;
    let pPrice = 0;

    if(pizzaSize == "Small"){
        pPrice = 300;
    }
    else if(pizzaSize == "Medium"){
        pPrice = 500;
    }
    else if(pizzaSize == "Large"){
        pPrice = 700;
    }
    deliveryOption.innerHTML = pizzaDelivery;
    noPizzas.innerHTML = pizzaQuantity;
    const pizza = new Pizza(pizzaSize, pizzaCrust, pizzaToppings);
    desc.innerHTML = pizza.size + " with "+ pizza.crust + " crust and " + pizza.toppings + " toppings.";
    amount.innerHTML = parseInt(pPrice)+parseInt(crustPrice)+parseInt(toppingsPrice)

 
}