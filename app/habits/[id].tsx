import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const HabitDetail = () => {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 p-4">
      <Text className="text-2xl font-bold mb-4">Habit Details</Text>
      <Text className="text-lg">Habit ID: {id}</Text>
      {/* Add more habit details here */}
    </View>
  );
};

export default HabitDetail;