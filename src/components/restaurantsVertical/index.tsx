import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { RestaurantItemVertical } from "./restaurant";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

export function RestaurantVerticalList() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.70.18:3001/restaurants");
      const data = await response.json();
      setRestaurants(data);
    }

    getFoods();
  }, []);

  return (
    <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
      {restaurants.map((item) => (
        <RestaurantItemVertical item={item} key={item.id} />
      ))}
    </View>
  );
}
