import React, { useEffect, useState } from 'react';
import "./HomePage.scss"
import dichvutrimun from "../../../assets/home-page/dich-vu-tri-mun.jpg"
import modeltrehoada from "../../../assets/home-page/model-tre-hoa-da.jpg"
import trehoada1 from "../../../assets/home-page/tre-hoa-da-1.jpg"
import trehoada2 from "../../../assets/home-page/tre-hoa-da-2.jpg"
import trehoada3 from "../../../assets/home-page/tre-hoa-da-3.jpg"
import banner1 from "../../../assets/home-page/banner-1.png"
import denmotlanladep from "../../../assets/home-page/den-mot-lan-la-dep.jpg"
import ketquacaydnacahoi from "../../../assets/home-page/ket-qua-cay-dna-ca-hoi.jpg"
import asd from "../../../assets/home-page/asd.png"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomePage = props => {
    var settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    className: "center",
                    infinite: true,
                    centerPadding: "60px",
                    slidesToShow: 2,
                    swipeToSlide: true,
                    afterChange: function (index) {
                        console.log(
                            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
                        );
                    },

                }
            },
            {
                breakpoint: 600,
                settings: {
                    className: "center",
                    infinite: true,
                    centerPadding: "60px",
                    slidesToShow: 1,
                    swipeToSlide: true,
                    afterChange: function (index) {
                        console.log(
                            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
                        );
                    },
                }
            },
            {
                breakpoint: 480,
                settings: {
                    className: "center",
                    infinite: true,
                    centerPadding: "60px",
                    slidesToShow: 1,
                    swipeToSlide: true,
                    afterChange: function (index) {
                        console.log(
                            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
                        );
                    },
                }
            }
        ]
    };
    const settings_2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
        //slidesPerRow: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    const [serviceList, setServiceList] = useState({
        services: [
            {
                serviceId: 1,
                serviceTitle: "Điều trị mụn",
                servicePicture: dichvutrimun, //'https://hienvanspa.com/wp-content/uploads/2021/06/dich-vu-tre-hoa-da.jpg'
                serviceDetail: {
                    serviceDescription: `Hơn 50.000 khách hàng trong và ngoài nước, đã điều trị da mụn thành công tại Hiền Vân Spa. Không phân biệt mụn nhẹ hay nặng, chỉ sau 90 phút đầu tiên, cam kết giảm mụn viêm hơn 80%. Bảo hành kết quả điều trị mụn trọn đời không tái phát bằng văn bản.`,
                    serviceDetailPicture: modeltrehoada,//`https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun.jpg`,
                    serviceDetailImgList: [
                        { serviceDetailImg: trehoada1 },
                        { serviceDetailImg: trehoada2 },
                        { serviceDetailImg: trehoada3 },
                    ]
                }
            },
            {
                serviceId: 2,
                serviceTitle: "Điều trị mụn thịt",
                servicePicture: dichvutrimun,
                serviceDetail: {
                    serviceDescription: `Hơn 50.000 khách hàng trong và ngoài nước, đã điều trị da mụn thành công tại Hiền Vân Spa. Không phân biệt mụn nhẹ hay nặng, chỉ sau 90 phút đầu tiên, cam kết giảm mụn viêm hơn 80%. Bảo hành kết quả điều trị mụn trọn đời không tái phát bằng văn bản.`,
                    serviceDetailPicture: modeltrehoada,//`https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun.jpg`,
                    serviceDetailImgList: [
                        { serviceDetailImg: trehoada1 },
                        { serviceDetailImg: trehoada2 },
                        { serviceDetailImg: trehoada3 },
                    ]
                }
            },
            {
                serviceId: 3,
                serviceTitle: "Điều trị thâm mụn",
                servicePicture: dichvutrimun,
                serviceDetail: {
                    serviceDescription: `Hơn 50.000 khách hàng trong và ngoài nước, đã điều trị da mụn thành công tại Hiền Vân Spa. Không phân biệt mụn nhẹ hay nặng, chỉ sau 90 phút đầu tiên, cam kết giảm mụn viêm hơn 80%. Bảo hành kết quả điều trị mụn trọn đời không tái phát bằng văn bản.`,
                    serviceDetailPicture: modeltrehoada,//`https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun.jpg`,
                    serviceDetailImgList: [
                        { serviceDetailImg: trehoada1 },
                        { serviceDetailImg: trehoada2 },
                        { serviceDetailImg: trehoada3 },
                    ]
                }
            },
            {
                serviceId: 4,
                serviceTitle: "Điều trị sẹo rỗ",
                servicePicture: dichvutrimun,
                serviceDetail: {
                    serviceDescription: `Hơn 50.000 khách hàng trong và ngoài nước, đã điều trị da mụn thành công tại Hiền Vân Spa. Không phân biệt mụn nhẹ hay nặng, chỉ sau 90 phút đầu tiên, cam kết giảm mụn viêm hơn 80%. Bảo hành kết quả điều trị mụn trọn đời không tái phát bằng văn bản.`,
                    serviceDetailPicture: modeltrehoada,//`https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun.jpg`,
                    serviceDetailImgList: [
                        { serviceDetailImg: trehoada1 },
                        { serviceDetailImg: trehoada2 },
                        { serviceDetailImg: trehoada3 },
                    ]
                }
            },
            {
                serviceId: 5,
                serviceTitle: "Điều trị nám",
                servicePicture: dichvutrimun,
                serviceDetail: {
                    serviceDescription: `Hơn 50.000 khách hàng trong và ngoài nước, đã điều trị da mụn thành công tại Hiền Vân Spa. Không phân biệt mụn nhẹ hay nặng, chỉ sau 90 phút đầu tiên, cam kết giảm mụn viêm hơn 80%. Bảo hành kết quả điều trị mụn trọn đời không tái phát bằng văn bản.`,
                    serviceDetailPicture: modeltrehoada,//`https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun.jpg`,
                    serviceDetailImgList: [
                        { serviceDetailImg: trehoada1 },
                        { serviceDetailImg: trehoada2 },
                        { serviceDetailImg: trehoada3 },
                    ]
                }
            },
            {
                serviceId: 6,
                serviceTitle: "Triệt lông",
                servicePicture: dichvutrimun,
                serviceDetail: {
                    serviceDescription: `Hơn 50.000 khách hàng trong và ngoài nước, đã điều trị da mụn thành công tại Hiền Vân Spa. Không phân biệt mụn nhẹ hay nặng, chỉ sau 90 phút đầu tiên, cam kết giảm mụn viêm hơn 80%. Bảo hành kết quả điều trị mụn trọn đời không tái phát bằng văn bản.`,
                    serviceDetailPicture: modeltrehoada,//`https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun.jpg`,
                    serviceDetailImgList: [
                        { serviceDetailImg: trehoada1 },
                        { serviceDetailImg: trehoada2 },
                        { serviceDetailImg: trehoada3 },
                    ]
                }
            },
            {
                serviceId: 7,
                serviceTitle: "Trị tàn nhang",
                servicePicture: dichvutrimun,
                serviceDetail: {
                    serviceDescription: `Hơn 50.000 khách hàng trong và ngoài nước, đã điều trị da mụn thành công tại Hiền Vân Spa. Không phân biệt mụn nhẹ hay nặng, chỉ sau 90 phút đầu tiên, cam kết giảm mụn viêm hơn 80%. Bảo hành kết quả điều trị mụn trọn đời không tái phát bằng văn bản.`,
                    serviceDetailPicture: modeltrehoada,//`https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun.jpg`,
                    serviceDetailImgList: [
                        { serviceDetailImg: trehoada1 },
                        { serviceDetailImg: trehoada2 },
                        { serviceDetailImg: trehoada3 },
                    ]
                }
            },
            {
                serviceId: 8,
                serviceTitle: "Trẻ hóa da",
                servicePicture: dichvutrimun,
                serviceDetail: {
                    serviceDescription: `Hơn 50.000 khách hàng trong và ngoài nước, đã điều trị da mụn thành công tại Hiền Vân Spa. Không phân biệt mụn nhẹ hay nặng, chỉ sau 90 phút đầu tiên, cam kết giảm mụn viêm hơn 80%. Bảo hành kết quả điều trị mụn trọn đời không tái phát bằng văn bản.`,
                    serviceDetailPicture: modeltrehoada,//`https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun.jpg`,
                    serviceDetailImgList: [
                        { serviceDetailImg: trehoada1 },
                        { serviceDetailImg: trehoada2 },
                        { serviceDetailImg: trehoada3 },
                    ]
                }
            },
        ]
    })
    const [currentService, setCurrentService] = useState(serviceList.services[0])
    const handleChangeServiceDescription = (serviceId = 1) => {
        //serviceId: 0 ==> 7
        setCurrentService(serviceList.services[serviceId - 1])
    }
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

    useEffect(() => {
        console.log(currentService)
    })
    return (
        <div className="homePage">
            <div className='homePageBanner'>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                        {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" /> */}
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={banner1} className="d-block w-100" alt="" />
                        </div>

                        <div className="carousel-item">
                            <img src={banner1} className="d-block w-100" alt="" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="homePageService">
                <p className="fs-2 fw-bold text-muted text-center py-3">DỊCH VỤ NỔI BẬC</p>
                <div className="homePageServiceList">
                    {
                        serviceList.services.map(service => (
                            <div className={`homePageItemService ${currentService.serviceId === service.serviceId ? "homePageItemService-active" : ""}`} data-filer="dieutrimunthit" key={service.serviceId} onClick={() => handleChangeServiceDescription(service.serviceId)}>
                                <img src={service.servicePicture} />
                                <span>{service.serviceTitle}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="homePageServiceDetail container mt-5">
                    <div className="homePageServiceDetailDesc" data-filter="dieutrimun">
                        <div className="hpgServiceDetailLeft">
                            <img src={currentService.serviceDetail.serviceDetailPicture} />
                            {/* <img src="https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun-1.jpg" /> */}
                        </div>
                        <div className="hpgServiceDetailRight">
                            <p className="fs-3 fw-bold text-muted mt-1">{currentService.serviceTitle.toUpperCase()}</p>
                            <div className="content-service">
                                <span>{currentService.serviceDetail.serviceDescription}</span>
                            </div>
                            <div className="hpgServiceDetailRight-imagedetail mt-3 mb-2">
                                {
                                    currentService.serviceDetail.serviceDetailImgList.map((img, index) =>
                                    (
                                        <img key={index} src={img.serviceDetailImg} />
                                    )
                                    )
                                }
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn my-3 text-white fw-bold p-2 btn-color">Xem chi tiết</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homePageTreatMentResults container mt-5">
                <div className=" text-center">
                    <h2>Trước và sau khi điều trị tại Phòng Khám Da Liễu ABC</h2>
                    <p>
                        <em>
                            * Sự thật trị mụn không hề khó, với HV Clinic, điều khó nhất với da mụn không phải làm sao để hết mụn mà làm sao nâng cấp sức khỏe làn da. Khi da khỏe mọi vấn đề sẽ được giải quyết đơn giản hơn rất nhiều. Tùy vào cơ địa của mỗi người, kết quả sẽ có đôi chút khác biệt
                        </em>
                    </p>
                </div>
                <div>
                    <div className='d-flex justify-content-evenly flex-wrap'>
                        <button type="button" className="btn my-1 text-white fw-bold p-2 btn-color">Điều trị mụn</button>
                        <button type="button" className="btn my-1 text-white fw-bold p-2 btn-color">Điều trị mụn thịt</button>
                        <button type="button" className="btn my-1 text-white fw-bold p-2 btn-color">Điều trị thâm mụn</button>
                        <button type="button" className="btn my-1 text-white fw-bold p-2 btn-color">Điều trị sẹo rỗ</button>
                        <button type="button" className="btn my-1 text-white fw-bold p-2 btn-color">Điều trị nám</button>
                        <button type="button" className="btn my-1 text-white fw-bold p-2 btn-color">Điều trị tàn nhang</button>
                        <button type="button" className="btn my-1 text-white fw-bold p-2 btn-color">Triệt lông</button>
                        <button type="button" className="btn my-1 text-white fw-bold p-2 btn-color">Trẻ hóa da</button>
                    </div>
                    <Slider {...settings} className="mt-2">
                        <div>
                            <img src={ketquacaydnacahoi} />
                        </div>
                        <div>
                            <img src={ketquacaydnacahoi} />
                        </div>
                        <div>
                            <img src={ketquacaydnacahoi} />
                        </div>
                    </Slider>
                </div>
            </div>

            <div className="homePageIntroduce my-5">
                <img className='homePageIntroduceImg' src={denmotlanladep} />
            </div>

            <div className="homePageTreatMentResults container mt-5">
                <div className=" text-center">
                    <h2>Phòng Khám ABC – Địa chỉ làm đẹp uy tín</h2>
                    <p>
                        <em>
                            Phòng Khám Da Liễu HV Clinic cảm thấy vô cùng tự hào khi spa của mình đã nhận được sự tin tưởng của hàng chục nghìn khách hàng khu vực TPHCM và nhiều tỉnh thành lân cận. Thậm chí nhiều bạn không quản ngại đường xá xa xôi, di chuyển từ tận miền Trung, miền Bắc đến điều trị.
                        </em>
                    </p>
                </div>
                <div>
                    <Slider {...settings_2} className="mt-2">
                        <div>
                            <img src={asd} />
                        </div>
                        <div>
                            <img src={asd} />
                        </div>
                        <div>
                            <img src={asd} />
                        </div>
                        <div>
                            <img src={asd} />
                        </div>
                        <div>
                            <img src={asd} />
                        </div>
                        <div>
                            <img src={asd} />
                        </div>
                        <div>
                            <img src={asd} />
                        </div>
                        <div>
                            <img src={asd} />
                        </div>
                        <div>
                            <img src={asd} />
                        </div>
                        <div>
                            <img src={asd} />
                        </div>
                        <div>
                            <img src={asd} />
                        </div>
                        <div>
                            <img src={asd} />
                        </div>
                        <div>
                            <img src={asd} />
                        </div>
                        <div>
                            <img src={asd} />
                        </div>
                        <div>
                            <img src={asd} />
                        </div>
                        <div>
                            <img src={asd} />
                        </div>
                    </Slider>
                </div>
            </div>

        </div>
    );
};
export default HomePage;
