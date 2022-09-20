import React from "react";
import { View, Text, SafeAreaView, Alert } from "react-native";
import { useForm, Resolver } from "react-hook-form";
import Textbox from "../../components/Textbox";
import { styles } from "./styles";
import { signInForm } from "./staticData";
import Button from "../../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from "../../hooks/useAppDistach";
import { signInUser } from "../../redux/features/userSlice/userSlice";

const MockUser = {
  email: "test@user.com",
  password: "Password123!",
};

const SignIn = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();

  const onSubmit = async (data) => {
    if (
      data.email !== MockUser.email.toLowerCase() &&
      data.password !== MockUser.password
    ) {
      return Alert.alert("Email or Password was wrong");
    }

    await AsyncStorage.setItem("user", JSON.stringify(data));
    dispatch(signInUser(data));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.root}>
        <Text style={styles.title}>Authorization</Text>
        <View>
          {signInForm.map((inputField) => (
            <Textbox
              key={inputField.id}
              control={control}
              fieldName={inputField.name}
              label={inputField.labelName}
              validate={inputField.validate}
              secureTextEntry={inputField.secureTextEntry}
              errors={errors}
            />
          ))}
        </View>
        <Button label="Submit" action={handleSubmit(onSubmit)} />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
