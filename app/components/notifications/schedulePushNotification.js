import { Platform } from "react-native";

export const schedulePushNotification = async ( 
    Notifications, 
    data, 
    seconds = 3 
  ) => {
  if( Platform.OS === 'web' ){
    alert(title, body)
  }else{
    await Notifications.scheduleNotificationAsync({
      content: data,
      trigger: { seconds },
    });
  }
}