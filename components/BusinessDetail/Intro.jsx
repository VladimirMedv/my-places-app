import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

export default function Intro({ business }) {
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          zIndex: 1,
          width: "100%",
          padding: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={40} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart-outline" size={40} color="#fff" />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: business?.imageUrl }}
        style={{ width: "100%", height: 300 }}
      />

      <View
        style={{
          padding: 20,
          marginTop: -40,
          backgroundColor: "#fff",
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
        }}
      >
        <Text style={{ fontSize: 26, fontFamily: "nunito-bold" }}>
          {business?.name}
        </Text>

        <Text style={{ marginTop: 10, color: "#a9a9a9", fontFamily: "nunito" }}>
          {business?.address}
        </Text>
      </View>
    </View>
  );
}
