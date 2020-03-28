import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import LoadingOverlay from 'react-loading-overlay';

const Country = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [country, setCountry] = useState('India');
    const [stats, setStats] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        Promise.all([
            fetch('https://covid-193.p.rapidapi.com/countries', {
                'method': 'GET',
                'headers': {
                    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                    'x-rapidapi-key': 'c3d6f57617mshf51e3d34956c4bdp15121ajsna81b7d225018'
                }
            }),
            fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, {
                'method': 'GET',
                'headers': {
                    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                    'x-rapidapi-key': 'c3d6f57617mshf51e3d34956c4bdp15121ajsna81b7d225018'
                }
            })
        ]).then(async ([allCountires, data]) => {
            const countries = await allCountires.json();
            const stats = await data.json();
            setCountries(countries.response);
            setStats(stats.response);
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            console.log(err);
        });
    }, [])

    const handleCountryChange = e => {
        setIsLoading(true);
        setCountry(e.target.value);
        fetch(`https://covid-193.p.rapidapi.com/statistics?country=${e.target.value}`, {
            'method': 'GET',
            'headers': {
                'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                'x-rapidapi-key': 'c3d6f57617mshf51e3d34956c4bdp15121ajsna81b7d225018'
            }
        }).then(async data => {
            const stats = await data.json();
            setStats(stats.response);
            setIsLoading(false);
        }).catch(err => {
            setIsLoading(false);
            console.log(err);
        });
    }

    const renderSelectBox = () => {
        if (countries.length !== 0) {
            
            return (
                <select className='country-select' value={country} onChange={handleCountryChange}>
                    {countries.map(country => <option key={country} value={country}>{country}</option>)}
                </select>
            )
        }

        return null;
    }

    if (loading) {
        return (
            <div className='d-flex justify-content-center w-100'>
                <ReactLoading type='spinningBubbles' color='#347B98' height={'10%'} width={'10%'} />
            </div>
        )
    }

    return (
        <LoadingOverlay
            spinner
            active={isLoading}
            text='Please wait...'
        >
            <div className='row display-flex'>
                <div className='col-12 mb-2'>
                    <div className='d-flex justify-content-center w-100 m-2'>
                        {renderSelectBox()}
                    </div>
                </div>
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
        </LoadingOverlay>
    );
};

export default Country;