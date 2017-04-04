import React from 'react';
import BlockSlider from 'react-slick';

export default (categoryType) => class categoryList extends React.Component {
    constructor() {
        super();
        this.onMouseEnter  = this.handleMouseEnter.bind(this);
        this.onMouseLeave  = this.handleMouseLeave.bind(this);
        this.state = {
            category:
            [
                {
                    'id': 1,
                    'type': 'viewing',
                    'name': 'Ai sẽ là ngôi sao',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/img-video/img01.png'
                },
                {
                    'id': 2,
                    'type': 'viewing',
                    'name': 'Ban nhạc quyền năng',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/img-video/img02.png'
                },
                {
                    'id': 3,
                    'type': 'viewing',
                    'name': 'Cặp đôi hài hước',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/img-video/img03.png'
                },
                {
                    'id': 4,
                    'type': 'viewing',
                    'name': 'Chuyện cảnh giác',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/img-video/img04.png'
                },
                {
                    'id': 5,
                    'type': 'viewing',
                    'name': 'Hãy nghe tôi hát',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/img-video/img05.png'
                },
                {
                    'id': 6,
                    'type': 'recommend',
                    'name': 'Hãy nghe tôi hát',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/img-video/img06.png'
                },
                {
                    'id': 7,
                    'type': 'recommend',
                    'name': 'Hãy nghe tôi hát',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/img-video/img07.png'
                },
                {
                    'id': 8,
                    'type': 'recommend',
                    'name': 'Hãy nghe tôi hát',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/img-video/img08.png'
                },
                {
                    'id': 9,
                    'type': 'recommend',
                    'name': 'Hãy nghe tôi hát',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/img-video/img09.png'
                },
                {
                    'id': 10,
                    'type': 'recommend',
                    'name': 'Hãy nghe tôi hát',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/img-video/img10.png'
                },
                {
                    'id': 11,
                    'type': 'recommend',
                    'name': 'Hãy nghe tôi hát',
                    'view': 205,
                    'like': 56,
                    'src': '../app/assets/img/img-video/img11.png'
                }
            ]
        };
    }
    handleMouseEnter(event) {
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
        event.currentTarget.parentElement.parentElement.style.overflow = 'visible';
    }
    handleMouseLeave(event) {
        document.getElementsByTagName('body')[0].removeAttribute('style');
        event.currentTarget.parentElement.parentElement.removeAttribute('style');
    }
    render() {
        function PrevButton({ onClick }) {
            return <a onClick={onClick} className="slick-arrow slick-prev"><span></span></a>;
        }

        function NextButton({ onClick }) {
            return <a onClick={onClick} className="slick-arrow slick-next"><span></span></a>;
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
                        <article key={i} className="item" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} >
                            <a href="#">
                                <img src={category.src} />
                                <div className="description">
                                    <h6>{category.name}</h6>
                                    <div className="play">{category.view} Lượt xem</div>
                                    <div className="heart">{category.like} Yêu thích</div>
                                </div>
                            </a>
                        </article>
                    ))}
                </BlockSlider>
            </div>
        );
    }
};
