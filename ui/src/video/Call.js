import React, {useState} from 'react';
import AgoraUIKit from 'agora-react-uikit';

function VideoCall() {
    const [videoCall, setVideoCall] = useState(true);
    const rtcProps = {
        appId: "b4f9c74a159343f3bc503363c76c98c5",
        channel: 'AParlament_1',
        token: "007eJxTYMj8mbXtRdmmMy9r1dbLRU8P8zOLi7H/WrjOQeZm/S2zOBYFhiSTNMtkc5NEQ1NLYxPjNOOkZFMDY2Mz42Rzs2RLi2TTxa8VUxoCGRnWvGZgZWSAQBCfh8ExILEoJzE3Na8k3pCBAQB0zSI6"
    };
    const callbacks = {
        EndCall: () => setVideoCall(false),
    };
    return videoCall ? (
        <div style={{display: 'flex', width: '100vw', height: '100vh'}}>
            <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks}/>
        </div>
    ) : (
        <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
    );
}

export default VideoCall