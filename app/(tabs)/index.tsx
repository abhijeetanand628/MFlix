import SearcBar from "@/components/SearcBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Text, View, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
const router = useRouter();

  return (
    <View style={{flex: 1, backgroundColor: '#030014'}}>
      <Image source={images.bg} 
      style={{position: 'absolute', width: '100%', zIndex: 0}}
      />
      <ScrollView style={{flex: 1, padding: 5}}
      showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight: '100%', paddingBottom: 10}}
      >
        <Image source={icons.logo} 
        style={{width: 35, height: 35, marginTop: 60, marginBottom: 5, marginHorizontal: 'auto'}}
        />
        <View style={{flex: 1, marginTop: 5}}>
          <SearcBar 
            onPress={() => router.push("/search")}
            placeholder = "Search for a movie"
          />
        </View>
      </ScrollView>
    </View>
  );
}
