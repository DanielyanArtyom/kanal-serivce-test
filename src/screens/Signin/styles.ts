import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { isPhoneBasedOnRatio } from "../../utils";

const isPhone = isPhoneBasedOnRatio();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: isPhone ? "flex-start" : "center",
    backgroundColor: colors.MAIN_BACKGROUND,
    marginTop: isPhone ? 14 : 0,
  },
  root: {
    borderColor: colors.BLUE_WATER,
    borderRadius: 5,
    borderWidth: 4,
    paddingTop: isPhone ? 8 : 25,
    paddingHorizontal: isPhone ? 40 : 20,
    paddingBottom: 30,
  },
  title: {
    fontFamily: "Inter",
    fontWeight: "800",
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    color: colors.BLUE_WATER,
    marginBottom: isPhone ? 25 : 40,
  },
});
