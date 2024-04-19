import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
  const { roomId } = useParams();
  const myMeetingRef = useRef(null);

  // Define a function to generate a random user name
  const generateRandomUserName = () => {
    const firstName = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    const lastName = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    return `${firstName}.${lastName}`;
  };

  useEffect(() => {
    const userName = generateRandomUserName();
    const appID = 1585242800;
    const serverSecret = "6e0f90a8ce2898fd3b9361bbc890f471";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), userName);

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: myMeetingRef.current,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });

    // Add event listener for onDisconnect event

  }, [roomId]);

  const meetingDivStyle = {
    width: '100%',
    height: '100vh',
  };

  return (
    <div style={meetingDivStyle} ref={myMeetingRef} />
  );
};

export default Room;