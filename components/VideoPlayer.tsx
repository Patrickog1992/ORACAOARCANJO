import React, { useEffect, memo } from 'react';

const VideoPlayer: React.FC = () => {
  useEffect(() => {
    // SDK Script for the new player
    const scriptId = 'vturb-sdk-script';
    
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <div 
      dangerouslySetInnerHTML={{ 
        __html: `
        <div id="ifr_6970db1ae1aa589ccc50298e_wrapper" style="margin: 0 auto; width: 100%; max-width: 400px;"> 
          <div style="position: relative; padding: 178.21782178217822% 0 0 0;" id="ifr_6970db1ae1aa589ccc50298e_aspect"> 
            <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_6970db1ae1aa589ccc50298e" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/66f7b845-c900-4cf3-b6f2-f848ebd65e7f/players/6970db1ae1aa589ccc50298e/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> 
          </div> 
        </div>`
      }} 
    />
  );
};

export default memo(VideoPlayer);