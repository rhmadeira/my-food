import { View, Text, Pressable } from "react-native";

interface IProps {
  title: string;
  titleButton?: string;
  size: "small" | "medium" | "large";
  onPressButton?: () => void;
}

export function Section({ title, titleButton, size, onPressButton }: IProps) {
  const textSize = {
    small: "text-lg",
    medium: "text-xl",
    large: "text-2xl",
  };

  return (
    <View className="w-full mt-4 flex flex-row justify-between items-center">
      <Text className={`${textSize[size]} font-semibold my-4 self-start`}>
        {title}
      </Text>
      {titleButton && (
        <Pressable onPress={onPressButton}>
          <Text className="text-sm text-primary">{titleButton}</Text>
        </Pressable>
      )}
    </View>
  );
}
