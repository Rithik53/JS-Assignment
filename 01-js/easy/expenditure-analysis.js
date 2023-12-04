/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

  let spent = [];

  for (let i = 0; i < transactions.length; i++) {
    let price = transactions[i].price
    let category = transactions[i].category

    let found = false;

    for(let i=0;i<spent.length;i++){
      if(spent[i].category === category){
        spent[i].totalSpent+=price
        found = true

        break;
      }
    }

    if(!found){
      spent.push({
        category:category,
        totalSpent:price
      })
    }
  }

  return spent;
}

module.exports = calculateTotalSpentByCategory;
