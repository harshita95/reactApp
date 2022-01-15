export const getStockDetails = (value, stocks) => {
    let foundStock;
    stocks.forEach(function(stock) {
        if(stock.name === value)
            foundStock = stock;
    });
    return foundStock;
};
