import React from 'react';

const TabContent = () =>
  <section className="tabContent">
    <article id="">
        <div className="messageForm">
            <textarea value="" name="comment"/>
            <div className="btn-submit">
                <span>Tối thiểu 20 ký tự</span>
                <a href="#">Gửi</a>
            </div>
        </div>
        <ul className="commentList">
            <li>
                <div className="thumb">
                    <img src="/app/assets/img/avatar.png"/>
                </div>
                <div className="info">
                    <h4>Mai Nguyễn</h4>
                    <p>Mình đang muộn hóng những tập sau của one piece nên làm ơn ra nhanh hơn nhé mình rất thích chất lượng và luôn thích xen trên đây.</p>
                </div>
                <div className="date">
                    9:19 sáng Thứ Năm
                </div>
            </li>
        </ul>
    </article>
  </section>;
export default TabContent;
