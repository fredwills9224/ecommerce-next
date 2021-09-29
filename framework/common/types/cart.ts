interface Discount{
    value: number
}

export interface Cart{
    
    id: string,
    createdAt: string,
    currency: { code: string }
    taxesIncluded: boolean,
    // taxes, discounts excluded
        lineItemsSubtotalPrice: number,
    // taxes, discounts excluded
    // taxes, discounts included
        totalPrice: number,
    // taxes, discounts included
    lineItems: any[],
    discounts: Discount[]

}