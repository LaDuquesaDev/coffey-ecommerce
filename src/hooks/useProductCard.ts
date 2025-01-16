export const useProductCard = () => {
    return {
        handleAddToCart: (productName: string) => {
            alert(`Has agregado "${productName}" al carrito.`);
        },
    };
}