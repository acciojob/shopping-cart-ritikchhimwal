let grandTotal = 0;

    // Function to add item to the table
    function addItem() {
      // Get input values
      const itemName = document.getElementById("item-name-input").value;
      const itemQty = document.getElementById("item-qty-input").value;
      const itemPrice = document.getElementById("item-price-input").value;

      // Validate input: all fields are required and must be positive numbers
      if (!itemName || itemQty <= 0 || itemPrice <= 0) {
        alert("Please enter valid item details.");
        return;
      }

      // Calculate total price for the item
      const totalPrice = itemQty * itemPrice;

      // Update grand total
      grandTotal += totalPrice;

      // Create a new row in the table
      const tableRow = document.createElement("tr");
      tableRow.innerHTML = `
        <td>${itemName}</td>
        <td>${itemQty}</td>
        <td>$${parseFloat(itemPrice).toFixed(2)}</td>
        <td>$${totalPrice.toFixed(2)}</td>
      `;

      // Append row to the table body
      document.getElementById("item-list").appendChild(tableRow);

      // Update the displayed grand total
      document.getElementById("total").innerText = `Grand Total: $${grandTotal.toFixed(2)}`;

      // Clear input fields
      document.getElementById("item-name-input").value = "";
      document.getElementById("item-qty-input").value = "";
      document.getElementById("item-price-input").value = "";
    }

    // Add event listener to the "Add" button
    document.getElementById("add").addEventListener("click", addItem);