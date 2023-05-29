// select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

//console.log(filterButtons, filterableCards)

// define the filter function
const filterCards = e => {
   document.querySelector(".acitve").classList.remove("active");
   e.target.classList.add("active");

   //iterate over each filterable card
   filterableCards.forEach(card => {
      //add "hide " class to hide the card initally
      card.classList.add("hide");
      //check if the card matchesz the selected filter or "all" is selected
      if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
         card.classList.remove("hide");
      }


   });
};

// Add click event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click", filterCards));
