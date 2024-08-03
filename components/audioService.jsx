import { Platform, PermissionsAndroid } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import RNFS from 'react-native-fs';


const audioRecorderPlayer = new AudioRecorderPlayer();

export const requestPermissions = async () => {
  try {
    const grantedAudio = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: 'Microphone Permission',
        message: 'This app needs access to your microphone',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );

    const grantedStorage = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Storage Permission',
        message: 'This app needs access to your storage',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );

    if (grantedAudio === PermissionsAndroid.RESULTS.GRANTED && grantedStorage === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Microphone and storage permissions granted');
    } else {
      console.log('Microphone or storage permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const startRecording = async (setRecordingPath, setIsRecording, setRecordingDuration) => {
  const path = Platform.select({
    ios: 'audioRecording.aac',
    android: `${RNFS.ExternalDirectoryPath}/audioRecording.aac`, // Using external directory path for Android
  });

  if (Platform.OS === 'android') {
    const dirPath = RNFS.ExternalDirectoryPath;
    try {
      const dirExists = await RNFS.exists(dirPath);
      if (!dirExists) {
        await RNFS.mkdir(dirPath);
      }
    } catch (error) {
      console.error('Directory check/create failed:', error);
    }
  }

  try {
    await audioRecorderPlayer.startRecorder(path);
    audioRecorderPlayer.addRecordBackListener((e) => {
      setRecordingDuration(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition / 1000)));
      return;
    });
    setRecordingPath(path);
    setIsRecording(true);
  } catch (error) {
    console.error('Failed to start recording:', error);
  }
};

export const stopRecording = async (setIsRecording) => {
  try {
    const result = await audioRecorderPlayer.stopRecorder();
    setIsRecording(false);
    console.log('Recording stopped and saved at:', result);
    return result;
  } catch (error) {
    console.error('Failed to stop recording:', error);
  }
};
