import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  dailyScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  flatListContainer: {
    height: 400, // FlatList의 높이를 조정
  },
  imageContainer: {
    width,
    height: '100%', // 부모의 높이를 채우도록 설정
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%', // 부모의 높이를 채우도록 설정
    resizeMode: 'cover',
  },
  indicatorContainer: {
    position: 'absolute',
    top: 350, // FlatList 높이에 따라 조정
     left: width / 2 - 35, // X축 중앙에 배치 (indicator 너비에 따라 조정)
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444444',
    opacity: 0.8,
    padding: 5,
    borderRadius: 50,
  },
  indicator: {
    width: 10,
    height: 8,
    borderRadius: 10,
    margin: 5,

  },
  dailyInner: {
    backgroundColor: '#F8F8F8',
    top: 0,
    width:'100%',
    height: 500,
    alignItems: 'center',
  },
  innerBar: {
    backgroundColor: '#DBDBDB',
    width: 40,
    height: 5,
    marginTop: 13,
    borderRadius: 20,
  },
  dailyContainer: {
    margin: 13,
    padding: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightContainer: {
    backgroundColor: '#FFFFFF',
    width: '45%',
    padding:20,
    justifyContent:'center',
    borderColor: '#E7E7E7',
    height: 240,
    borderTopRightRadius : 36,
    borderBottomRightRadius : 36,
  },
  dailyContentImage: {
    height: 240,
    width: '45%',
    resizeMode: 'cover',
    borderTopLeftRadius : 36,
    borderBottomLeftRadius : 36,
  },

  TimeText:{
      paddingBottom:1,
      fontSize:13,
      },
  GPSText:{
      paddingBottom:5,
      paddingLeft:6,
      },
    thinkText1:{
        color:'#111111',
        fontSize:15,
        },
  thinkText2:{
      color:'#111111',
      fontSize:15,
      fontWeight:'bold',
      },
  line:{
      backgroundColor: '#EAEAEA',
          width: 130,
          height: 2,
          marginTop: 13,
          marginBottom: 9,
          borderRadius: 20,
      },
  distanceImage:{
      width:15,
      resizeMode:'contain',
      },
  distance: {
      flexDirection: 'row', // Row direction for horizontal alignment
      alignItems: 'center', // Center align items vertically
    },
  scrollViewContainer: {
    alignItems: 'center',
    height: '120%',
  },
  flatList: {
    flex: 1,
  },
  flatListContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },

btnInner:{
    flexDirection:'row',
    },
  soundContainer:{
      width:43,
      height:43,
      marginTop:15,
      borderRadius:50,

      backgroundColor:'#444444',
      justifyContent:'center',
      alignItems:'center',
      },

  recorderContainer:{
            width:80,
            height:43,
            marginTop:15,
            margin:5,
            borderRadius:50,

            backgroundColor:'#FFB544',
            justifyContent:'center',
            alignItems:'center',
      },

       SIcon:{
            width:'40%',
            resizeMode:'contain',
            },
    RIcon:{
            width:16,
            height:21,
            },

       emptyContainer:{
           },
});
