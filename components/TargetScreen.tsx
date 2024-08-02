import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { styles } from './TargetScreen-styles';
import { BlurView } from '@react-native-community/blur';

const { width } = Dimensions.get('window');
const { width: screenWidth } = Dimensions.get('window');

const images = [
  require('../assets/png/dailyimage1.png'),
  require('../assets/png/dailyimage2.png'),
  require('../assets/png/dailyimage3.png'),
];

const TargetScreen: React.FC = () => {
  const navigation = useNavigation();
  const widthAnim = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<Animated.FlatList>(null);
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useFocusEffect(
    React.useCallback(() => {
      const parentNavigator = navigation.getParent();
      if (parentNavigator) {
        parentNavigator.setOptions({
          tabBarStyle: { display: 'none' }
        });

        return () => {
          parentNavigator.setOptions({
            tabBarStyle: {
              display: 'flex',
              borderTopLeftRadius: 35,
              borderTopRightRadius: 35,
              borderColor: '#DEDEDE',
              borderWidth: 1,
              height: 100,
              elevation: 0,
              paddingRight: 40,
              paddingLeft: 40,
            }
          });
        };
      }
    }, [navigation])
  );

  useEffect(() => {
    let currentIndex = 0;
    const numberOfImages = images.length;
    const imageSwitchInterval = 5000; // 5 seconds
    const totalDuration = imageSwitchInterval * numberOfImages; // Total duration
    const progressBarWidth = screenWidth * 0.95;

    const animateProgressBar = () => {
      widthAnim.setValue(0);
      Animated.timing(widthAnim, {
        toValue: progressBarWidth,
        duration: imageSwitchInterval,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    };

    const switchImage = (index: number) => {
      if (index >= numberOfImages) {
        return; // End of images
      }

      animateProgressBar();

      scrollRef.current?.scrollToOffset({
        offset: index * width,
        animated: true,
      });

      // Move to the next image after the current animation duration
      setTimeout(() => switchImage(index + 1), imageSwitchInterval);
    };

    switchImage(currentIndex);

    // Navigate to '일상' tab after the total animation duration
    const timeoutId = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: '일상' }],
      });
    }, totalDuration);

    return () => {
      widthAnim.stopAnimation();
      clearTimeout(timeoutId);
    };
  }, [navigation, widthAnim]);

  const handleTouch = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: '일상' }],
    });
  };

  const handleSend = () => {
    console.log('Input Value:', inputValue);
    // You can also do other actions with the inputValue here
  };

  const handleVoice = () => {
    console.log('음성을 보낼까요?');
  };

  const handleLike = () =>{
    console.log('좋아요를 누르시겠습니까?');
    };

  const handleSchedule = () =>{
    console.log('스케줄을 확인합니다.');
  };


  return (
    <TouchableWithoutFeedback onPress={handleTouch}>
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.progressBarContainer}>
          <Animated.View
            style={[
              styles.progressBar,
              {
                width: widthAnim,
              },
            ]}
          />
        </View>
        <Animated.FlatList
          ref={scrollRef}
          data={images}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={item} style={styles.image} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.whiteBoxContainer}>
           {!isFocused && !inputValue ? (
              <Text style={styles.placeholderText}>윤애남님에게{"\n"}답장을 남겨보세요</Text>
           ) : null}
          <TextInput
                    style={styles.textInput}
                    value={inputValue}
                    onChangeText={(text: string) => setInputValue(text)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
          <View style={styles.BtnContainer}>
              <TouchableOpacity style={styles.customButton} onPress={handleSend}>
                    <Image
                        source={require('../assets/png/sendIcon.png')} // 올바른 상대 경로로 변경
                        style={styles.sendIcons}
                     />
              </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.sendOption}>
                  <TouchableOpacity style={styles.LikeBtn} onPress={handleLike}>
                              <Image
                                  source={require('../assets/png/favorite_Line.png')} // 올바른 상대 경로로 변경
                                  style={styles.Icons}
                               />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.VoiceBtn} onPress={handleVoice}>
                                                <Image
                                                    source={require('../assets/png/recorder.png')} // 올바른 상대 경로로 변경
                                                    style={styles.Icons}
                                                 />
                                    </TouchableOpacity>
      </View>
        <TouchableOpacity style={styles.thisSchedule} onPress={handleSchedule}>
            <View style={styles.thisScheduleContainer}>
                    <View style={styles.blur}>
                       <BlurView
                              style={styles.blurView}
                              blurType="light"
                              blurAmount={10}
                              reducedTransparencyFallbackColor="rgba(246, 246, 246, 0.5)"
                        />
                    </View>
                    <View style={styles.textInner}>
                      <Text style={styles.textTime}>10:00~11:00</Text>
                      <Text style={styles.textContent}>박막례 할머니와 고구마밭 데이트</Text>
                    </View>
             </View>
        </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
  );
};



export default TargetScreen;
