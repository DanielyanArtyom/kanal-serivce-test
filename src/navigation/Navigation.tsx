import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import PublicNavigator from "./PublicNavigator";
import PrivateNavigator from "./PrivateNavigator";
import { useAppSelector } from "../hooks/useAppSelector";

const Navigation = () => {
  const isLoggedIn = useAppSelector((state) => state.personal.isLoggedIn);
  
  return (
    <NavigationContainer>
      {isLoggedIn ? <PrivateNavigator /> : <PublicNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
