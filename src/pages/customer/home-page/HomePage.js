import React from 'react';
import Logo from '../../../assets/Logo/logo.png'
import "./HomePage.scss"
const HomePage = props => {
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
                    <div class="homePageItemService homePageItemService-active" data-filer="dieutrimun">
                        <img src="https://hienvanspa.com/wp-content/uploads/2021/06/dich-vu-tri-mun.jpg"/>
                        <span>Điều trị mụn</span>
                    </div>
                    <div class="homePageItemService" data-filer="dieutrimunthit">
                        <img src="https://hienvanspa.com/wp-content/uploads/2021/06/dich-vu-tri-mun-thit.jpg"/>
                        <span>Điều trị mụn thịt</span>
                    </div>
                    <div class="homePageItemService" data-filer="dieutrithammun">
                        <img src="https://hienvanspa.com/wp-content/uploads/2021/06/dich-vu-tri-tham-mun.jpg"/>
                        <span>Điều trị thâm mụn</span>
                    </div>
                    <div class="homePageItemService" data-filer="dieutriseoro">
                        <img src="https://hienvanspa.com/wp-content/uploads/2021/06/dich-vu-tri-seo-ro.jpg"/>
                        <span>Điều trị sẹo rỗ</span>
                    </div>
                    <div class="homePageItemService" data-filer="dieutrinam">
                        <img src="https://hienvanspa.com/wp-content/uploads/2021/06/dich-vu-tri-nam.jpg"/>
                        <span>Điều trị nám</span>
                    </div>
                    <div class="homePageItemService" data-filer="trietlong">
                        <img src="https://hienvanspa.com/wp-content/uploads/2021/06/dich-vu-triet-long.jpg"/>
                        <span>Triệt lông</span>
                    </div>
                    <div class="homePageItemService" data-filer="tritannhang">
                        <img src="https://hienvanspa.com/wp-content/uploads/2021/06/dich-vu-tri-tan-nhang.jpg"/>
                        <span>Trị tàn nhang</span>
                    </div>
                    <div class="homePageItemService" data-filer="trehoada">
                        <img src="https://hienvanspa.com/wp-content/uploads/2021/06/dich-vu-tre-hoa-da.jpg"/>
                        <span>Trẻ hóa da</span>
                    </div>
                </div>
                <div className="homePageServiceDetail container mt-5">
                    <div class="homePageServiceDetailDesc" data-filter="dieutrimun">
                        <div class="hpgServiceDetailLeft">
                            <img src="https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun.jpg"/>
                        </div>
                        <div class="hpgServiceDetailRight">
                            <p className="fs-3 fw-bold text-muted mt-1">ĐIỀU TRỊ MỤN</p>
                            <div class="content-service">
                                <span>Hơn 50.000 khách hàng trong và ngoài nước, đã điều trị da mụn thành công tại Hiền Vân Spa. Không phân biệt mụn nhẹ hay nặng, chỉ sau 90 phút đầu tiên, cam kết giảm mụn viêm hơn 80%. Bảo hành kết quả điều trị mụn trọn đời không tái phát bằng văn bản.</span>
                            </div>
                            <div class="hpgServiceDetailRight-imagedetail">
                                <img src="https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun-1.jpg"/>
                                <img src="https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun-2.jpg"/>
                                <img src="https://hienvanspa.com/wp-content/uploads/2021/06/tri-mun-3.jpg"/>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn my-3 text-white fw-bold p-2 btn-color">Xem chi tiết</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomePage;
