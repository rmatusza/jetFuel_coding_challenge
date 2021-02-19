import React, { useState } from 'react';
import { BsPlayFill } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import {CopyToClipboard} from 'react-copy-to-clipboard';



const HorizontalScrollBox = (props) => {

  const [confirmCopy, setConfirmCopy] = useState('confirmation-false')

  const preview = (e, el) => {
    console.log(el)
    window.open(el['download_url'], "_system")

  }

  const copyConfirmation = () => {
    setConfirmCopy('confirmation-true')
    setTimeout(function(){ setConfirmCopy('confirmation-false'); }, 3000);
  }

  return (
    <>
    <div className={confirmCopy}>
      <h3>
        Copy Successful
      </h3>
    </div>
    {props.data['medias'].map((el, i) => {
      if(el['media_type'] === 'video') {
        return(
          <>

            <div className="container">
              <div className="item">
                <img src={el.cover_photo_url} className="image"/>
                <div className="preview-button-container">
                  <BsPlayFill className="preview-button" onClick={(e)=> preview(e, el)}/>
                </div>
              </div>
              <div className="media-interactions-container">
                <div className='link-container' onClick={() => copyConfirmation()}>
                  <CopyToClipboard text={el['tracking_link']}>
                    <BiLink/>
                  </CopyToClipboard>
                </div>
                <div className="download-container">
                 <HiDownload />
                </div>
              </div>
            </div>
          </>
        )
      } else {
        return(
          <>
            <div className="container">
              <div className="item">
                <img src={el.cover_photo_url} />
              </div>
              <div className="media-interactions-container">
                <div className="link-container">
                  <CopyToClipboard text={el['tracking_link']}>
                    <BiLink/>
                  </CopyToClipboard>
                </div>
                <div className="download-container">
                  <HiDownload />
                </div>
              </div>
            </div>
          </>
        )
      }
    })
  }
    </>
  )
}


export default HorizontalScrollBox;
