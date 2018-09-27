import React from 'react';
import {withStyles} from '@material-ui/core/styles';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const styles = theme => ({
    root : {}
});

class Carrusel extends React.Component{


    render() {
        const  settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 3,
            initialSlide: 0,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <h2> Responsive </h2>
                <Slider {...settings}>
                    <div style={{width: 100}}>
                        <h3>1</h3>
                    </div>
                    <div style={{ width: 100 }}>
                        <h3>2</h3>
                    </div>
                    <div style={{ width: 100 }}>
                        <h3>3</h3>
                    </div>
                </Slider>
            </div>
        );
    }

}

export default withStyles(styles)(Carrusel);