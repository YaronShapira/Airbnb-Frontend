import { IFilter } from '../interfaces/filter-interface'

export const stayService = {
    getFilters,
}

function getFilters(): IFilter[] {
    return [
        {
            filter: 'Castles',
            img: 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676831810/Airbnb/1b6a8b70-a3b6-48b5-88e1-2243d9172c06_v3ckpz.png',
        },
        {
            filter: 'Beachfront',
            img: 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676831810/Airbnb/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c_rioqog.png',
        },
        {
            filter: 'Countryside',
            img: 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676831810/Airbnb/6ad4bd95-f086-437d-97e3-14d12155ddfe_v8u6ah.png',
        },
        {
            filter: 'Desert',
            img: 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676831810/Airbnb/a6dd2bae-5fd0-4b28-b123-206783b5de1d_dsai7e.png',
        },
        {
            filter: 'Windmills',
            img: 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676831810/Airbnb/5cdb8451-8f75-4c5f-a17d-33ee228e3db8_bjryew.png',
        },
        {
            filter: 'Luxe',
            img: 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676831811/Airbnb/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4_xnky0x.png',
        },
        {
            filter: 'Mansions',
            img: 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676831810/Airbnb/78ba8486-6ba6-4a43-a56d-f556189193da_qv99pn.png',
        },
        {
            filter: 'Private rooms',
            img: 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676831810/Airbnb/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585_b0u4bs.png',
        },
        {
            filter: 'OMG!',
            img: 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676831810/Airbnb/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6_lo1esn.png',
        },
        {
            filter: 'Trending',
            img: 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676831810/Airbnb/3726d94b-534a-42b8-bca0-a0304d912260_rmhjkv.png',
        },
        {
            filter: 'Amazing views',
            img: 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676831810/Airbnb/3b1eb541-46d9-4bef-abc4-c37d77e3c21b_vlujog.png',
        },
        {
            filter: 'Lakefront',
            img: 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676831810/Airbnb/677a041d-7264-4c45-bb72-52bff21eb6e8_xuwbjc.png',
        },
        {
            filter: 'Cabins',
            img: 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676831810/Airbnb/732edad8-3ae0-49a8-a451-29a8010dcc0c_auodk0.png',
        },
    ]
}
