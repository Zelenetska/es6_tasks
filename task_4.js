let productCart = [
    {productname: 'iphone-x', qty: 10, price: 1000},
    {productname: 'macbook pro', qty: 200, price: 2000},
    {productname: 'iwatch', qty: 100, price: 550},
    {productname: 'macbook air', qty: 100, price: 1000},
    {productname: 'iphone 8', qty: 300, price: 700},
    {productname: 'iphone 7', qty: 100, price: 550},
    {productname: 'ipad Retina', qty: 20, price: 1000},
    {productname: 'ipad', qty: 10, price: 700},
    {productname: 'Magic Mouse', qty: 50, price: 300},
    {productname: 'Magic Trackpad', qty: 75, price: 200}
];

function costOfProductForQtyGreaterThan(quantity) {
    let totalCost = 0;

    productCart
        .filter(product => product.qty > quantity)
        .forEach(product => {
            totalCost += product.qty * product.price;
        });

    return totalCost;
}

function costOfProduct(productName) {
    const product = productCart.find(item => item.productname.toLowerCase() === productName.toLowerCase());

    return product ? product.qty * product.price : 0;
}

costOfProductForQtyGreaterThan(200);

costOfProduct('ipad');