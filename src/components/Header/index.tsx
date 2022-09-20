import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { FC } from "react";
import { View,  Pressable } from "react-native";
import ExitIcon from "../../../assets/svgs/ExitIcon";
import Logo from "../../../assets/svgs/Logo";
import MobileLogo from "../../../assets/svgs/MobileLogo";
import { useAppDispatch } from "../../hooks/useAppDistach";
import { signOutUser } from "../../redux/features/userSlice/userSlice";
import { isPhoneBasedOnRatio } from "../../utils";
import { styles } from "./styles";

interface MyProps {
  isLoginPage?: boolean;
}

const isPhone = isPhoneBasedOnRatio();

const Header: FC<MyProps> = ({ isLoginPage = false }) => {
  const dispatch = useAppDispatch();

  const handleLogOut = async () => {
    await AsyncStorage.removeItem("user");
    dispatch(signOutUser())
  };

  return (
    <View style={styles.container}>
      <View style={styles.root}>
        <View>{isPhone ? <MobileLogo /> : <Logo />}</View>
        {!isLoginPage ? (
          <Pressable onPress={handleLogOut}>
            <ExitIcon />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default Header;
