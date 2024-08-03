import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import DailyScreen from './components/DailyScreen';
import ScheduleScreen from './components/Schedule/ScheduleScreen';
import TargetScreen from './components/TargetScreen';

import { styles } from './components/styles';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator for Daily Screen and Target Screen
const DailyStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Daily" component={DailyScreen} />
      <Stack.Screen name="Target" component={TargetScreen} />
    </Stack.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="홈" // 기본적으로 '홈' 화면을 보여줍니다.
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconSource;

            switch (route.name) {
              case '홈':
                iconSource = require('./assets/png/home.png');
                break;
              case '일상':
                iconSource = require('./assets/png/alert.png');
                break;
              case '일정':
                iconSource = require('./assets/png/daily.png');
                break;
              default:
                iconSource = require('./assets/png/default.png');
                break;
            }

            return (
              <Image
                source={iconSource}
                style={[
                  styles.tabBarIconStyle,
                  { tintColor: color, width: 30, resizeMode: 'contain' },
                ]}
              />
            );
          },
          tabBarStyle: {
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
            borderTopWidth:1,
            borderColor: '#DEDEDE',
            borderWidth: 1,
            height: 100,
            elevation: 0,
            paddingRight: 40,
            paddingLeft: 40,
          },
          tabBarLabelStyle: {
            fontSize: 15,
          },
          tabBarItemStyle: {
            padding: 24,
          },
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="일상" component={DailyStack} />
        <Tab.Screen name="홈" component={HomeScreen} />
        <Tab.Screen name="일정" component={ScheduleScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
