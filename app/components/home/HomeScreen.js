import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import axios from "axios";
import { networkEnv } from "../../../network";

const Home = ({ navigation }) => {
  const [tramites, setTramites] = useState([]);
  const [apiBase, setApiBase] = useState(networkEnv);

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
        ))}
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
