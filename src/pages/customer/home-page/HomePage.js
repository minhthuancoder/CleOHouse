import React, { useEffect, useState } from 'react';
import "./HomePage.scss"


const HomePage = props => {

    const [serviceList, setServiceList] = useState({
        services:[
            {
                serviceId: 1, 
                serviceTitle: "Điều trị mụn", 
                servicePicture: 'https://hienvanspa.com/wp-content/uploads/2021/06/dich-vu-tri-mun.jpg', 
                serviceDetail:{
                    serviceDescription:`Hơn 50.000 khách hàng trong và ngoài nước, đã điều trị da mụn thành công tại Hiền Vân Spa. Không phân biệt mụn nhẹ hay nặng, chỉ sau 90 phút đầu tiên, cam kết giảm mụn viêm hơn 80%. Bảo hành kết quả điều trị mụn trọn đời không tái phát bằng văn bản.`,
                    serviceDetailPicture:`https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun.jpg`,
                    serviceDetailImgList:[
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun-1.jpg`},
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun-2.jpg`},
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun-3.jpg`},
                    ]
                }
            },
            {
                serviceId: 2, 
                serviceTitle: "Điều trị mụn thịt", 
                servicePicture: 'https://hienvanspa.com/wp-content/uploads/2021/06/dich-vu-tri-mun-thit.jpg', 
                serviceDetail:{
                    serviceDescription:`Hơn 50.000 khách hàng trong và ngoài nước, đã điều trị da mụn thành công tại Hiền Vân Spa. Không phân biệt mụn nhẹ hay nặng, chỉ sau 90 phút đầu tiên, cam kết giảm mụn viêm hơn 80%. Bảo hành kết quả điều trị mụn trọn đời không tái phát bằng văn bản.`,
                    serviceDetailPicture:`https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun-thit.jpg`,
                    serviceDetailImgList:[
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun-thit.jpg`},
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun-thit-2.jpg`},
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun-thit-3.jpg`},
                    ]
                }
            },
            {
                serviceId: 3, 
                serviceTitle: "Điều trị thâm mụn", 
                servicePicture: 'https://hienvanspa.com/wp-content/uploads/2021/06/dich-vu-tri-tham-mun.jpg', 
                serviceDetail:{
                    serviceDescription:`Hơn 50.000 khách hàng trong và ngoài nước, đã điều trị da mụn thành công tại Hiền Vân Spa. Không phân biệt mụn nhẹ hay nặng, chỉ sau 90 phút đầu tiên, cam kết giảm mụn viêm hơn 80%. Bảo hành kết quả điều trị mụn trọn đời không tái phát bằng văn bản.`,
                    serviceDetailPicture:`https://hienvanspa.com/wp-content/uploads/2021/06/model-tham-mun.jpg`,
                    serviceDetailImgList:[
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tri-tham-mun.jpg`},
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tri-tham-mun-2.jpg`},
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tri-tham-mun-3.jpg`},
                    ]
                }
            },
            {
                serviceId: 4, 
                serviceTitle: "Điều trị sẹo rỗ", 
                servicePicture: 'https://hienvanspa.com/wp-content/uploads/2021/06/dich-vu-tri-seo-ro.jpg', 
                serviceDetail:{
                    serviceDescription:`Hơn 50.000 khách hàng trong và ngoài nước, đã điều trị da mụn thành công tại Hiền Vân Spa. Không phân biệt mụn nhẹ hay nặng, chỉ sau 90 phút đầu tiên, cam kết giảm mụn viêm hơn 80%. Bảo hành kết quả điều trị mụn trọn đời không tái phát bằng văn bản.`,
                    serviceDetailPicture:`https://hienvanspa.com/wp-content/uploads/2021/06/tri-seo-ro.jpg`,
                    serviceDetailImgList:[
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tri-seo-ro.jpg`},
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tri-seo-ro-2.jpg`},
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tri-seo-ro-3.jpg`},
                    ]
                }
            },
            {
                serviceId: 5, 
                serviceTitle: "Điều trị nám", 
                servicePicture: 'https://hienvanspa.com/wp-content/uploads/2021/06/dich-vu-tri-nam.jpg', 
                serviceDetail:{
                    serviceDescription:`Hơn 50.000 khách hàng trong và ngoài nước, đã điều trị da mụn thành công tại Hiền Vân Spa. Không phân biệt mụn nhẹ hay nặng, chỉ sau 90 phút đầu tiên, cam kết giảm mụn viêm hơn 80%. Bảo hành kết quả điều trị mụn trọn đời không tái phát bằng văn bản.`,
                    serviceDetailPicture:`https://hienvanspa.com/wp-content/uploads/2021/06/tri-nam.jpg`,
                    serviceDetailImgList:[
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tri-nam.jpg`},
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tri-nam-2.jpg`},
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tri-nam-3.jpg`},
                    ]
                }
            },
            {
                serviceId: 6, 
                serviceTitle: "Triệt lông", 
                servicePicture: 'https://hienvanspa.com/wp-content/uploads/2021/06/dich-vu-triet-long.jpg', 
                serviceDetail:{
                    serviceDescription:`Hơn 50.000 khách hàng trong và ngoài nước, đã điều trị da mụn thành công tại Hiền Vân Spa. Không phân biệt mụn nhẹ hay nặng, chỉ sau 90 phút đầu tiên, cam kết giảm mụn viêm hơn 80%. Bảo hành kết quả điều trị mụn trọn đời không tái phát bằng văn bản.`,
                    serviceDetailPicture:`https://hienvanspa.com/wp-content/uploads/2021/06/triet-long.jpg`,
                    serviceDetailImgList:[
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/triet-long.jpg`},
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/triet-long-2.jpg`},
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/triet-long-3.jpg`},
                    ]
                }
            },
            {
                serviceId: 7, 
                serviceTitle: "Trị tàn nhang", 
                servicePicture: 'https://hienvanspa.com/wp-content/uploads/2021/06/dich-vu-tri-tan-nhang.jpg', 
                serviceDetail:{
                    serviceDescription:`Hơn 50.000 khách hàng trong và ngoài nước, đã điều trị da mụn thành công tại Hiền Vân Spa. Không phân biệt mụn nhẹ hay nặng, chỉ sau 90 phút đầu tiên, cam kết giảm mụn viêm hơn 80%. Bảo hành kết quả điều trị mụn trọn đời không tái phát bằng văn bản.`,
                    serviceDetailPicture:`https://hienvanspa.com/wp-content/uploads/2021/06/tri-tan-nhang.jpg`,
                    serviceDetailImgList:[
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tri-tan-nhang.jpg`},
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tri-tan-nhang-2.jpg`},
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tri-tan-nhang-3.jpg`},
                    ]
                }
            },
            {
                serviceId: 8, 
                serviceTitle: "Trẻ hóa da", 
                servicePicture: 'https://hienvanspa.com/wp-content/uploads/2021/06/dich-vu-tre-hoa-da.jpg', 
                serviceDetail:{
                    serviceDescription:`Hơn 50.000 khách hàng trong và ngoài nước, đã điều trị da mụn thành công tại Hiền Vân Spa. Không phân biệt mụn nhẹ hay nặng, chỉ sau 90 phút đầu tiên, cam kết giảm mụn viêm hơn 80%. Bảo hành kết quả điều trị mụn trọn đời không tái phát bằng văn bản.`,
                    serviceDetailPicture:`https://hienvanspa.com/wp-content/uploads/2021/06/tre-hoa-da.jpg`,
                    serviceDetailImgList:[
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tre-hoa-da.jpg`},
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tre-hoa-da-2.jpg`},
                        { serviceDetailImg: `https://hienvanspa.com/wp-content/uploads/2021/06/tre-hoa-da-3.jpg`},
                    ]
                }
            }, 
        ]
    })
    const [currentService, setCurrentService] = useState(serviceList.services[0])
    const handleChangeServiceDescription = (serviceId = 1)=>{
        //serviceId: 0 ==> 7
        setCurrentService(serviceList.services[serviceId-1])
    }
    useEffect(()=>{
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
                            <img src="https://hienvanspa.com/wp-content/uploads/2022/04/COVER-WEB-THANG-05.png" className="d-block w-100" alt="" />
                        </div>

                        <div className="carousel-item">
                            <img src="https://hienvanspa.com/wp-content/uploads/2022/05/MUNG-KHAI-TRUONG-cover-web1.png" className="d-block w-100" alt="" />
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
                <div class="homePageServiceList">
                    {
                        serviceList.services.map(service => (
                            <div className={`homePageItemService ${currentService.serviceId == service.serviceId ? "homePageItemService-active" : ""}`} data-filer="dieutrimunthit" key={service.serviceId} onClick={()=> handleChangeServiceDescription(service.serviceId)}>
                                <img src={service.servicePicture} />
                                <span>{service.serviceTitle}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="homePageServiceDetail container mt-5">
                    <div class="homePageServiceDetailDesc" data-filter="dieutrimun">
                        <div className="hpgServiceDetailLeft">
                            <img src={currentService.serviceDetail.serviceDetailPicture} /> 
                            {/* <img src="https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun-1.jpg" /> */}
                        </div>
                        <div class="hpgServiceDetailRight">
                            <p className="fs-3 fw-bold text-muted mt-1">{currentService.serviceTitle.toUpperCase()}</p>
                            <div className="content-service">
                                <span>{currentService.serviceDetail.serviceDescription}</span>
                            </div>
                            <div class="hpgServiceDetailRight-imagedetail">
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

            <div className="homePageIntroduceImg my-5">
                <img className='homePageIntroduceImg_responsive' src="https://hienvanspa.com/wp-content/uploads/2021/06/hien-van-spa-den-mot-lan-la-dep.jpg" />
            </div>

        </div>
    );
};
export default HomePage;
