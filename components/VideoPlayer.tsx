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
        <div id="ifr_69527fcf90b70171e382da44_wrapper" style="margin: 0 auto; width: 100%; max-width: 400px;"> 
          <div style="position: relative; padding: 178.21782178217822% 0 0 0;" id="ifr_69527fcf90b70171e382da44_aspect"> 
            <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_69527fcf90b70171e382da44" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/fd7cffcf-a128-4cf6-8573-7102145d7c17/players/69527fcf90b70171e382da44/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> 
          </div> 
        </div>`
      }} 
    />
  );
};

export default memo(VideoPlayer);