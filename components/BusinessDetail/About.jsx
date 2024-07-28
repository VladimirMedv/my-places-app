import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

export default function About({ business }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.content}>{business?.about}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: "nunito-bold",
    paddingLeft: 20,
  },
  content: {
    fontFamily: "nunito",
    lineHeight: 25,
    marginBottom: 10,
  },
});
