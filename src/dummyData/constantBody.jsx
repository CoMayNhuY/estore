import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const contentProduct = [
    {
        id: 1,
        title: 'Featured Product',
        subIconBtn: [<ArrowBackIosIcon />, <ArrowForwardIosIcon />],
        Products: [
            {
                id: 123,
                name: 'Product Name',
                Img: 'https://i.ndh.vn/2014/09/21/ba972046-1411260123.jpg',
                Price: 99,
            },
            {
                id: 1234,
                name: 'Product Name',
                Img: 'https://dongphucvina.vn/wp-content/uploads/2022/08/chat-lieu-vai-may-chan-vay.jpg',
                Price: 99,
            },
            {
                id: 1235,
                name: 'Product Name',
                Img: 'https://elaopa.org/dam-da-hoi-du-tiec/imager_4_1859_700.jpg',
                Price: 99,
            },
            {
                id: 126,
                name: 'Product Name',
                Img: 'https://toplist.vn/images/800px/chan-vay-mini-879588.jpg',
                Price: 99,
            },
        ],
    },
    {
        id: 2,
        title: 'Recent Product',
        subIconBtn: [<ArrowBackIosIcon />, <ArrowForwardIosIcon />],
        Products: [
            {
                id: 123512,
                name: 'Product Name',
                Img: 'https://top.chon.vn/wp-content/uploads/2019/08/shop-quan-jeans-nu-1.jpg',
                Price: 99,
            },
            {
                id: 12351212,
                name: 'Product Name',
                Img: 'https://canifa.com/blog/wp-content/uploads/2022/05/ao-t-shirt-co-tim.jpg',
                Price: 99,
            },
            {
                id: 12351246,
                name: 'Product Name',
                Img: 'https://thieuhoa.com.vn/wp-content/uploads/2020/09/3d0534fe29bb3e2bb57455f63ccd968a.jpg',
                Price: 99,
            },
            {
                id: 123512123,
                name: 'Product Name',
                Img: 'https://media.boohoo.com/i/boohoo/gzz12004_charcoal_xl/womens-charcoal-little-mermaid-license-oversized-t-shirt-/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
                Price: 99,
            },
        ],
    },
];

const contentB_F = [
    {
        id: 1,
        name: 'Profession',
        id: 1,
        title: 'Christopher',
        content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis minima molestias voluptates nam vitae',
        img: 'https://toplist.vn/images/800px/nguoi-mau-nu-dep-nhat-tren-the-gioi-hien-nay-763782.jpg',
    },
    {
        id: 2,
        name: 'Doctor',
        id: 1,
        title: 'Elena Sharon',
        content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis minima molestias voluptates nam vitae',
        img: 'https://file.vfo.vn/hinh/2016/10/irina-shayk-nhung-nguoi-mau-dep-nhat-hien-nay-4.jpg',
    },
];
export { contentProduct, contentB_F };
