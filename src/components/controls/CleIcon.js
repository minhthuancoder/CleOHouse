/**
 * @author: MinhThuanCoder
 * @date: 2022-06-12
 *
 * All rights reserved ┬ęCleOHouse Inc. 2022
 */

 import React from 'react';
 import PropTypes from 'prop-types';

const cleIcon = ({className, ...rest})=>{

    const otherProps = {...rest}
    
    if(className){
        otherProps.className = className;
    }
    return (
        <>
            <i {...otherProps}></i>&nbsp;
        </>
    )
}
cleIcon.propTypes = {
	className: PropTypes.string,
};
export default cleIcon;