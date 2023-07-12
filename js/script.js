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

   const calculateCurrency = (event) => {
      event.preventDefault()
      const first = firstElement.options[firstElement.selectedIndex].value;
      const second = secoundElemenet.options[secoundElemenet.selectedIndex].value;
      const writedAmount = document.querySelector(".js-valueCurrency").value;
      const documentResult = document.querySelector(".js-documentResult");

      const eurUsd = 1.9 //usdEur (1/1.9)
      const eurPln = 4.4 //plnEur (1/4.4)
      const usdPln = 4.6 //plnUsd (1/4.6)

      switch (true) {
         case first ==="EUR" &&second === "USD":
            result = (eurUsd) * (writedAmount)
            break;

         case first === "USD" && second === "EUR":
            result = (1 / eurUsd) * (writedAmount)
            break;

         case first === "EUR" && second === "PLN":
            result = (eurPln) * (writedAmount)
            break;

         case first === "PLN" && second === "EUR":
            result = (1 / eurPln) * (writedAmount)
            break;

         case first === "USD" && second === "PLN":
            result = (usdPln) * (writedAmount)
            break;

         case first === "PLN" && second === "USD":
            result = (1 / usdPln) * (writedAmount)
            break;

         default:
            result = (1) * (writedAmount)

      }
      documentResult.value = result.toFixed(2);
   }

   
   greetings();
   swapButton.addEventListener("click", swapper);
   formElement.addEventListener("submit", calculateCurrency);
}