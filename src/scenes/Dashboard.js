import React from 'react';

import Global from './Global';
import Country from './Country';
import History from './History';

const Dashboard = () => {
    return (
        <div className='container my-2'>
            <div className='row mb-3'>
                <div className='col-12'>
                    <h3 className='text-center'>History</h3>
                </div>
                <div className='col-12'>
                    <History />
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col-12 mb-2'>
                    <h3 className='text-center'>Global Stats</h3>
                </div>
                <div className='col-12'>
                    <Global />
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col-12 mb-2'>
                    <h3 className='text-center'>Country Wise Stats</h3>
                </div>
                <div className='col-12'>
                    <Country />
                </div>
            </div>
        </div>
    )
};

export default Dashboard;