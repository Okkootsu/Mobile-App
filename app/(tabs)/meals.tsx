import { Stack } from 'expo-router';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Öğünler' }} />
      <View style={styles.container}>
        <StatusBar style="auto" />
        
        <View className=""> 
          
          <Pressable
            className="bg-blue-400 border-black-800  mt-16 mb-10 h-[35%] items-center justify-center rounded-lg border-2 bg-blue-400"
            android_ripple={{ color: '#ffffff20' }}
            style={({ pressed }) => [
              {
                transform: [{ scale: pressed ? 0.97 : 1 }],
              },
            ]}
          >
            <Text className="text-3xl font-bold">Öğünler Chart</Text>
          </Pressable>

          <Pressable
            className="bg-blue-400 border-black-800  mb-12 h-[35%] items-center justify-center rounded-lg border-2"
            android_ripple={{ color: '#ffffff20' }}
            style={({ pressed }) => [
              {
                transform: [{ scale: pressed ? 0.97 : 1 }],
              },
            ]}
          >
            <Text className="text-3xl font-bold">Egzersizler Chart</Text>
          </Pressable>
          
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
