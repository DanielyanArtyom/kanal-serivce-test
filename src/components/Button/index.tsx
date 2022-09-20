import {  Text, Pressable } from "react-native";
import React,{FC} from "react";
import { styles } from "./styles";

interface MyProps {
    action: () => void,
    label:string
}

const Button:FC<MyProps> = ({
    action,
    label
}) => {
  return (
    <Pressable style={styles.button} onPress={action}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default Button;
