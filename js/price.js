document.getElementById("quantity").addEventListener("change", function() {
    // Get the selected quantity
    const selectedQuantity = parseInt(this.value);
    
    // Calculate the price based on the selected quantity
    let price = 0;
    switch (selectedQuantity) {
      case 1:
        price = 250;
        break;
      case 2:
        price = 400;
        break;
      case 3:
        price = 600;
        break;
      default:
        price = 0; // Handle other cases as needed
    }
    
    // Update the price display
    document.getElementById("price-display").textContent = `Total: ${price} DH`;



    
  });
  
  