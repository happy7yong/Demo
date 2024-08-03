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
            padding: 30,
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
      fontSize:16,
      fontWeight:'bold',
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
    width: 320,
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 36,
//     alignItems: 'center',
  },
    modalInner:{
      flexDirection:'row',
      marginTop:5,
      marginBottom:20,
      alignItems:'center',
    },

  modalDate:{
      fontSize:22,
      fontWeight:'bold',
      paddingRight:5,
      color:'#111111',

      },
  modalApp:{

      },
  modalTell: {
      fontSize:20,
      color:'#111111',
  },
  modalText:{
      marginBottom:5,

      },
  input:{
      backgroundColor:'#EEEEEE',
      padding:10,
      borderRadius:10,
      marginBottom:17,
      },
  modalButtons:{
      flexDirection:'row',
      },
  closeButton: {
    padding: 10,
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
    width:'48%',

  },
  closeButtonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign:'center',
  },
  closeButtonAdd:{
    padding: 10,
    backgroundColor: '#FFAF36',
    borderRadius: 5,
    textAlign:'center',
    width:'47%',
    marginLeft:10,
      },



  pickerTime:{
      flexDirection:'row',
      alignItems:'center',
      left:-5,
      marginBottom:40,

      },
   picker: {
      width: 120,
      height: 40,
      backgroundColor: '#F2F2F2',
      borderWidth:1,
      margin:5,
      padding:2,
      borderRadius: 10,

    },
    upcomingAppointment: {
        backgroundColor: '#FFF5E8', // 주황색 배경
        borderWidth:1,
        borderColor:'#FFAF36',
//         height:100,

  },

        appointText:{
            width:250,
            fontSize:20,

            },

        appointText1:{
                textAlign:'center',
            },

        appointTextBold:{
                textAlign:'center',
                fontWeight:'bold',
            },

     upcomingAppointmentText: {
        fontSize: 20, // 주황색 박스의 텍스트 크기
        fontWeight:'bold',
      },
      upcomingAppointmentTime: {
          fontWeight:'bold',
        fontSize: 18, // 주황색 박스의 시간 텍스트 크기
      },


});
