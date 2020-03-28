import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

const Global = () => {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://covid-193.p.rapidapi.com/statistics?country=All', {
            'method': 'GET',
            'headers': {
                'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                'x-rapidapi-key': 'c3d6f57617mshf51e3d34956c4bdp15121ajsna81b7d225018'
            }
        })
            .then(async response => {
                const res = await response.json();
                setStats(res.response);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    }, []);
    
    if (loading) {
        return (
            <div className='d-flex justify-content-center w-100'>
                <ReactLoading type='spinningBubbles' color='#347B98' height={'10%'} width={'10%'} />
            </div>
        )
    }
    return (
        <div className="row display-flex">
            <div className="col col-12 col-sm-3 mb-3 mb-sm-0">
                <div className="card h-100 bg-tiber">
                    <div className="card-body text-center">
                        <h5 className="card-title">Total Cases</h5>
                        <p className='stat-number'>{stats[0].cases.total}</p>
                    </div>
                </div>
            </div>
            <div className="col col-12 col-sm-3 mb-3 mb-sm-0">
                <div className="card h-100 bg-green">
                    <div className="card-body text-center">
                        <h5 className="card-title">Active Cases</h5>
                        <p className='stat-number'>{stats[0].cases.active}</p>
                    </div>
                </div>
            </div>
            <div className="col col-12 col-sm-3 mb-3 mb-sm-0">
                <div className="card h-100 bg-astral">
                    <div className="card-body text-center">
                        <h5 className="card-title">Recovered Cases</h5>
                        <p className='stat-number'>{stats[0].cases.recovered}</p>
                    </div>
                </div>
            </div>
            <div className="col col-12 col-sm-3">
                <div className="card h-100 bg-red">
                    <div className="card-body text-center">
                        <h5 className="card-title">Total Deaths</h5>
                        <p className='stat-number'>{stats[0].deaths.total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Global;