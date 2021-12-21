import { Platform } from "react-native";

export const schedulePushNotification = async ( 
    Notifications, 
    title, 
    body, 
    data, 
    seconds = 3 
  ) => {
  if( Platform.OS === 'web' ){
    alert(title, body)
  }else{
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hey Parece que tienes tramites por terminar 📬",
        body: 'Tienes 4 tramites pendientes xD',
        data: { data: 'goes here' },
      },
      trigger: { seconds: 2 },
    });
  }
}