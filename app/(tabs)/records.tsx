import { Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from '~/components/Button';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Raporlar' }} />
      <View style={styles.container}>
        <StatusBar style="auto" />

        <View className=''>
          {/* Öğün - Tarih Seçim */}
          <View className="border-black-800 mb-5 h-[15%] items-center justify-center rounded-lg border-2 bg-yellow-200 flex-row">
            <Button title='Takvim' />
            <Button title='Günlük' />
            <Button title='Haftalık' />
            <Button title='Aylık' />
          </View>

          {/* Öğün - Sütun Grafik */}
          <View className="border-black-800 mb-5 h-[30%] items-center justify-center rounded-lg border-2 bg-yellow-200 flex-row">
            <Text className="text-3xl font-bold">Grafik</Text>
          </View>

          {/* Öğün - Resimli Grafik */}
          <View className="border-black-800 mb-10 h-[35%] items-center justify-center rounded-lg border-2 bg-yellow-200">
            <View className="border-black-800 h-[46%] w-[97%] mb-1 items-center justify-center rounded-lg border-2 bg-yellow-300">

              <Text className="text-xl font-bold">Toplam</Text>
              <View className="border-black-800 h-[70%] w-[97%] mb-1 items-center justify-center rounded-lg border-2 bg-green-400 flex-row">

                <View className="border-black-800 h-[70%] items-center justify-center rounded-lg border-2 bg-blue-500 flex-row mx-2">
                  <Text className="text-xl font-bold">Karbonhidrat</Text>
                </View>

                <View className="border-black-800 h-[70%] items-center justify-center rounded-lg border-2 bg-blue-500 flex-row mx-2">
                  <Text className="text-xl font-bold">Protein</Text>
                </View>

                <View className="border-black-800 h-[70%] items-center justify-center rounded-lg border-2 bg-blue-500 flex-row mx-2">
                  <Text className="text-xl font-bold">Yağ</Text>
                </View>
              </View>
            </View>

            <View className="border-black-800 h-[46%] w-[97%] items-center justify-center rounded-lg border-2 bg-yellow-300">
              <Text className="text-xl font-bold">Günlük</Text>
              <View className="border-black-800 h-[70%] w-[97%] mb-1 items-center justify-center rounded-lg border-2 bg-green-400 flex-row">

                <View className="border-black-800 h-[70%] items-center justify-center rounded-lg border-2 bg-blue-500 flex-row mx-2">
                  <Text className="text-xl font-bold">Karbonhidrat</Text>
                </View>

                <View className="border-black-800 h-[70%] items-center justify-center rounded-lg border-2 bg-blue-500 flex-row mx-2">
                  <Text className="text-xl font-bold">Protein</Text>
                </View>

                <View className="border-black-800 h-[70%] items-center justify-center rounded-lg border-2 bg-blue-500 flex-row mx-2">
                  <Text className="text-xl font-bold">Yağ</Text>
                </View>
              </View>
            </View>
          </View>

          {/* ---------------------------------------- */}
          <View className="border-black-800 items-center justify-center rounded-lg border-2">

          </View>

          <View className="border-black-800 mt-10 items-center justify-center rounded-lg border-2 bg-blue-500">
            <Text className="text-xl font-bold">Yukarıdakilerin Egzersiz Versiyonları</Text>
          </View>

          {/* Öğün - Tarih Seçim */}

          {/* Öğün - Sütun Grafik */}

          {/* Öğün - Resimli Grafik */}
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
