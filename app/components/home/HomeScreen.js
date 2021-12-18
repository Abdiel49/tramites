import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView
} from 'react-native';
import axios from 'axios';
import { networkEnv } from '../../../network';

const Home = ({ navigation }) => {
  const [ tramites, setTramites ] = useState([]);
  const [ apiBase, setApiBase ] = useState(networkEnv);

  useEffect(() => {
    if (Platform.OS !== 'android' && Platform.OS !== 'ios') {
      setApiBase('localhost:3000');
    }
  }, []);

  useEffect(() => {
    let isApiSubscribed = true;
    if (Platform.OS !== 'android' && Platform.OS !== 'ios') {
      setApiBase('localhost:3000');
    }
    axios
      .get(`http://${apiBase}/api/tramites/umss`)
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
  }, [ apiBase ]);

  return (
    <ScrollView>
      <TouchableOpacity
        testID="btm-tramite"
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('tramiteInscripcion')}
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
              navigation.navigate('tramite', {
                tramite
              })
            }
          >
            <Text style={styles.texteStyle}>{tramite.titulo}</Text>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#0F354A',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 20
  },

  texteStyle: {
    color: 'white',
    fontSize: 17
  }
});

export default Home;
