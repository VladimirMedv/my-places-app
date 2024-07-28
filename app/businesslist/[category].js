import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import BusinessListCard from "../../components/BusinessList/BusinessListCard";
import { Colors } from "../../constants/Colors";

export default function BusinessListByCategory() {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();
  const [BusinessList, setBusinessList] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    });
    getBusinessList();
  }, []);

  const getBusinessList = async () => {
    const q = query(
      collection(db, "business_list"),
      where("category", "==", category.toLocaleLowerCase()),
      limit(10)
    );
    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    setBusinessList(data);
  };

  return (
    <View>
      {BusinessList?.length > 0 ? (
        <FlatList
          data={BusinessList}
          renderItem={({ item, index }) => (
            <BusinessListCard business={item} key={index} />
          )}
        />
      ) : (
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontFamily: "nunito-bold",
            color: Colors.GRAY,
            marginTop: 30,
          }}
        >
          No Buisness Found
        </Text>
      )}
    </View>
  );
}
