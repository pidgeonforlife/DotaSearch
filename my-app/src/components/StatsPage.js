import React from 'react';
import './HomePage.css';

function StatsPage() {
    return (
        <div className='Stats'>
            <div className='statsContainer'>
                <div className='nameRankContainer'>
                    <img src='./Haru.png' />
                    <div className='wrapNameRank'>
                        <h3>AverageSkitterFan</h3>
                        <h3>Divine 3</h3>
                    </div>
                    <img src='./Divine3.png' />
                </div>
                <hr />
                <div className='additionalInfoContainer'>
                    <h3>Account ID: </h3>
                    <h3>Last Login: </h3>
                </div>
            </div>
        </div>
    );
}

export default StatsPage;