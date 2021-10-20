import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Navbar from "../../components/nav/Navbar";
import Step from "../../components/steps/Step";
import { colors } from "../../styles/colors";

export default function Procedure() {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Navbar title="Inscripcion a una carrera" />
        <ScrollView style={styles.scrollView}>
          <Step/>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.secondary
  },
  scrollView:{
    
  }
});
