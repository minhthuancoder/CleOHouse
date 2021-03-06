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
                serviceTitle: "??i???u tr??? m???n",
                servicePicture: dichvutrimun, //'https://hienvanspa.com/wp-content/uploads/2021/06/dich-vu-tre-hoa-da.jpg'
                serviceDetail: {
                    serviceDescription: `H??n 50.000 kh??ch h??ng trong v?? ngo??i n?????c, ???? ??i???u tr??? da m???n th??nh c??ng t???i Hi???n V??n Spa. Kh??ng ph??n bi???t m???n nh??? hay n???ng, ch??? sau 90 ph??t ?????u ti??n, cam k???t gi???m m???n vi??m h??n 80%. B???o h??nh k???t qu??? ??i???u tr??? m???n tr???n ?????i kh??ng t??i ph??t b???ng v??n b???n.`,
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
                serviceTitle: "??i???u tr??? m???n th???t",
                servicePicture: dichvutrimun,
                serviceDetail: {
                    serviceDescription: `H??n 50.000 kh??ch h??ng trong v?? ngo??i n?????c, ???? ??i???u tr??? da m???n th??nh c??ng t???i Hi???n V??n Spa. Kh??ng ph??n bi???t m???n nh??? hay n???ng, ch??? sau 90 ph??t ?????u ti??n, cam k???t gi???m m???n vi??m h??n 80%. B???o h??nh k???t qu??? ??i???u tr??? m???n tr???n ?????i kh??ng t??i ph??t b???ng v??n b???n.`,
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
                serviceTitle: "??i???u tr??? th??m m???n",
                servicePicture: dichvutrimun,
                serviceDetail: {
                    serviceDescription: `H??n 50.000 kh??ch h??ng trong v?? ngo??i n?????c, ???? ??i???u tr??? da m???n th??nh c??ng t???i Hi???n V??n Spa. Kh??ng ph??n bi???t m???n nh??? hay n???ng, ch??? sau 90 ph??t ?????u ti??n, cam k???t gi???m m???n vi??m h??n 80%. B???o h??nh k???t qu??? ??i???u tr??? m???n tr???n ?????i kh??ng t??i ph??t b???ng v??n b???n.`,
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
                serviceTitle: "??i???u tr??? s???o r???",
                servicePicture: dichvutrimun,
                serviceDetail: {
                    serviceDescription: `H??n 50.000 kh??ch h??ng trong v?? ngo??i n?????c, ???? ??i???u tr??? da m???n th??nh c??ng t???i Hi???n V??n Spa. Kh??ng ph??n bi???t m???n nh??? hay n???ng, ch??? sau 90 ph??t ?????u ti??n, cam k???t gi???m m???n vi??m h??n 80%. B???o h??nh k???t qu??? ??i???u tr??? m???n tr???n ?????i kh??ng t??i ph??t b???ng v??n b???n.`,
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
                serviceTitle: "??i???u tr??? n??m",
                servicePicture: dichvutrimun,
                serviceDetail: {
                    serviceDescription: `H??n 50.000 kh??ch h??ng trong v?? ngo??i n?????c, ???? ??i???u tr??? da m???n th??nh c??ng t???i Hi???n V??n Spa. Kh??ng ph??n bi???t m???n nh??? hay n???ng, ch??? sau 90 ph??t ?????u ti??n, cam k???t gi???m m???n vi??m h??n 80%. B???o h??nh k???t qu??? ??i???u tr??? m???n tr???n ?????i kh??ng t??i ph??t b???ng v??n b???n.`,
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
                serviceTitle: "Tri???t l??ng",
                servicePicture: dichvutrimun,
                serviceDetail: {
                    serviceDescription: `H??n 50.000 kh??ch h??ng trong v?? ngo??i n?????c, ???? ??i???u tr??? da m???n th??nh c??ng t???i Hi???n V??n Spa. Kh??ng ph??n bi???t m???n nh??? hay n???ng, ch??? sau 90 ph??t ?????u ti??n, cam k???t gi???m m???n vi??m h??n 80%. B???o h??nh k???t qu??? ??i???u tr??? m???n tr???n ?????i kh??ng t??i ph??t b???ng v??n b???n.`,
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
                serviceTitle: "Tr??? t??n nhang",
                servicePicture: dichvutrimun,
                serviceDetail: {
                    serviceDescription: `H??n 50.000 kh??ch h??ng trong v?? ngo??i n?????c, ???? ??i???u tr??? da m???n th??nh c??ng t???i Hi???n V??n Spa. Kh??ng ph??n bi???t m???n nh??? hay n???ng, ch??? sau 90 ph??t ?????u ti??n, cam k???t gi???m m???n vi??m h??n 80%. B???o h??nh k???t qu??? ??i???u tr??? m???n tr???n ?????i kh??ng t??i ph??t b???ng v??n b???n.`,
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
                serviceTitle: "Tr??? h??a da",
                servicePicture: dichvutrimun,
                serviceDetail: {
                    serviceDescription: `H??n 50.000 kh??ch h??ng trong v?? ngo??i n?????c, ???? ??i???u tr??? da m???n th??nh c??ng t???i Hi???n V??n Spa. Kh??ng ph??n bi???t m???n nh??? hay n???ng, ch??? sau 90 ph??t ?????u ti??n, cam k???t gi???m m???n vi??m h??n 80%. B???o h??nh k???t qu??? ??i???u tr??? m???n tr???n ?????i kh??ng t??i ph??t b???ng v??n b???n.`,
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
                <p className="fs-2 fw-bold text-muted text-center py-3">D???CH V??? N???I B???C</p>
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
                                <button type="button" className="btn my-3 text-white fw-bold p-2 btn-color">Xem chi ti???t</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homePageTreatMentResults container mt-5">
                <div className=" text-center">
                    <h2>Tr?????c v?? sau khi ??i???u tr??? t???i Ph??ng Kh??m Da Li???u ABC</h2>
                    <p>
                        <em>
                            * S??? th???t tr??? m???n kh??ng h??? kh??, v???i HV Clinic, ??i???u kh?? nh???t v???i da m???n kh??ng ph???i l??m sao ????? h???t m???n m?? l??m sao n??ng c???p s???c kh???e l??n da. Khi da kh???e m???i v???n ????? s??? ???????c gi???i quy???t ????n gi???n h??n r???t nhi???u. T??y v??o c?? ?????a c???a m???i ng?????i, k???t qu??? s??? c?? ????i ch??t kh??c bi???t
                        </em>
                    </p>
                </div>
                <div>
                    <div className='d-flex justify-content-evenly flex-wrap'>
                        <button type="button" className="btn my-1 text-white fw-bold p-2 btn-color">??i???u tr??? m???n</button>
                        <button type="button" className="btn my-1 text-white fw-bold p-2 btn-color">??i???u tr??? m???n th???t</button>
                        <button type="button" className="btn my-1 text-white fw-bold p-2 btn-color">??i???u tr??? th??m m???n</button>
                        <button type="button" className="btn my-1 text-white fw-bold p-2 btn-color">??i???u tr??? s???o r???</button>
                        <button type="button" className="btn my-1 text-white fw-bold p-2 btn-color">??i???u tr??? n??m</button>
                        <button type="button" className="btn my-1 text-white fw-bold p-2 btn-color">??i???u tr??? t??n nhang</button>
                        <button type="button" className="btn my-1 text-white fw-bold p-2 btn-color">Tri???t l??ng</button>
                        <button type="button" className="btn my-1 text-white fw-bold p-2 btn-color">Tr??? h??a da</button>
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
                    <h2>Ph??ng Kh??m ABC ??? ?????a ch??? l??m ?????p uy t??n</h2>
                    <p>
                        <em>
                            Ph??ng Kh??m Da Li???u HV Clinic c???m th???y v?? c??ng t??? h??o khi spa c???a m??nh ???? nh???n ???????c s??? tin t?????ng c???a h??ng ch???c ngh??n kh??ch h??ng khu v???c TPHCM v?? nhi???u t???nh th??nh l??n c???n. Th???m ch?? nhi???u b???n kh??ng qu???n ng???i ???????ng x?? xa x??i, di chuy???n t??? t???n mi???n Trung, mi???n B???c ?????n ??i???u tr???.
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
