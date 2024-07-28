import { View, Text, FlatList, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function ActionButton({ business }) {
  const actionButtonMenu = [
    {
      id: 1,
      name: "Call",
      icon: "call",
      url: `tel:${business?.contact}`,
      bgcolor: "green",
    },
    {
      id: 2,
      name: "Location",
      icon: "location-sharp",
      url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        business?.address || ""
      )}`,
      bgcolor: "red",
    },
    {
      id: 3,
      name: "Website",
      icon: "globe",
      url: `${business?.website}`,
      bgcolor: "blue",
    },
    {
      id: 4,
      name: "Share",
      icon: "share-social",
      url: `${business?.website}`,
      bgcolor: "orange",
    },
  ];

  const OnPressHandle = (item) => {
    if (item.name == "Share") {
      return;
    }
    Linking.openURL(item.url);
  };

  return (
    <View
      style={{
        backgroundColor: "#fff",
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
      }}
    >
      <FlatList
        data={actionButtonMenu}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <TouchableOpacity key={index} onPress={() => OnPressHandle(item)}>
            <Ionicons
              name={item.icon}
              size={30}
              color="#fff"
              style={{
                backgroundColor: item.bgcolor,
                width: 45,
                height: 45,
                borderRadius: 50,
                textAlign: "center",
                verticalAlign: "middle",
              }}
            />
            <Text
              style={{
                fontFamily: "nunito-medium",
                textAlign: "center",
                marginTop: 3,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
