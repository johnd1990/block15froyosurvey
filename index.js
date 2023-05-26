// Object Declaration
const customer = {
    firstName: "Jake",
    lastName: "Smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
};

// Update Key:Values
customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];

// Delete Key:Values
delete customer.zipCode;
delete customer.favoriteStore;

// Add Key:Values
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

// Final Print
const keys = Object.keys(customer);
console.log(keys);
