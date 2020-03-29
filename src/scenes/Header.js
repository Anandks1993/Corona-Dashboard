import React from 'react';

import Icon from '../utils/virusIcon';

const Header = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-chelsea text-white py-3'>
            <div className='d-flex justify-content-center align-items-center w-100'>
                <div className='mr-2'>
                    <Icon />
                </div>
                <h3 className='m-0'>COVID-19 Statistic Updates</h3>
            </div>
        </nav>
    );
};

export default Header;