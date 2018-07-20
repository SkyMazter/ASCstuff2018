const string = "string";
const variable = 2;
let amI35 = false; 

// We're going to earn a profit by reselling tickets
// We bought some tickets to see SZA!
// 4 regular tickets for $45 each and 2 front row tickets for $75 each
const cost = (45 * 4 + 75 * 2);
console.log('Cost: ' + (45 * 4 + 75 * 2));

// we're selling them for 50% more lol.
const sellingprice = (45 * 4 + 75 * 2) * 1.5;
console.log('Selling price: ' + sellingprice);

// But StubHub, the online ticket selling platform, charges a 20% seller fee...
const sellers = (45 * 4 + 75 * 2) * 1.5 * 0.2;
console.log('Seller fee: ' + sellingprice);

// So here's our total profit:
const totalProfit = sellingprice - sellers - cost;
console.log('Total profit: ' + totalProfit);
