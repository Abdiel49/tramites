import React, {
  useEffect, 
  useState, 
  useRef 
} from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import axios from "axios";
import * as Notifications from 'expo-notifications';

import { networkEnv } from "../../../network";
import { registerForPushNotificationsAsync } from "../notifications/registerForPushNotificationsAsyc";
import { schedulePushNotification } from "../notifications/schedulePushNotification";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const Home = ({ navigation }) => {
  const [tramites, setTramites] = useState([]);
  const [apiBase, setApiBase] = useState(networkEnv);

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
    const data = {
      title: "Hey Parece que tienes tramites por terminar 📬",
      body: 'Tienes undefinet tramites pendientes',
      data: { data: 'goes here' },
    };

    schedulePushNotification( Notifications, data, 4 );

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, [expoPushToken]);

  useEffect(() => {
    let isApiSubscribed = true;
    axios
      .get(`${apiBase}/api/tramites/umss`)
      .then((res) => {
        if (isApiSubscribed) {
          setTramites(res.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
    return () => {
      isApiSubscribed = false;
    };
  }, [apiBase]);

  return (
    <ScrollView>
      <TouchableOpacity
        testID="btm-tramite"
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("tramiteInscripcion")}
      >
        <Text style={styles.texteStyle}>Inscripción a una Carrera</Text>
      </TouchableOpacity>
      {
        tramites.map((tramite) => (
          <TouchableOpacity
            testID="btm-tramite"
            key={tramite.id}
            style={styles.buttonStyle}
            onPress={() =>
              navigation.navigate("tramite", {
                tramite,
              })
            }
          >
            <Text style={styles.texteStyle}>{tramite.titulo}</Text>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#0F354A",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
    borderRadius: 10,
  },

  texteStyle: {
    color: "white",
    fontSize: 17,
  },
});

export default Home;
