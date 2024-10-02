import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import { Colors } from "../../constants/Colors";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useUser } from "@clerk/clerk-expo";
import { db } from "../../configs/FirebaseConfig";

export default function Reviews({ business }) {
  const [rating, setRating] = useState(4);
  const [userInput, setUserInput] = useState();
  const { user } = useUser();

  const onSubmit = async () => {
    console.info(rating, userInput);
    const docRef = doc(db, "business_list", business?.id);
    await updateDoc(docRef, {
      reviews: arrayUnion({
        rating: rating,
        comment: userInput,
        username: user?.fullName,
        userImage: user?.imageUrl,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      }),
    });

    ToastAndroid.show("Comment added successfully!", ToastAndroid.BOTTOM);
  };

  return (
    <View style={{ padding: 20, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 20, fontFamily: "nunito-bold" }}>Reviews</Text>
      <View>
        <Rating
          showRating={false}
          imageSize={20}
          onFinishRating={(rating) => setRating(rating)}
          style={{ paddingVertical: 10 }}
        />
        <TextInput
          onChangeText={(value) => setUserInput(value)}
          style={{
            borderWidth: 1,
            borderColor: Colors.GRAY,
            padding: 10,
            borderRadius: 10,
          }}
          placeholder="Write a review"
          numberOfLines={4}
          textAlignVertical="top"
        />
        <TouchableOpacity
          disabled={!userInput}
          onPress={onSubmit}
          style={{
            color: "#fff",
            backgroundColor: Colors.PRIMARY,
            padding: 10,
            borderRadius: 6,
            marginTop: 10,
          }}
        >
          <Text
            style={{ color: "#fff", textAlign: "center", fontFamily: "nunito" }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>

      {/* Display Previous Reviews */}

      <View>
        {business?.reviews?.map((item, index) => (
          <View>
            <Image
              key={index}
              source={{ uri: item.userImage }}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <Text>{item.comment}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
