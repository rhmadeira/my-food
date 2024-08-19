import { View, Text, Pressable } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export function Header() {
  return (
    <View className="flex flex-row w-full justify-between items-center  bg-red-50 p-1">
      <Pressable className="flex justify-center items-center w-10 h-10 rounded-full bg-white">
        <Ionicons name="menu" size={20} color="black" />
      </Pressable>
      <View className="flex items-center justify-center">
        <Text className="text-center text-slate-800">Localização</Text>
        <View className="flex flex-row items-center justify-center gap-1">
          <Feather name="map-pin" size={14} color="red" />
          <Text className="text-lg font-bold">Brasil</Text>
        </View>
      </View>
      <Pressable className="flex justify-center items-center w-10 h-10 rounded-full bg-white">
        <Feather name="bell" size={20} color="black" />
      </Pressable>
    </View>
  );
}
