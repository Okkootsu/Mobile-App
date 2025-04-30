import { Stack } from 'expo-router';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Ana Sayfa',
          headerRight: () => (
            // <TextInput className='bg-gray-100 rounded-3xl p-5 w-[65%] mr-5' placeholder='Yemek Tarifi Ara...' />
            <View className="mr-5 w-[65%] flex-row items-center rounded-3xl border-gray-300 bg-gray-100 px-3 py-0">
              <Image
                source={require('~/assets/magnifying-glass-icon-13.png')}
                style={{ width: 20, height: 20, tintColor: 'gray' }}
              />
              <TextInput
                placeholder="Yemek Tarifi Ara..."
                className="ml-2 flex-1 text-base text-gray-800"
              />
            </View>
          ),
        }}
      />
      <View style={styles.container} className="">
        <StatusBar style="auto" />

        <View className="">
          <Text className="mb-10 text-3xl font-bold">Hoş Geldiniz!</Text>

          <View className="border-black-800 mb-10 h-[35%] items-center justify-center rounded-lg border-2 bg-green-400">
            <Text className="text-3xl font-bold">Info</Text>
          </View>

          <View className="border-black-800 mb-10 h-[35%] items-center justify-center rounded-lg border-2 bg-green-400">
            <Text className="text-3xl font-bold">Tarifler/Tavsiyeler</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24, // 24
  },
});
