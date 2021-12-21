import React, { useRef, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from './registerForPushNotificationsAsyc';
import { schedulePushNotification } from './schedulePushNotification';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const LocalPush = () => {

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync( Notifications ).then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const handlePressNotification = () => {
    schedulePushNotification( Notifications );
  }

  return (
    <View>
      <Text>this is a programes handle push notification</Text>
      <TouchableOpacity
        onPress={ handlePressNotification }
      >
        <Text>handle Press Notification</Text>
      </TouchableOpacity>
    </View>
  )
};

export default LocalPush;
