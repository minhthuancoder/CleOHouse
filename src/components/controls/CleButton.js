/**
 * @author: MinhThuanCoder
 * @date: 2022-06-12
 *
 * All rights reserved ©CleOHouse Inc. 2022
 */

 import React from 'react';
 import PropTypes from 'prop-types';

const CleButton = (props)=>{

    const {children, href, className, onClick, ...rest} = props
    let CompButton = 'button';
    const otherProps = {...rest}

    if(className){
        otherProps.className = className;
    }
    if(href){
        otherProps.href = href;
        CompButton = 'a';
    }
    if(onClick){
        otherProps.onClick = onClick;
    }
    return (
        <CompButton type="button" className="text-white d-flex align-items-center" {...otherProps}>
            {children}
        </CompButton>
    )
}

CleButton.propTypes = {
    children: PropTypes.any,
    href: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
};
export default CleButton;