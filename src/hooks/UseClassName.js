/**
 * @author: MinhThuanCoder
 * @date: 2022-06-12
 *
 * All rights reserved ┬ęCleOHouse Inc. 2022
 */
 const useClassName = () => {

    return {
        /**
         * @param {string} name
        **/
        addClassName : (...name) => {
            return [...name].join(' ');
        },
    }
}
export default useClassName;