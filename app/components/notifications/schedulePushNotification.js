import { Platform } from "react-native";

export const schedulePushNotification = async ( 
    Notifications, 
    data, 
    seconds = 3 
  ) => {
  if (Platform.OS === 'android' || Platform.OS === 'ios') {
    await Notifications.scheduleNotificationAsync({
      content: data,
      trigger: { seconds },
    });
  }
}