/**
 * @author: MinhThuanCoder
 * @date: 2022-06-12
 *
 * All rights reserved ©CleOHouse Inc. 2022
 */
import React from 'react';
import './CleFooter.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CleFooter(props) {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#558D97" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#558D97" }}
                onClick={onClick}
            />
        );
    }
    return (
        <footer id="footer" className='mt-5'>
            <div className='container pt-3'>
                <div className='row'>
                    <div className="col-md-7">
                        <h4><b>CÔNG TY CỔ PHẦN PHÒNG KHÁM CHUYÊN KHOA DA LIỄU ABC</b></h4>
                        <ul className="footer__branchList">
                            <li><strong>» Chi nhánh 1: </strong> 135/17/81 Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, TP.HCM.</li>
                            <li><strong>» Chi nhánh 2: </strong> 51 Nguyễn Đình Chính, Phường 15, Quận Phú Nhuận, TP.HCM.</li>
                        </ul>
                        <p><i className="bi bi-envelope-fill"></i><strong> Email: </strong> hi@cleohouse.com</p>
                        <p><i className="bi bi-telephone-fill"></i><strong> Phone: </strong> 0928 339 625</p>
                        <p><i className="bi bi-calendar-minus"></i><strong> Giờ làm việc:</strong> Thứ 2 – Chủ nhật (08:30 – 19:00)</p>

                        <div>
                            <h5>Theo dõi chúng tôi:</h5>
                            <div className='d-flex align-item-center'>
                                <i className="bi bi-facebook display-5"></i>
                                <i className="bi bi-youtube display-4 mx-3"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h4><b>BẢN ĐỒ</b></h4>
                        <Slider {...settings} className="mt-2 text-center">
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1918321458534!2d106.67745731474915!3d10.796614892307781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528db1f40632b%3A0xfa9355f70fd51540!2zQsawdSDEkWnhu4duIFBow7ogTmh14bqtbg!5e0!3m2!1svi!2s!4v1658613444935!5m2!1svi!2s" width={530} height={250} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />                            </div>
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1918321458534!2d106.67745731474915!3d10.796614892307781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528db1f40632b%3A0xfa9355f70fd51540!2zQsawdSDEkWnhu4duIFBow7ogTmh14bqtbg!5e0!3m2!1svi!2s!4v1658613444935!5m2!1svi!2s" width={530} height={250} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="copyright-footer text-center py-2">
                <span className="footer-copyright fw-bold fs-4">Copyright © {(new Date().getFullYear())} - ABC Spa</span>
            </div>
        </footer>
    );
}

export default CleFooter;