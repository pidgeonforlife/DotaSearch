import React, { useEffect, useState } from "react";
import './HomePage.css';

function StatsPage({ match, history }) {
    const [playerData, setPlayerData] = useState(Object);
    const [loading, setLoading] = useState(0);

    useEffect(() => {
        async function loadData() {
            setLoading(1);
            const res = await "https://api.opendota.com/api/players/"
                .get(`/playerData/${match.params.id}`)
                .catch((e) => alert("No workie!"));

            if (res && res.data) {
                setPlayerData(res.data);
            }
            setLoading(0);
        }
        loadData();
    }, []);

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