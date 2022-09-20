import React from "react";
import { NavConst } from "../../constants/NavConst";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home";
import Header from "../../components/Header";

const Stack = createStackNavigator();

 const PrivateNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NavConst.HOME} component={Home} options={{
        header: () => <Header />
      }} />
    </Stack.Navigator>
  );
};

export default PrivateNavigator