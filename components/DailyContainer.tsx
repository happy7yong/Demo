// components/DailyContainer.tsx
import React, { useRef } from 'react';
import { View, Animated, PanResponder, Dimensions } from 'react-native';
import { styles } from './DailyContainer-styles'; // styles 파일 import

const { height: screenHeight } = Dimensions.get('window'); // 화면 높이 가져오기

const DailyContainer: React.FC = () => {
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          { dy: pan.y }
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (_, gestureState) => {
        const { moveY, dy } = gestureState;
        let newY = moveY + dy;

        // 화면 상단과 하단의 경계 내에서 드래그 제한
        if (newY < 0) newY = 0;
        if (newY > screenHeight - 200) newY = screenHeight - 200; // 200은 컨테이너의 높이

        Animated.spring(pan, {
          toValue: { x: 0, y: newY },
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[styles.container, { transform: pan.getTranslateTransform() }]}
    >
      {/* Your content goes here */}
      <View style={styles.content}>
        {/* Add your content here */}
      </View>
    </Animated.View>
  );
};

export default DailyContainer;
