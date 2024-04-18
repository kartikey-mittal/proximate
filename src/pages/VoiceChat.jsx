import React, { useState, useEffect } from 'react';

const VoiceChat = () => {
  const apiKey = '6e7757f8-0807-4ab5-bd16-fed790fa69fc'; // Replace with your VideoSDK.live API key
  const roomId = 'kartik'; // Replace with a desired room ID
  const [joined, setJoined] = useState(false);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false); // Local audio state

  useEffect(() => {
    // Handle joining the voice chat room using VideoSDK.live API
    const joinRoom = async () => {
      try {
        const response = await fetch('https://api.videosdk.live/join', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            room: roomId
          })
        });
        const data = await response.json();
        if (data.success) {
          setJoined(true);
          console.log('Successfully joined room');
        } else {
          console.error('Error joining room:', data.error);
        }
      } catch (error) {
        console.error('Error joining room (fetch):', error);
      }
    };

    if (apiKey && roomId) {
      joinRoom();
    }
  }, [apiKey, roomId]); // Re-run effect when API key or room ID changes

  const toggleAudio = async () => {
    if (joined && !isAudioEnabled) {
      try {
        // Replace with the specific API call from VideoSDK.live documentation to enable audio
        const response = await fetch('https://api.videosdk.live/audio/start', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            room: roomId
          })
        });
        const data = await response.json();
        if (data.success) {
          setIsAudioEnabled(true);
          console.log('Local audio enabled');
        } else {
          console.error('Error enabling local audio:', data.error);
        }
      } catch (error) {
        console.error('Error enabling local audio (fetch):', error);
      }
    } else if (joined && isAudioEnabled) {
      try {
        // Replace with the specific API call from VideoSDK.live documentation to disable audio
        const response = await fetch('https://api.videosdk.live/audio/stop', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            room: roomId
          })
        });
        const data = await response.json();
        if (data.success) {
          setIsAudioEnabled(false);
          console.log('Local audio disabled');
        } else {
          console.error('Error disabling local audio:', data.error);
        }
      } catch (error) {
        console.error('Error disabling local audio (fetch):', error);
      }
    }
  };

  // Handle leaving the voice chat room (implementation depends on VideoSDK.live API)

  return (
    <div>
      {!joined ? (
        <p>Connecting...</p>
      ) : (
        <div>
          <button onClick={toggleAudio}>
            {isAudioEnabled ? 'Mute Audio' : 'Enable Audio'}
          </button>
          {/* UI for leaving the voice chat room (implement based on VideoSDK.live API) */}
        </div>
      )}
    </div>

  )
};

export default VoiceChat;