import React from 'react';

export default class ItemRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <article ref="item" className="listRow" >
                <img src={this.props.data.src} />
            </article>
        );
    }
}
