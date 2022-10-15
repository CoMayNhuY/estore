import React from 'react';
import './product.css';
import { makeStyles } from '@mui/styles';
import StarIcon from '@mui/icons-material/Star';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';
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
        fontSize: 16,
    },
    styImg: {
        width: 300,
        height: 330,
        objectFit: 'cover',
    },
});

var stars = [];
for (var i = 0; i < 5; i++) {
    stars.push(<StarIcon style={{ fontSize: 16 }} />);
}
function ProductItem({ item /*, ProductItem*/ }) {
    const carts = useSelector((state) => {
        return state.cart.carts;
    });
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <div>
            <div className="container-fluid tcc">
                <div className="row">
                    <div className="col-sm-6 tcc-left">{item.title}</div>
                    <div className="col-sm-6 tcc-right">
                        {item.subIconBtn?.map((subIc) => (
                            <button className="btn btn-dangerous iconButtonca">
                                <div className={classes.styIcB}>{subIc}</div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container-fluid sp">
                <div className="row">
                    <div className="col-sm-12 product-feautured">
                        {item.Products?.map((itemProd, index) => (
                            <div className={classes.styImgSP} id="hoverImgSP" key={index.toString()}>
                                <div className={classes.imgHeader}>
                                    <div>
                                        <span className={classes.styTextHead}>{itemProd.name}</span>
                                        <div className={classes.styIconHead}>{stars}</div>
                                    </div>
                                </div>
                                <div>
                                    <figure>
                                        <img className={classes.styImg} src={itemProd.Img} />
                                    </figure>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="imgFooter">
                                            <div className="col-sm-6">
                                                <h4 className="Prices">
                                                    <span className="styDola">$</span>
                                                    {itemProd.Price}
                                                </h4>
                                            </div>
                                            <div className="col-sm-6 btn-right">
                                                <button className="btn btn-dangerous btn-cart">
                                                    <i class="fa-solid fa-cart-shopping iconcart"></i>
                                                    <span className="text-btn">Buy Now</span>
                                                </button>

                                                <button
                                                    className="btn btn-dangerous chaovan"
                                                    // onClick={() => navigate(`detail/${itemProd.id}`)}
                                                    style={{ width: 10, height: 30 }}
                                                >
                                                    <i
                                                        class="fa-solid fa-cart-shopping shopping-ho"
                                                        onClick={() => dispatch(addToCart(itemProd))}
                                                    ></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
