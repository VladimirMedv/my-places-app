import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";

const iconMapping = {
  shops: "shopping-bag",
  cafes: "coffee",
  restaurants: "cutlery",
  "hair salons": "scissors",
  gyms: "heartbeat",
  services: "cogs",
  attractions: "camera",
  parks: "tree",
  museums: "university",
  bars: "beer",
  hospitals: "hospital-o",
  supermarkets: "shopping-cart",
  others: "ellipsis-h",
};

export default function CategoryItem({ category, onCategoryPress }) {
  const iconName = iconMapping[category.name.toLowerCase()] || "question";

  return (
    <TouchableOpacity
      onPress={() => {
        onCategoryPress(category);
      }}
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 85,
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: Colors.ICON_BG,
        }}
      >
        <FontAwesome name={iconName} size={24} color={Colors.PRIMARY} />
      </View>

      <Text
        style={{
          fontSize: 12,
          fontFamily: "nunito-medium",
          textAlign: "center",
          marginTop: 5,
        }}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}
