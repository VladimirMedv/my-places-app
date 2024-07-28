import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function PopularPlacesCard({ business }) {
  return (
    <View
      style={{
        padding: 10,
        marginLeft: 20,
        backgroundColor: "#fff",
        borderRadius: 15,
        width: 220,
      }}
    >
      <Image
        source={{ uri: business?.imageUrl }}
        style={{ width: 200, height: 130, borderRadius: 8 }}
      />
      <View style={{ gap: 5 }}>
        <Text
          style={{
            fontFamily: "nunito-bold",
            marginTop: 10,
            fontSize: 17,
          }}
        >
          {business?.name}
        </Text>

        <Text
          style={{
            fontFamily: "nunito-medium",
            fontSize: 13,
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
          <Text
            style={{
              fontFamily: "nunito-medium",
              fontSize: 13,
              color: "#fff",
              backgroundColor: Colors.PRIMARY,
              padding: 3,
              borderRadius: 5,
            }}
          >
            {business?.category}
          </Text>
        </View>
      </View>
    </View>
  );
}
