import React, { useContext, useState } from 'react';
import '../../../../components/product/product.css';
import { makeStyles } from '@mui/styles';
import { contentProduct, contentB_F } from '../../../../dummyData/constantBody';
import StarIcon from '@mui/icons-material/Star';
import { contextTest } from '../../../../App';
import ProductItem from '../../../../components/product';
import FeedbackPost from '../../../../components/Feedbackpost';

const useStyles = makeStyles({
    styIcB: {
        color: '#ff5252',
        width: '100%',
    },
    styImgSP: {
        width: 300,
        height: 450,
        marginLeft: -12,
        marginRight: 36,
        position: 'relative',
    },
    imgHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100%',
        height: 60,
    },
    styIconHead: {
        color: '#ff5252',
    },
    styTextHead: {
        color: 'white',
        fontSize: 18,
    },
    styImg: {
        width: 300,
        height: 330,
        objectFit: 'cover',
    },
});

var stars = [];
for (var i = 0; i < 5; i++) {
    stars.push(<StarIcon />);
}

function Body() {
    const classes = useStyles();
    const { state1 } = useContext(contextTest);
    const [carts, setCarts] = state1;

    const addItemToCart = (item) => {
        const existProduct = carts.find((m) => m.id === item.id);
        if (existProduct) {
            setCarts(
                carts.map((product) =>
                    product.id === item.id
                        ? {
                              ...existProduct,
                              quantity: existProduct.quantity + 1,
                          }
                        : product,
                ),
            );
        } else {
            setCarts((prev) => [
                ...prev,
                {
                    id: item.id,
                    name: item.name,
                    price: item.Price,
                    img: item.Img,
                    quantity: 1,
                },
            ]);
        }
        alert('product has been add in cart !!');
    };
    // const [blogItems, setBlogItems] = React.useState();
    // React.useEffect(() => {
    //     const fecthAPI = async () => {
    //         const data = await fetch('https://comaynhuy.github.io/contentProduct.github.io/DataProduct.json');
    //         const json = await data.json();
    //         setBlogItems(json.DataProduct);
    //     };
    //     fecthAPI();
    // }, []);

    return (
        <div>
            {contentProduct.map((item, index) => (
                <ProductItem key={item.id} item={item} addItemToCart={addItemToCart} />
            ))}
            <div className="container-fluid sp">
                <div className="row">
                    {contentB_F.map((item) => (
                        <FeedbackPost key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Body;
