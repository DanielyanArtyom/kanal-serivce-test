import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { store } from "./src/redux/store";
import Navigation from "./src/navigation/Navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signInUser } from "./src/redux/features/userSlice/userSlice";
import Loader from "./src/components/Loader";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter": require("./assets/fonts/Inter.ttf"),
  });
  const [isAppReady, setIsAppReady] = useState(false);


  const getUser = async () => {
    const user = await AsyncStorage.getItem("user");
    if(user) {
      store.dispatch(signInUser(JSON.parse(user)));
    }
    setIsAppReady(true)
  };

  useEffect(() => {
    if (fontsLoaded) {
      getUser();
    }
  }, [fontsLoaded]);

  if (!isAppReady) {
    return <Loader />;
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
