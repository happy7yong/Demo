// DayDetail-styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    totalContainer:{
        justifyContent:'center',
        alignItems:'center',
        },

    inner:{
            width : '100%',
//             height : 150,
            padding: 40,
            flexDirection:'row',
            justifyContent: 'space-between',

            alignItems:'center',
        },
  dayDetailContainer: {
//       borderWidth:1,
      flex:1,
      height : 60,
  },
  dayDetailTitle1: {
    fontSize: 18,
    color:'#111111',
        fontSize:21,
  },
  dayDetailTitle2: {
      fontSize: 21,
      fontWeight:'bold',
      color:'#111111',
    },
  dayDetailText: {
    fontSize: 16,
    color: '#333',
  },

  MakeAppoint:{
      backgroundColor:'#444444',
      width:100,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 50,
      margin:'auto',
      },
  MAText:{
      color:'#FFFFFF',
      },
    appointSchedule :{
        backgroundColor:'#F6F6F6',
        width:320,
        height:'auto',

        justifyContent:'center',
        padding:15,
        borderRadius:16,
        margin:5,

        },

    empty:{
        width:100,
        height:280,
        },

    CloseIcon:{
        position:'absolute',
        right:0,
        bottom:17,
        },

//모달

modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

   picker: {
      width: 150,
      height: 40,
//       backgroundColor: '#e0e0e0',
      borderRadius: 10,
    },
    upcomingAppointment: {
        backgroundColor: '#FFF5E8', // 주황색 배경
        borderWidth:1,
        borderColor:'#FFAF36',
//         height:100,

  },
    currentCobal:{
        height:100,
        resizeMode:'center',
        margin:-30,
        },
        appointText:{
            width:250,
            fontSize:16,
            textAlign:'center',

            },

        appointTextBold:{
            fontWeight:'bold',
            textAlign:'center',
            fontSize:16,
            },

    appointmentRow:{

        },
    appointContainer:{
//         justifyContent:'center',
        },

    becurrentAppointContainer: {

//         alignItems: 'center', // 수직 중앙 정렬
      },
      becurrentAppointTime: {
        fontSize: 16,
        marginRight: 10, // 시간과 텍스트 사이의 간
      },
      becurrentAppointText: {
        fontSize: 16,
        fontWeight:'bold',
}



});
