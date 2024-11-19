/**
 * This functions calculate total price of a new order
 * @param {Array} products cardProducts: Array of Objects
 * @return {number} Total price
 */
export const totalPrice = (products)=>{
    return products.reduce((sum, product)=> sum + product.price, 0)
}