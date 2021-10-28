import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import StepFooter from "../../components/footer/StepFooter";
import Navbar from "../../components/nav/Navbar";
import Step from "../../components/steps/Step";
import Step2 from "../../components/steps/Step2";
import Step3 from "../../components/steps/Step3";
import Step4 from "../../components/steps/Step4";
import { colors } from "../../styles/colors";

export default function Procedure() {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Navbar title="Inscripcion a una carrera" />
        <ScrollView style={styles.scrollView}>
          <Step stepNumber="Paso 1" />
          <Step2 stepNumber="Paso 2" />
          <Step3 stepNumber="Paso 3" />
          <Step4 stepNumber="Paso 4" />
          <StepFooter/>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
  },
});
