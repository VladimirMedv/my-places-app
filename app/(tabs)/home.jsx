import { ScrollView, View } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import Category from "../../components/Home/Category";
import PopularPlaces from "../../components/Home/PopularPlaces";

export default function home() {
  return (
    <ScrollView>
      {/* Header */}
      <Header />
      {/* Slider */}
      <Slider />
      {/* Categories */}
      <Category />
      {/* Popular Places List */}
      <PopularPlaces />

      {/* Footer */}
      <View style={{ height: 50 }} />
    </ScrollView>
  );
}
