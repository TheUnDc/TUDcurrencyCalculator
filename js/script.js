{
   const greetings = () => {
      console.log("Greetings! JavaScript is working");
   };

   const firstElement = document.querySelector(".js-firstInput");
   const secoundElemenet = document.querySelector(".js-secoundInput");
   const formElement = document.querySelector(".js-form");

   const swapButton = document.querySelector(".js-swapButton");
   const swapper = () => {
      const temp = secoundElemenet.value;
      secoundElemenet.value = firstElement.value;
      firstElement.value = temp;
   }

   const calc = (event) => {
      event.preventDefault()
      const first = firstElement.options[firstElement.selectedIndex].value;
      const second = secoundElemenet.options[secoundElemenet.selectedIndex].value;
      const writedElement = document.querySelector(".js-valueCurrency").value;
      const documentResult = document.querySelector(".js-documentResult");

      const eurUsd = 1.9 //usdEur (1/1.9)
      const eurPln = 4.4 //plnEur (1/4.4)
      const usdPln = 4.6 //plnUsd (1/4.6)

      switch (true) {
         case first ==="EUR" &&second === "USD":
            result = (eurUsd) * (writedElement)
            break;

         case first === "USD" && second === "EUR":
            result = (1 / eurUsd) * (writedElement)
            break;

         case first === "EUR" && second === "PLN":
            result = (eurPln) * (writedElement)
            break;

         case first === "PLN" && second === "EUR":
            result = (1 / eurPln) * (writedElement)
            break;

         case first === "USD" && second === "PLN":
            result = (usdPln) * (writedElement)
            break;

         case first === "PLN" && second === "USD":
            result = (1 / usdPln) * (writedElement)
            break;

         default:
            result = (1) * (writedElement)

      }
      documentResult.value = result.toFixed(2);
   }

   
   greetings();
   swapButton.addEventListener("click", swapper);
   formElement.addEventListener("submit", calc);


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

}