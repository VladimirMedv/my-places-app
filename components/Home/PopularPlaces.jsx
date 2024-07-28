import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import PopularPlacesCard from "./PopularPlacesCard";

export default function PopularPlaces() {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    getBusinessList();
  }, []);

  const getBusinessList = async () => {
    const q = query(collection(db, "business_list"), limit(10));
    const querySnapshot = await getDocs(q);

    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    setBusinessList(data);
  };

  return (
    <View>
      <View
        style={{
          padding: 20,
          marginTop: 10,
          marginBottom: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "nunito-bold",
          }}
        >
          Popular Places
        </Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: "nunito-medium" }}>
          View All
        </Text>
      </View>
      <FlatList
        data={businessList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <PopularPlacesCard business={item} key={index} />
        )}
      />
    </View>
  );
}
