import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";

export default function BusinessListCard({ business }) {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        margin: 10,
        flexDirection: "row",
        gap: 10,
      }}
    >
      <Image
        source={{ uri: business?.imageUrl }}
        style={{ width: 120, height: 120, borderRadius: 8 }}
      />
      <View style={{ flex: 1, gap: 5, justifyContent: "space-between" }}>
        <Text
          style={{
            fontFamily: "nunito-bold",
            fontSize: 20,
          }}
        >
          {business?.name}
        </Text>

        <Text
          style={{
            fontFamily: "nunito",
            fontSize: 15,
            color: Colors.GREY,
          }}
        >
          {business?.address}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Ionicons name="star" size={15} color="gold" />
            <Text
              style={{ fontSize: 13, color: Colors.GREY, fontFamily: "nunito" }}
            >
              4.5
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
