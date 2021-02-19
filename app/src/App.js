import React, { useState, useEffect } from 'react';
import './App.css';
import CampaignInfo from './components/CampaignInfo';

function App() {
  const [campaignInfo, setCampaignInfo] = useState([])
  useEffect(() => {
    (async () => {
      const res = await fetch('https://www.plugco.in/public/take_home_sample_feed', {
      })
      const data = await res.json()
      setCampaignInfo(data.campaigns)
    })()
  }, [])
  return (
    <>
      <CampaignInfo data={campaignInfo}/>
    </>
  );
}

export default App;
