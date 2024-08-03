import { StyleSheet } from 'react-native';
import { Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
      flex: 1,
    },
    progressBarContainer: {
      position: 'absolute',
      margin :10,
      width: '95%',
      height: 5,
      backgroundColor: '#e0e0df',
      borderRadius:50,
      zIndex: 1,
    },
    progressBar: {
      height: '100%',
      backgroundColor: 'white',
    },
    image: {
      width,
      height,
    },
    whiteBoxContainer : {
        position: 'absolute',
            bottom: 0,

            width: '100%',
            height: 100,
            backgroundColor: 'white',

            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
            height: 100,
            elevation: 0,
            paddingRight: 40,
            paddingLeft: 40,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
    },
    placeholderText:{
            position: 'absolute',
                color: '#999',
                fontSize: 18,
                lineHeight: 24, // Adjust line height if needed
                width: '100%',
    },
    textInput: {
        width: '90%',
        height:'90%',
        borderColor: '#DEDEDE',
        borderRadius: 5,
        padding: 10,
        fontSize:20,
    },



    customButton:{
        left:0,
        alignItems: 'center',
        justifyContent:'center',
        width:70,
        height:70,
        borderRadius:50,
        backgroundColor:'#FFAF36',
    },

    sendIcons:{
        width:22,
        resizeMode:'contain'
    },

    sendOption:{
        position:'absolute',
        flexDirection:'colum',

        width:100,
        height:100,
        right:-8,
        bottom:150,

    },

    VoiceBtn:{
         width:50,
         height:50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#F1F1F1',
        borderRadius:50,
        padding:30,
        margin:5,

    },
    Like:{
        width:50,
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#F1F1F1',
        borderRadius:50,
        padding:30,
        margin:5,

    },

    //Icon
    Icons:{
        width:30,
        height:30,
    },

//     BGColor:{
//         backgroundColor:'#FFFFFF'
//     },
//  thisSchedule: {
//      position:'absolute',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//
//   thisScheduleContainer: {
// //       position:'absolute',
//       width: 200,
//     height: 200,
//     backgroundColor: 'rgba(246, 246, 246, 0.5)', // 배경색이 파란색이고 50% 투명도
// //     justifyContent: 'center',
// //     alignItems: 'center',
//   },
//   textInner:{
//       position:'relative',
//       position:'absolute',
//       width:200,
//       height:200,
//
//       },
//   text: {
//     color: '#111111',
//
//     },
//

 thisSchedule: {
     position:'absolute',
    borderRadius: 16,
    overflow: 'hidden', // 블러와 내부 요소가 경계를 벗어나지 않도록
    margin:20,
    marginTop:30,

  },
  thisScheduleContainer: {
    flex: 1,
    position: 'relative', // 자식 요소의 위치를 상대적으로 설정
    justifyContent: 'center',
    alignItems: 'center',
     backgroundColor: 'rgba(246, 246, 246, 0.3)',
  },
  blurView: {
    ...StyleSheet.absoluteFillObject, // 부모 View를 완전히 채우도록 설정
    padding:10,
  },
  blur :{
    width:300, // 적절한 너비와 높이 설정
    height:80,
    padding:10,
  },
  textInner: {
    position: 'absolute', // BlurView 위에 배치하기 위해 absolute 위치 지정
    justifyContent: 'center',
    flexDirection: 'colum',
    padding:10,
    width:'100%',
    height:'100%',
  },
 textTime: {
//      position: 'absolute', // BlurView 위에 배치하기 위해 absolute 위치 지정

     fontSize: 15,
//      textAlign: 'center',
   },
   textContent:{
       fontWeight:'bold',
       color: '#323232',
//        position:'absolute',
    fontSize:17

       }

});