import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Posts from "../components/Posts";

export default function PostPages() {
  return (
    <View style={styles.container}>
      <Posts />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: 25,
    justifyContent: "center",
  },
});
