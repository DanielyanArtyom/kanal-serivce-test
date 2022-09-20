import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { isPhoneBasedOnRatio } from "../../utils";

const isPhone = isPhoneBasedOnRatio();

export const styles = StyleSheet.create({
  root: {
    borderColor: colors.BLUE_WATER,
    borderRadius: 5,
    borderWidth: 4,
    paddingTop: isPhone ? 12 : 25,
    paddingHorizontal: 20,
    paddingBottom: 30,
    width: isPhone ? 292 : 325,
    margin: 10,
    height: isPhone ? 200 : 470,
  },
  image: {
    height: 150,
    width: 150,
    marginBottom: 22,
  },
  text: {
    fontFamily: "Inter",
    fontWeight: "800",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 15,
  },
});
