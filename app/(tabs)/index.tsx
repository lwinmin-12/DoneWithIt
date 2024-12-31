import CustomButton from "@/components/customButton/CustomButton";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { 
  Image,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
  StatusBar,
  Dimensions,
  useWindowDimensions,
} from "react-native";
export default function HomeScreen() {
  const handlePress = () => console.log("press");
  // return (
  //   <View style={styles.titleContainer}>
  //     <Text numberOfLines={2} onPress={handlePress}>
  //       San Kyi tr pr
  //     </Text>
  //     <TouchableNativeFeedback onPress={() => console.log("img tapped")}>
  //      {/* <Image
  //          blurRadius={5}
  //         fadeDuration={3000}
  //         source={{
  //           width: "300",
  //           height: "300",
  //           uri: "https://i.pinimg.com/736x/25/ec/5b/25ec5b802b63981e60b6121dc9d6d603.jpg",
  //         }}
  //       /> */}
  //       <View style={{width : 200 , height : 70 , backgroundColor : "dodgerblue"}}>

  //       </View>
  //     </TouchableNativeFeedback>
  //     {/* */}
  //   </View>
  // );
  // console.log(Dimensions.get("screen"));
  console.log(useDeviceOrientation());
  // return (
  //   <SafeAreaView style={styles.titleContainer}>
  //     {/* <Button color={'orange'} title="Click" onPress={() =>Alert.alert("My title" ,  'my message',[
  //       {
  //         text : "yes",
  //         onPress : () => console.log("yes")
  //       },
  //       {
  //         text : "no",
  //         onPress : () => console.log("no")
  //       }
  //     ])}/> */}

  //     <Button
  //       color={"orange"}
  //       title="Click"
  //       onPress={() =>
  //         Alert.prompt("my title", "my message", (text) => console.log(text))
  //       }
  //     />
  //   </SafeAreaView>
  // );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Text style={styles.text}>Welcome</Text>
      <CustomButton title="click" onPress={() => console.log("click")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  btn: {
    width: 200,
    height: 70,
    backgroundColor: "dodgerblue",
  },

  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },

  text: {
    // fontWeight : "bold",
    // textAlign : "center",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontWeight: "bold",
        color: "red",
      },
      android: {
        fontSize: 25,
        fontWeight: "bold",
        color: "blue",
      },
    }),
  },
});
