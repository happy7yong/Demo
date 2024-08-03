import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Platform } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { requestPermissions, startRecording, stopRecording } from './audioService';
import { styles } from './voice-styles';

const audioRecorderPlayer = new AudioRecorderPlayer();

const Voice: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recordingPath, setRecordingPath] = useState('');
  const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 표시 상태 추가

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestPermissions(); // 권한 요청
    }

    // Clean up function to remove playback listener when component unmounts
    return () => {
      audioRecorderPlayer.removePlayBackListener();
    };
  }, []);

  const handleVoiceButtonPress = async () => {
    if (isPlaying) {
      await audioRecorderPlayer.stopPlayer();
      setIsPlaying(false);
      setIsImageVisible(false); // 재생 중지 시 voiceOn 버튼을 숨깁니다.
    } else if (isRecording) {
      const result = await stopRecording(setIsRecording);
      setRecordingPath(result);
      setIsImageVisible(false); // 녹음이 완료되면 voiceOn 버튼을 숨깁니다.
    } else {
      await startRecording(setRecordingPath, setIsRecording, () => {});
      setIsImageVisible(true); // 녹음을 시작하면 voiceOn 버튼을 표시합니다.
    }
  };

  const handlePlayButtonPress = async () => {
    if (isPlaying) {
      await audioRecorderPlayer.stopPlayer();
      setIsPlaying(false);
      setIsImageVisible(false); // 재생 중지 시 voiceOn 버튼을 숨깁니다.
    } else {
      await audioRecorderPlayer.startPlayer(recordingPath);
      audioRecorderPlayer.addPlayBackListener((e) => {
        // 예를 들어, 재생 위치에 대한 처리
        return;
      });
      setIsPlaying(true);
      setIsImageVisible(true); // 재생 시작 시 voiceOn 버튼을 표시합니다.
    }
  };

  return (
    <View style={styles.homeScreenContainer}>
      <TouchableOpacity style={styles.voiceIcon} onPress={handleVoiceButtonPress}>
        <Image
          source={require('../assets/png/voice.png')} // 녹음 버튼 이미지
          style={styles.voiceImage}
        />
      </TouchableOpacity>
      {isImageVisible && (
        <TouchableOpacity style={styles.voiceOnIcon} onPress={handlePlayButtonPress}>
          <Image
            source={require('../assets/png/voiceOn.png')} // 여기에 표시할 이미지 경로
            style={styles.voiceOnImage}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Voice;
