import React from "react";
import { NavConst } from "../../constants/NavConst";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../../screens/Signin";
import Header from "../../components/Header";

const Stack = createStackNavigator();

 const PublicNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NavConst.SIGN_IN} component={SignIn} options={{
        header:() => <Header isLoginPage/>
      }}/>
    </Stack.Navigator>
  );
};

export default PublicNavigator