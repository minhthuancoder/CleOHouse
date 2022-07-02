import React from 'react';
import Logo from '../../../assets/Logo/logo.png'
import "./HomePage.scss"
const HomePage = props => {
    return (
        <div className= "homePage">
            <div className='homePageOne'>
                <div className="homePageOneLeft">
                    <h2 className="homePageOne__title">CleO'House</h2>
                    <h1 className="homePageOne__desc fw-bold">Chăm sóc da mụn chuyên nghiệp</h1>
                    <button className="homePageOne__button btn btn-warning fw-bold text-white fs-4 mt-3" type="button">Xem thêm</button>
                </div> 
                <div className="homePageOneRight">
                    <img src={Logo} alt="" className='homePageOne__Img'/>
                </div> 
            </div>
        </div>
    );
};
export default HomePage;
