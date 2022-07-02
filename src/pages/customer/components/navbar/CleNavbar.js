/**
 * @author: MinhThuanCoder
 * @date: 2022-06-12
 *
 * All rights reserved ©CleOHouse Inc. 2022
 */
import React from 'react';
import useClassName from '../../../../hooks/UseClassName'
import "./CleNavbar.scss"
function CleNavbar(props) {

    const { addClassName } = useClassName()
    const className_NavLink = ["nav-link", "text-white", "fw-bold"]
    const className_DropdownMenu = ["dropdown-item", "fw-bold", "text-secondary"]
    const ariaCurrent = {"aria-current":"page"};

    return (
        <nav className="sticky navbar navbar-expand-lg navbar-light " style={{backgroundColor: "#04B486"}}>
            <div className="container">
                <span className="navbar-brand text-white fw-bold fs-4">CLEO'HOUSE</span>
                <button className="navbar-toggler bg-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <span className={addClassName(...className_NavLink)} {...ariaCurrent}>Trang chủ</span>
                        <span className={addClassName(...className_NavLink)} {...ariaCurrent}>Giới thiệu</span>
                        <span className={addClassName(...className_NavLink)} {...ariaCurrent}>Gói dịch vụ</span>
                        <span className={addClassName(...className_NavLink)} {...ariaCurrent}>Bảng giá dịch vụ</span>
                        <span className={addClassName(...className_NavLink)} {...ariaCurrent}>Hiệu quả</span>
                        <span className="nav-item dropdown">
                            <span className={addClassName(...className_NavLink, "dropdown-toggle")} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Kiến thức
                            </span>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><span className={addClassName(...className_DropdownMenu)}>Trị mụn</span></li>
                                <li><span className={addClassName(...className_DropdownMenu)}>Chăm sóc da</span></li>
                                <li><span className={addClassName(...className_DropdownMenu)}>Trị sẹo</span></li>
                            </ul>
                        </span>
                        <span className={addClassName(...className_NavLink)} {...ariaCurrent}>Liên hệ</span>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default CleNavbar;