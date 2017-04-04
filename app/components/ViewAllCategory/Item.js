import React, { PropTypes } from 'react';

const ItemRow = () =>
    <article className="item">
        <a href="#">
            <img src="../../app/assets/img/img-video/img01.png" />
            <div className="description">
                <h6>Hãy nghe tôi hát</h6>
                <div className="play">105 Lượt xem</div>
                <div className="heart">100 Yêu thích</div>
            </div>
        </a>
    </article>;
ItemRow.propTypes = {
    data: PropTypes.object
};

export default ItemRow;
