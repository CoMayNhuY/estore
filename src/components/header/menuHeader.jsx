const constmenuHeaderTopLeft = [
    {
        id: 1,
        title: 'Home',
        styTitle: 'main-hd-t-l',
        path: '/',
    },
    {
        id: 2,
        title: 'Products',
    },
    {
        id: 3,
        title: 'Product detail',
    },
    {
        id: 4,
        title: 'Cart',
    },
    {
        id: 5,
        title: 'Checkout',
    },
    {
        id: 6,
        title: 'My account',
    },
    {
        id: 7,
        title: 'More pages',
        subTitles: ['page1', 'page2', 'page3', 'page4'],
        isDropdownShown: true,
    },
];

const constmenuHeaderTopRight = [
    {
        id: 1,
        title: 'User account',
        subTitles: ['profile', 'account', 'logout'],
        isDropdownShown: true,
    },
];

const menuBanner = [
    {
        id: 1,
        i: 'fa-solid fa-heart',
        path: '',
    },
    {
        id: 2,
        i: 'fa-solid fa-cart-shopping',
        path: '/cart',
    },
];

export { constmenuHeaderTopLeft, constmenuHeaderTopRight, menuBanner };
