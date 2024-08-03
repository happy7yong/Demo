// DayCell.tsx

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './ScheduleScreen-styles';

interface DayCellProps {
  day: number;
  weekDay: string;
  isCurrentDay: boolean;
  onPress: () => void;
}

const DayCell: React.FC<DayCellProps> = ({ day, weekDay, isCurrentDay, onPress }) => {
  return (
    <View style={styles.dayCell}>
      {isCurrentDay ? (
        <LinearGradient colors={['#FFAF36', '#FF8A00']} style={styles.gradient}>
          <Text style={styles.dayText}>{day}</Text>
          <Text style={styles.weekDayText}>{weekDay}</Text>
        </LinearGradient>
      ) : (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.dayCellContent}>
            <Text style={styles.dayText}>{day}</Text>
            <Text style={styles.weekDayText}>{weekDay}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default DayCell;
