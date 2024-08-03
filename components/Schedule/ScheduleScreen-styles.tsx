import { StyleSheet, Dimensions } from 'react-native';
import { BoxShadow } from 'react-native-shadow';

const { width, height } = Dimensions.get('window');


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  mainText: {
    fontSize: 24,
    color: '#111111',
    padding: 20,
    fontWeight: 'bold',
  },
  ScheduleHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  Image: {
    position: 'absolute',
    width: '10%',
    resizeMode: 'contain',
    right: -140,
  },
  calender: {
    width: '100%',
    padding: 20,
    backgroundColor: '#F6F6F9',
    justifyContent: 'center',
  },
  currentText: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  scrollView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  dayCell: {
//     flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#E7E7E7',
    backgroundColor: '#FFFFFF',
    width: 51, // width for each day cell
    height: 80,
//     marginHorizontal: 3,
//     elevation: 2,

  },
  selectedDayCell: {
      borderColor: '#FF8A00', // 선택된 날짜의 border 색상
        borderWidth:2
    },
  yearText: {
    fontSize: 17,
    color: '#111111',
  },
  dayText: {
    fontSize: 25,
    color: '#111111',
    fontWeight: 'bold',
  },
  weekDayText: {
    color: '#111111',
  },
  naviButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationButtons: {
    position: 'absolute',
    top: -75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    margin: 10,
    padding: 10,
  },
  navButton: {
    padding: 10,
    borderRadius: 5,
  },
  navButtonText: {
    fontSize: 20,
  },
  currentContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentContainerText: {

     margin:20,
    fontSize: 15,
    color: '#7C7C7C',
  },
  dayCellContent: {
    width: 40, // 여기에 width 맞추기
    height: 80,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
