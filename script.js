//your code here
const addButton = document.getElementById('add');
  const itemNameInput = document.getElementById('item-qty-input');
  const itemPriceInput = document.getElementById('item-price-input');
  const itemList = document.getElementById('item-list');
  const totalDisplay = document.getElementById('total');

  let grandTotal = 0;

  addButton.addEventListener('click', () => {
    const itemName = itemNameInput.value.trim();
    const itemPrice = parseFloat(itemPriceInput.value);

    // Validate input
    if (!itemName || isNaN(itemPrice) || itemPrice <= 0) {
      alert('Please enter a valid item name and price.');
      return;
    }

    // Update list and grand total
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = itemName;
    const priceCell = document.createElement('td');
    priceCell.textContent = `$${itemPrice.toFixed(2)}`;
    row.appendChild(nameCell);
    row.appendChild(priceCell);
    itemList.appendChild(row);

    grandTotal += itemPrice;
    totalDisplay.textContent = `Grand Total: $${grandTotal.toFixed(2)}`;

    // Clear input fields
    itemNameInput.value = '';
    itemPriceInput.value = '';
  });