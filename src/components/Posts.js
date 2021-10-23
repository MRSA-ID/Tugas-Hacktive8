import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Posts() {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ alignSelf: "center" }}>
        <Image
          style={{ width: 150, height: 150, margin: 10, borderRadius: 150 / 2 }}
          source={require("../../assets/cover.jpg")}
        />
      </View>
      <Text
        style={{
          lineHeight: 30,
        }}
      >
        UserName: Muhammad Ramadhan Sangisda Alam
      </Text>
      <Text
        style={{
          lineHeight: 30,
        }}
      >
        Age: 20
      </Text>
      <Text
        style={{
          lineHeight: 30,
        }}
      >
        Status: Single
      </Text>
      <Text
        style={{
          lineHeight: 30,
        }}
      >
        Address: Bekasi, Jl.Raya hankam
      </Text>
    </View>
  );
}
