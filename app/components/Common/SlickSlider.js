import React from 'react';
import Slider from 'react-slick';

export default class SlickSlider extends React.Component {
    constructor() {
        super();
        this.state = {
            data:
            [
                {
                    'id': 1,
                    'name': 'Slider 1',
                    'src': '../app/assets/img/slider-1.jpg'
                },
                {
                    'id': 2,
                    'name': 'Slider 2',
                    'src': '../app/assets/img/slider-1.jpg'
                }
            ]
        };
    }

    render() {
        function PrevButton({ onClick }) {
            return <a onClick={onClick} className="slick-arrow slick-prev" style={{ left: '15px' }}></a>;
        }

        function NextButton({ onClick }) {
            return <a onClick={onClick} className="slick-arrow slick-next" style={{ right: '15px' }}></a>;
        }
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <PrevButton />,
            nextArrow: <NextButton />
        };
        return (
            <ul className="slickSlider">
                <Slider {...settings}>
                    {this.state.data.map((slider, i) => (<li key={i}><img src={slider.src} /></li>))}
                </Slider>
            </ul>
        );
    }
}
