export interface IStay {
    _id: string
    name: string
    type: string
    imgUrls: string[]
    price: number
    summary: string
    amenities: string[]
    roomType: string
    filters: string[]
    host: {
        _id: string
        fullname: string
        imgUrl: string
        isSuperHost: boolean
    }
    loc: {
        country: string
        countryCode: string
        city: string
        address: string
        lat: number
        lng: number
    }
    reviews: IStayReview[]
}

export interface IStayReview {
    createdAt: string
    by: {
        _id: string
        fullname: string
        imgUrl: string
        id: string
    }
    txt: string
    id: string
    moreRate: {
        cleanliness: number
        accuracy: number
        communication: number
        location: number
        checkIn: number
        value: number
    }
}

export interface ISkeletonStay {
    type: string
    _id: string
}
