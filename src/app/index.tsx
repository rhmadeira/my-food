import { Text, View, ScrollView } from "react-native";
import Constants from "expo-constants";

import { Banner } from "@/components/banner";
import { Search } from "@/components/search";
import { Header } from "@/components/header";
import { Section } from "@/components/Section";
import { TrendingFoods } from "@/components/trendingFoods";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View
        className="w-full px-4"
        style={{
          paddingTop: statusBarHeight,
        }}
      >
        <Header />
        <Banner />
        <Search />
      </View>
      <View className="w-full px-4">
        <Section
          title="Popular"
          titleButton="ver mais"
          size="large"
          onPressButton={() => console.log("clicou no ver mais")}
        />
        <TrendingFoods />
      </View>
    </ScrollView>
  );
}
