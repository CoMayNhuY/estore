import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { makeStyles } from '@mui/styles';
import Carousel from 'react-material-ui-carousel';
import { ListItem, ImageListItem, ImageList } from '@mui/material';
import { listBanner, itemsCarousel, ImgBannerRight } from '../banner/constantBanner';

const useStyles = makeStyles({
    bannerLeft: {
        marginLeft: 40,
        marginTop: 30,
    },
    styListBanner: {
        width: 400,
        height: 400,
        backgroundColor: 'white',
    },
    styTextList: {
        color: '#ff5252',
    },
    styleImgBanner: {
        marginTop: 22,
        width: '100%',
        height: 400,
        objectFit: 'cover',
    },
    styImgBannerRight: {
        marginTop: 30,
        width: '100%',
        height: 400,
    },
});

export default function NestedList() {
    const classes = useStyles();
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4">
                    <div className={classes.bannerLeft}>
                        <List
                            className={classes.styListBanner}
                            sx={{ maxWidth: 360 }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            {listBanner.map((item) => (
                                <ListItemButton key={item.id}>
                                    <ListItemIcon>
                                        <div className={classes.styTextList}>{item.icon}</div>
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            ))}
                        </List>
                    </div>
                </div>
                <div className="col-sm-5">
                    <Carousel>
                        {itemsCarousel.map((item) => (
                            <ListItem key={item.id}>
                                <img src={item.img} className={classes.styleImgBanner} />
                            </ListItem>
                        ))}
                    </Carousel>
                </div>
                <div className="col-sm-3">
                    <ImageList className={classes.styImgBannerRight}>
                        {ImgBannerRight.map((item) => (
                            <ImageListItem key={item.id} cols={2}>
                                <img src={item.img} />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            </div>
        </div>
    );
}
