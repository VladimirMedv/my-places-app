import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Colors } from "../constants/Colors";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Image
          source={require("../assets/images/login.png")}
          style={{
            width: 200,
            height: 400,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: "black",
          }}
        />
      </View>

      <View style={styles.subContainer}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "nunito-bold",
            textAlign: "center",
          }}
        >
          Explore, Save, and Share Your Favorite Places Together with&nbsp;
          <Text style={{ fontWeight: "bold", color: Colors.PRIMARY }}>
            My Places!
          </Text>
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "nunito",
            textAlign: "center",
            marginTop: 10,
            color: Colors.GRAY,
          }}
        >
          Organize your favorite shops, services, attractions, and more. Add
          descriptions, photos, and ratings to create your personalized guide to
          the best spots around you.
        </Text>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text
            style={{ textAlign: "center", color: "#fff", fontFamily: "nunito" }}
          >
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: -30,
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    borderRadius: 80,
    marginTop: 15,
  },
});
