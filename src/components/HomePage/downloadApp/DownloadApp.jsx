import React from "react";
import rumpApp from "../../../assets/images/rump.png";
import googlePlay from "../../../assets/images/botongoogleplay.png";
import appStore from "../../../assets/images/botonappstore.png";
import "./style.css";
import {BottomWave1, TopWaveDAPP} from "../../../assets/svgIcons";
import Bones from "../../../utils/Bones/Bones";
import {LazyLoadImage} from "react-lazy-load-image-component";

const DownloadApp = () => {
  return (
    <div className='downloadApp_container'>
      <div
        className=''

        style={{
        // position:'absolute',
        // left:0,
        // right:0,
        // bottom:'100%',
        
        }}
      >
        {BottomWave1}
      </div>
      <div className='content'>
        <div className='left'>
          {/* <img loas src="" alt=""/> */}
          <LazyLoadImage src={rumpApp} alt='rump_app' />
        </div>
        <div className='right'>
          <h3 className=''>Descarga nuestra nueva App</h3>
          <h5>Descarga esta aplicación ahora!</h5>
          <div className='stores_images'>
            <div className='googlePlayImage'>
              <LazyLoadImage src={googlePlay} />
            </div>
            <div className='appStoreImage'>
              <LazyLoadImage src={appStore} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
