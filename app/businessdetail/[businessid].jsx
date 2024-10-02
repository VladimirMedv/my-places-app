import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { Colors } from "../../constants/Colors";
import Intro from "../../components/BusinessDetail/Intro";
import ActionButton from "../../components/BusinessDetail/ActionButton";
import About from "../../components/BusinessDetail/About";
import Reviews from "../../components/BusinessDetail/Reviews";

export default function BusinessDetail() {
  const { businessid } = useLocalSearchParams();
  const [businessDetail, setBusinessDetail] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetBusinessDetailById();
  }, []);

  const GetBusinessDetailById = async () => {
    setLoading(true);
    const docRef = doc(db, "business_list", businessid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setBusinessDetail({ id: docSnap.id, ...docSnap.data() });
    } else {
      console.log("No such document!");
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={Colors.PRIMARY}
          style={styles.centered}
        />
      ) : (
        <View style={styles.contentContainer}>
          <Intro business={businessDetail} />

          <ActionButton business={businessDetail} />

          <About business={businessDetail} />

          <Reviews business={businessDetail} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
  },
  noBusinessText: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "nunito-bold",
    color: Colors.GRAY,
    position: "absolute",
    top: "50%",
    left: "40%",
    transform: [{ translateX: -40 }, { translateY: -50 }],
  },
});
