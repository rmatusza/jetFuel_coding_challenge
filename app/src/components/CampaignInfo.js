import React from 'react';
import HorizontalScrollBox from './HorizontalScrollBox';

const CampaignInfo = (props) => {
  return(
    props.data.map(campaign => {
      return(
        <>
          <div className="campaign-info-container">
            <div className="icon-container">
              <img className="icon" src={campaign['campaign_icon_url']} />
            </div>
            <div className="name-and-payment-container">
              <div className="name-container">
                <h4 className="name">
                  {campaign['campaign_name']}
                </h4>
              </div>
              <div className="pay-container">
                <h5 className="pay">
                  {`${campaign['pay_per_install']} per install`}
                </h5>
              </div>
            </div>
          </div>
          <div className="medias-container">
            <HorizontalScrollBox data={campaign} />
          </div>
        </>
      )
    })
  )
}


export default CampaignInfo;
