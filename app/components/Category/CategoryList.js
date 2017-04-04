import React from 'react';
import BlockSlider from 'react-slick';

export class categoryList extends React.Component {
    constructor() {
        super();
        this.state = {
            category:
            [
                {
                    'id': 1,
                    'name': 'Ai sẽ là ngôi sao',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/img-video/img01.png'
                },
                {
                    'id': 2,
                    'name': 'Ban nhạc quyền năng',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/img-video/img02.png'
                },
                {
                    'id': 3,
                    'name': 'Cặp đôi hài hước',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/img-video/img03.png'
                },
                {
                    'id': 4,
                    'name': 'Chuyện cảnh giác',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/img-video/img04.png'
                },
                {
                    'id': 5,
                    'name': 'Hãy nghe tôi hát',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/img-video/img05.png'
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
        const blocksettings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            centerMode: true,
            centerPadding: '3px',
            prevArrow: <PrevButton />,
            nextArrow: <NextButton />
        };
        return (
            <div className="sliderBlock">
                <BlockSlider {...blocksettings}>
                    {this.state.category.map((category, i) => (
                        <article key={i} className="item">
                            <img src={category.src} />
                            <div className="description">
                                <h6>{category.name}</h6>
                                <div className="play">205 Lượt xem</div>
                                <div className="heart">56 Yêu thích</div>
                            </div>
                        </article>
                    ))}
                </BlockSlider>
            </div>
        );
    }
}
export default categoryList;
