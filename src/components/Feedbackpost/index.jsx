import React from 'react';
import '../product/product.css';
import { makeStyles } from '@mui/styles';
import StarIcon from '@mui/icons-material/Star';
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
    stars.push(<StarIcon style={{ fontSize: 14 }} />);
}
function FeedbackPost({ item }) {
    const classes = useStyles();
    return (
        <div className="col-sm-5 sp-footer">
            <div className="aroundI-f">
                <img className="img-pr-f img-pr-f-l" src={item.img} />
                <div className="so">
                    <div className="so-text">
                        <h4>{item.title}</h4>
                        <span className="text-r-f">{item.name}</span>
                        <div className={classes.styIconHead}>{stars}</div>
                        <span className="text-r-f">{item.content}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedbackPost;
