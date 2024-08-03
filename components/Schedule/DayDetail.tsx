import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './DayDetail-styles';

interface Appointment {
  text: string;
  time: number; // 시작 시간
  lastHour: number; // 종료 시간
}

interface DayDetailProps {
  day: number;
  appointments: Appointment[];
  onAddAppointment: (newAppointment: Appointment) => void;
  onDeleteAppointment: (index: number) => void;
}

const DayDetail: React.FC<DayDetailProps> = ({ day, appointments, onAddAppointment, onDeleteAppointment }) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [newAppointment, setNewAppointment] = useState<string>('');
  const [selectedStartHour, setSelectedStartHour] = useState<number>(1);
  const [selectedLastHour, setSelectedLastHour] = useState<number>(2);
  const [currentHour, setCurrentHour] = useState<number>(0);
  const [todayDate, setTodayDate] = useState<string>('');

  useEffect(() => {
    // 한국 시각을 가져오는 API 호출
    const fetchKoreanTime = async () => {
      try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Seoul');
        const data = await response.json();
        const koreanTime = new Date(data.datetime);
        setCurrentHour(koreanTime.getHours());
        // 오늘 날짜를 월과 일로 포맷
        const month = koreanTime.getMonth() + 1; // 월은 0부터 시작하므로 +1
        const day = koreanTime.getDate();
        setTodayDate(`${month}월 ${day}일`);
      } catch (error) {
        console.error('Error fetching Korean time:', error);
      }
    };

    fetchKoreanTime();
  }, []);

  const handleAddAppointment = () => {
    setIsModalVisible(true);
  };

  const handleAddModal = () => {
    if (newAppointment.trim() && selectedLastHour > selectedStartHour) {
      const appointment: Appointment = {
        text: newAppointment,
        time: selectedStartHour,
        lastHour: selectedLastHour,
      };
      onAddAppointment(appointment);
      setNewAppointment('');
      setSelectedStartHour(1);
      setSelectedLastHour(2);
      setIsModalVisible(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const isUpcomingAppointment = (appointmentTime: number, lastHour: number): boolean => {
    return appointmentTime <= currentHour && lastHour >= currentHour;
  };

  return (
    <View style={styles.totalContainer}>
      <View style={styles.inner}>
        <View style={styles.dayDetailContainer}>
          <Text style={styles.dayDetailTitle1}>할머니와 함께</Text>
          <Text style={styles.dayDetailTitle2}>보고있는 하루에요!</Text>
        </View>
        <TouchableOpacity style={styles.MakeAppoint} onPress={handleAddAppointment}>
          <Text style={styles.MAText}>약속잡기</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.appointContainer}>
        {appointments.length === 0 ? (
          <View>
            <Text style={styles.appointText1}>아직 일정이 없어요</Text>
            <Text style={styles.appointTextBold}>새로운 약속을 잡아보실까요?</Text>
          </View>
        ) : (
          appointments.map((appointment, index) => (
            <View
              key={index}
              style={[
                styles.appointSchedule,
                isUpcomingAppointment(appointment.time, appointment.lastHour) ? styles.upcomingAppointment : {}
              ]}
            >
              <View style={styles.appointmentRow}>
                <Text style={[
                  styles.appointText2,
                  isUpcomingAppointment(appointment.time, appointment.lastHour) ? styles.upcomingAppointmentTime : {}
                ]}>
                  {appointment.time}:00 ~ {appointment.lastHour}:00
                </Text>
                <Text style={[
                  styles.appointText,
                  isUpcomingAppointment(appointment.time, appointment.lastHour) ? styles.upcomingAppointmentText : {}
                ]}>
                  {appointment.text}
                </Text>
              </View>
              <TouchableOpacity onPress={() => onDeleteAppointment(index)}>
                <Image
                  source={require('../../assets/png/Close.png')}
                  style={styles.CloseIcon}
                />
              </TouchableOpacity>
            </View>
          ))
        )}
        <View style={styles.empty}></View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <View style={styles.modalInner}>
              <Text style={styles.modalDate}>{todayDate}</Text>
              <Text style={styles.modalTell}>약속 잡기</Text>
            </View>
            <Text style={styles.modalText}>약속 내용</Text>
            <TextInput
              style={styles.input}
              value={newAppointment}
              onChangeText={setNewAppointment}
              placeholder="약속의 내용을 입력하세요"
            />
            <Text style={styles.modalText}>약속시간</Text>
            <View style={styles.pickerTime}>
              <Picker
                selectedValue={selectedStartHour}
                onValueChange={(itemValue) => setSelectedStartHour(itemValue)}
                style={styles.picker}
              >
                {Array.from({ length: 24 }, (_, i) => i + 1).map((startHour) => (
                  <Picker.Item key={startHour} label={`${startHour}:00`} value={startHour} />
                ))}
              </Picker>
              <Text>~</Text>
              <Picker
                selectedValue={selectedLastHour}
                onValueChange={(itemValue) => setSelectedLastHour(itemValue)}
                style={styles.picker}
              >
                {Array.from({ length: 24 }, (_, i) => i + 1).map((endHour) => (
                  <Picker.Item key={endHour} label={`${endHour}:00`} value={endHour} />
                ))}
              </Picker>
            </View>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                <Text style={styles.closeButtonText}>닫기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.closeButtonAdd} onPress={handleAddModal}>
                <Text style={styles.closeButtonText}>추가</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DayDetail;
