import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
export function Search() {
  return (
    <View className="flex-row items-center w-full border border-slate-500 h-14 rounded-full gap-2 px-4">
      <Feather name="search" size={20} color="black" />

      <TextInput
        placeholder="Procure por um produto"
        className="flex-1 h-full w-full bg-transparent rounded-full px-4"
      />
    </View>
  );
}
