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

  useEffect(() => {
    // 한국 시각을 가져오는 API 호출
    const fetchKoreanTime = async () => {
      try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Seoul');
        const data = await response.json();
        const koreanTime = new Date(data.datetime);
        setCurrentHour(koreanTime.getHours());
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

  const isUpcomingAppointment = (appointmentTime: number): boolean => {
    return appointmentTime >= currentHour;
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
                <Text style={styles.appointText}>아직 일정이 없어요</Text>
                <Text style={styles.appointTextBold}>새로운 약속을 잡아보실까요?</Text>
           </View>
        ) : (
          appointments.map((appointment, index) => (
            <View
              key={index}
              style={[
                styles.appointSchedule,
                isUpcomingAppointment(appointment.time) ? styles.upcomingAppointment : {}
              ]}
            >
              {isUpcomingAppointment(appointment.time) && (
                <View style={styles.appointmentRow}>
                  <Image
                    source={require('../../assets/png/cobalPr.png')} // 새로 추가된 이미지 경로
                    style={styles.currentCobal}
                  />
                  <Text style={styles.appointText}>
                    {appointment.time}:00 ~ {appointment.lastHour}:00
                  </Text>
                  <Text style={styles.appointText}>{appointment.text}</Text>
                </View>
              )}
              {!isUpcomingAppointment(appointment.time) && (
                <View style={styles.becurrentAppointContainer}>
                  <Text style={styles.becurrentAppointTime}>{appointment.time}:00 ~ {appointment.lastHour}:00</Text>
                  <Text style={styles.becurrentAppointText}>{appointment.text}</Text>
                </View>
              )}
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
            <Text style={styles.modalText}>새로운 일정을 입력해주세요.</Text>
            <TextInput
              style={styles.input}
              value={newAppointment}
              onChangeText={setNewAppointment}
              placeholder="일정을 입력하세요"
            />
            <Text style={styles.modalText}>시작 시간 선택</Text>
            <Picker
              selectedValue={selectedStartHour}
              onValueChange={(itemValue) => setSelectedStartHour(itemValue)}
              style={styles.picker}
            >
              {Array.from({ length: 24 }, (_, i) => i + 1).map((startHour) => (
                <Picker.Item key={startHour} label={`${startHour}:00`} value={startHour} />
              ))}
            </Picker>

            <Text style={styles.modalText}>종료 시간 선택</Text>
            <Picker
              selectedValue={selectedLastHour}
              onValueChange={(itemValue) => setSelectedLastHour(itemValue)}
              style={styles.picker}
            >
              {Array.from({ length: 24 }, (_, i) => i + 1).map((endHour) => (
                <Picker.Item key={endHour} label={`${endHour}:00`} value={endHour} />
              ))}
            </Picker>

            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.closeButton} onPress={handleAddModal}>
                <Text style={styles.closeButtonText}>추가</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                <Text style={styles.closeButtonText}>닫기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DayDetail;
