import React, { useEffect, useState } from 'react';
import { Button, Text, View, NativeEventEmitter, NativeModules, StyleSheet } from 'react-native';

// React Native와 연결된 Native Module
const { SpeechRecognition } = NativeModules;
const speechRecognitionEvents = new NativeEventEmitter(SpeechRecognition);

const SpeechRecognitionComponent: React.FC = () => {
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    const eventListener = speechRecognitionEvents.addListener('SpeechRecognitionResult', (spokenText: string) => {
      setResult(spokenText);
    });

    return () => {
      eventListener.remove();
    };
  }, []);

  const startVoiceInput = () => {
    SpeechRecognition.startVoiceInput(); // Native Module의 메서드 호출
  };

  return (
    <View style={styles.container}>
      <Button title="음성 인식 시작" onPress={startVoiceInput} />
      {result ? <Text style={styles.resultText}>음성 인식 결과: {result}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default SpeechRecognitionComponent;
