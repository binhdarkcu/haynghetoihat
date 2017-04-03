import React from 'react';
import Slider from 'react-slick';
import CategoryItem from './CategoryItem';

export default class categoryList extends React.Component {
    constructor() {
        super();
        this.state = {
            data:
            [
                {
                    'id': 1,
                    'name': 'Ai sẽ là ngôi sao',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/v-1.jpg'
                },
                {
                    'id': 2,
                    'name': 'Ban nhạc quyền năng',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/v-1.jpg'
                },
                {
                    'id': 1,
                    'name': 'Cặp đôi hài hước',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/v-1.jpg'
                },
                {
                    'id': 1,
                    'name': 'Chuyện cảnh giác',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/v-1.jpg'
                },
                {
                    'id': 1,
                    'name': 'Hãy nghe tôi hát',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/v-1.jpg'
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
            slidesToShow: 5,
            slidesToScroll: 5,
            prevArrow: <PrevButton />,
            nextArrow: <NextButton />
        };
        return (
            <ul className="slickSlider">
                <Slider {...settings}>
                    {this.state.data.map((slider, i) => <CategoryItem key = {i} data = {slider} />)}
                </Slider>
            </ul>
        );
    }
}
