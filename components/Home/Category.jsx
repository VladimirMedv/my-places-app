import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import CategoryItem from "./CategoryItem";

export default function Category() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    GetCategoryList();
  }, []);

  const GetCategoryList = async () => {
    const q = query(collection(db, "category"));
    const querySnapshot = await getDocs(q);

    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    data.sort((a, b) => a.id - b.id);

    setCategoryList(data);
  };

  return (
    <View>
      <View
        style={{
          padding: 20,
          marginTop: 10,
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
          Category
        </Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: "nunito-medium" }}>
          View All
        </Text>
      </View>
      <FlatList
        data={categoryList}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginLeft: 20 }}
        renderItem={({ item, index }) => (
          <CategoryItem
            category={item}
            key={index}
            onCategoryPress={() => console.log(item)}
          />
        )}
      />
    </View>
  );
}
