import React, {
  useEffect, 
  useState, 
  useRef 
} from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import axios from "axios";
import * as Notifications from 'expo-notifications';

import { networkEnv } from "../../../network";
import Buscador from "./Buscador";
import { registerForPushNotificationsAsync } from "../notifications/registerForPushNotificationsAsyc";

import { buildNotification } from "../notifications/buildNotification";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const Home = ({ navigation }) => {
  const [tramites, setTramites] = useState(null);
  const [apiBase, setApiBase] = useState(networkEnv);
  const [tramitesFilt, setTramitesFilt] = useState(null);

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  
  const [updateData, setUpdateData] = useState(null);


  useEffect(()=>{
    let isApiSubscribed = true;
    axios
      .get(`${apiBase}/api/tramites/update`)
      .then((res) => {
        if (isApiSubscribed) {
          setUpdateData(res.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
    return () => {
      isApiSubscribed = false;
    };
  },[])

  useEffect(() => {
    registerForPushNotificationsAsync( Notifications ).then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    if(expoPushToken){
      if (updateData) {
        const fechaActualNuevos = new Date(); //traer la ultima fecha de actualizacion de nuevos tramites 
        const fechaActualizacionNuevos = new Date(updateData[0].updateAt);
        const fechaActualTramiteAct = new Date();//traer la ultima fecha de actualizacion de tramites actualizados
        const fechaActualizacionTramitesAct = new Date(updateData[1].updateAt);
        if (fechaActualizacionNuevos > fechaActualNuevos) {
          buildNotification( Notifications, updateData[0], 2)
        }
        if (fechaActualizacionTramitesAct >= fechaActualTramiteAct) {

          buildNotification( Notifications, updateData[1], 4)
        }
      }
    }

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, [expoPushToken]);

  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
      const data = response.notification.request.content.data;
      // Linking.openURL(url);
      console.log(data)
    });
    return () => subscription.remove();
  }, [])

  useEffect(() => {
    let isApiSubscribed = true;
    axios
      .get(`${apiBase}/api/tramites/umss`)
      .then((res) => {
        if (isApiSubscribed) {
          setTramites(res.data);
          setTramitesFilt(res.data);
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
    <View>
      <Buscador 
        tramites={tramites} 
        setTramites={setTramitesFilt}
      />
      <ScrollView>
        {
          (tramitesFilt)?
          ( 
            tramitesFilt.length > 0?(
              tramitesFilt.map((tramite) => (
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
            )
            :
            <Text style={styles.textoInfo}>
              No se encontró algún tramite con la información que buscas
            </Text>
          )  
          :
          (
          <Text style={styles.textoInfo}>
            Cargando...
          </Text>
          )
        }
      <View style={styles.espaciado}>

      </View>
      </ScrollView>
    </View>
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

  espaciado: {
    padding: 50,
  },

  textoInfo: {
    fontSize: 30,
    marginVertical: '30%',
    marginHorizontal: 20,
    textAlign: 'center'
  }
});

export default Home;
