import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  const { user } = useUser();

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 30,
        backgroundColor: Colors.PRIMARY,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Image
          source={{ uri: user?.imageUrl }}
          style={{ width: 45, height: 45, borderRadius: 50 }}
        />
        <View>
          <Text style={{ color: "#fff" }}>Welcome,</Text>
          <Text
            style={{
              fontSize: 19,
              fontFamily: "nunito-medium",
              color: "#fff",
              fontWeight: "700",
            }}
          >
            {user?.fullName}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          backgroundColor: "#fff",
          padding: 8,
          marginTop: 10,
          borderRadius: 8,
        }}
      >
        {/* Search Bar */}
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput
          placeholder="Search..."
          style={{ fontFamily: "nunito", fontSize: 16 }}
        />
      </View>
    </View>
  );
}
