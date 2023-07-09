console.log("Greetings! JavaScript is working");

let firstElement = document.querySelector(".js-firstInput");
let secoundElemenet = document.querySelector(".js-secoundInput");
let formElement = document.querySelector(".js-form");
let documentResult = document.querySelector(".js-documentResult");
let swapButton = document.querySelector(".js-swapButton");

let eurUsd = 1.9 //usdEur (1/1.9)
let eurPln = 4.4 //plnEur (1/4.4)
let usdPln = 4.6 //plnUsd (1/4.6)

swapButton.addEventListener("click", () => {
   let temp = secoundElemenet.value;
	secoundElemenet.value = firstElement.value;
	firstElement.value = temp; 
});

formElement.addEventListener("submit", (event) => {
   event.preventDefault()
   let first = firstElement.options[firstElement.selectedIndex].value;
   let second= secoundElemenet.options[secoundElemenet.selectedIndex].value;
   let writedElement = document.querySelector(".js-valueCurrency").value;
   
   switch (true) {
      case first === "EUR" && second=== "USD":
         result = (eurUsd) * (writedElement)
         break;

      case first === "USD" && second=== "EUR":
         result = (1/eurUsd) * (writedElement)
         break;

      case first === "EUR" && second=== "PLN":
         result = (eurPln) * (writedElement)
         break;

      case first === "PLN" && second=== "EUR":
         result = (1/eurPln) * (writedElement)
         break;
         
      case first === "USD" && second=== "PLN":
         result = (usdPln) * (writedElement)
         break;

      case first ==="PLN" && second=== "USD":
         result = (1/usdPln) * (writedElement)
         break;

      default:
         console.log("Takie same liczby");
         result = (1) * (writedElement)
   }
   documentResult.value = result.toFixed(2);
});


/*Skrypt probny (nieudany) pod update z API => GET https://open.er-api.com/v6/latest/USD (request na select first) NIE UMIEM wydzielac DANYCH z api COS PROBOWALEM ALE chyba za daleko wybiegam
testbutton.addEventListener("click", () => {
   fetch("https://open.er-api.com/v6/latest/USD") // /latest/${waluta wybrana wpierw}
      .then(Response => {
         return Response.json();
      })
      .then(data => {
        console.log(data);
        const currency = data.rates.55;
        const currency_two = currency.PLN;
      })
});
*/
