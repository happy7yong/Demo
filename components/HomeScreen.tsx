import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { styles } from './HomeScreen-styles'; // styles.ts 파일 import
import { getKoreanTime } from './getKoreanTime'; // getKoreanTime.js 파일의 올바른 경로로 수정

const HomeScreen: React.FC = ({ navigation }) => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  // 현재 시각 반영
  useEffect(() => {
    const updateDateTime = () => {
      const { currentDate: koreaNow } = getKoreanTime();
      const hours = koreaNow.getHours();
      const minutes = koreaNow.getMinutes();
      const formattedTime = `${hours >= 12 ? 'PM' : 'AM'} ${hours % 12 || 12}:${minutes < 10 ? `0${minutes}` : minutes}`;
      const formattedDate = `${koreaNow.getMonth() + 1}/${koreaNow.getDate()}`; // 월/일 형식

      setCurrentTime(formattedTime);
      setCurrentDate(formattedDate);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000); // 1분마다 업데이트

    return () => clearInterval(intervalId); // 컴포넌트가 언마운트될 때 인터벌을 클리어
  }, []);

  return (
    <View style={styles.homeScreenContainer}>
      <Image
        source={require('../assets/png/coBal.png')} // 올바른 상대 경로로 변경
        style={styles.coBalImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>윤애남님은</Text>
        <Text style={styles.subText}>기분이 좋아요</Text>
        <Image
          source={require('../assets/png/voice.png')} // 올바른 상대 경로로 변경
          style={styles.voiceImage}
        />
      </View>
      <Image
        source={require('../assets/png/homealarm.png')} // 올바른 상대 경로로 변경
        style={styles.homeAlarmImage}
      />
      <View style={styles.homeAlarmContainer}>
        <View style={styles.alarm}>
          <View style={styles.newAlarm}></View>
          <Image
            source={require('../assets/png/top-navi.png')} // 올바른 상대 경로로 변경
            style={styles.topNavi}
          />
        </View>
        <View style={styles.alarmTextContainer}>
          <Text style={styles.alarmMainText}>점심드시고</Text>
          <Text style={styles.alarmSubText}>혈압약 안드셨어요!</Text>
        </View>
      </View>
      <View style={styles.dailyContainer}>
        <View style={styles.dailyTextContainer}>
          <Text style={styles.dailyTextTime}>{currentTime}</Text>
          <Text style={styles.dailyTextDate}>{currentDate}</Text>
        </View>
        <View style={styles.inner}>
          <View style={styles.dailyInner}>
            <View style={styles.imageInner}>
              <Image
                source={require('../assets/png/Sunflower-image.png')} // 올바른 상대 경로로 변경
                style={styles.SunFlowerImage}
              />
              <View style={styles.dailyText}>
                <Text style={styles.dailyTextFont}>해바라기를 선물로 받아 봤으면 했어요.</Text>
              </View>
            </View>
            <View style={styles.LikeContainer}>
              <Image
                source={require('../assets/png/favorite.png')} // 올바른 상대 경로로 변경
                style={styles.favoriteHeart}
              />
              <Text>를 눌러보세요!</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
