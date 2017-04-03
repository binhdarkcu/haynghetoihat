import React, { PropTypes } from 'react';

const ProductRow = ({ data }) =>
    <div>
		<div>test2222</div>
        <p>{data.name} = {data.price} </p>
    </div>;

ProductRow.propTypes = {
    data: PropTypes.object
};

export default ProductRow;
