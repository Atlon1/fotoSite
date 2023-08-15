export type CartContextType = {
    isOpen: boolean
    setIsOpen: function
    addToCart: object
    cart:object
    removeFromCart: function
    itemsAmount: number
    handleInput: function
    handleSelected: function
    total: number
    ClearCart: function
}