import React from 'react';
import ItemRow from './Item';

export default class ListCategory extends React.Component {
    constructor() {
        super();
        this.state = {
            category: []
        };
    }
    render() {
        return (
            <section className="home">
                <div className="head">
                    <h3 className="title">THVL ĐỀ XUẤT</h3>
                    <a href="#" className="viewall">Tất cả</a>
                </div>
                <div className="sliderBlock">
                    <ItemRow />
                    <div className="clear"></div>
                </div>
                <div className="paging">
                    <ul>
                        <li><a href="#">1</a></li>
                        <li><a className="active" href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                    </ul>
                </div>
            </section>
        );
    }
}
