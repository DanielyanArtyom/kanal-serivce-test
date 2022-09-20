import { View, Text, ImageBackground } from "react-native";
import React, { FC } from "react";
import { styles } from "./styles";
import { isPhoneBasedOnRatio } from "../../utils";

const isPhone = isPhoneBasedOnRatio();

interface MyProps {
  photoUrl: string;
  name: string;
  company: string;
  title: string;
  body: string;
}

const RenderContent: FC<MyProps> = ({
  photoUrl,
  name,
  company,
  title,
  body,
}) => {
  return (
    <View style={styles.root}>
      {isPhone ? null : (
        <ImageBackground
          source={{
            uri: photoUrl,
          }}
          resizeMode="cover"
          style={styles.image}
        />
      )}
      <Text style={styles.text}>Author: {name}</Text>
      <Text style={styles.text}>Company: {company}</Text>
      <Text style={styles.text}>Title: {title}</Text>
      {isPhone ? null : (
        <Text numberOfLines={5} ellipsizeMode="head" style={styles.text}>
          {body}
        </Text>
      )}
    </View>
  );
};

export default RenderContent;
