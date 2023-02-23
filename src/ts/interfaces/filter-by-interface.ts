export interface IFilterBy {
    selectedFilter: string
    minPrice: number
    maxPrice: number
    type: {
        entirePlace: boolean
        privateRoom: boolean
        SharedRoom: boolean
    }
}
