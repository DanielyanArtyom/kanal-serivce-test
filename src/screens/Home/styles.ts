import { StyleSheet } from "react-native";
import { isPhoneBasedOnRatio } from "../../utils";

const isPhone = isPhoneBasedOnRatio();

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  flatList: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: isPhone ? "flex-start" : "center",
    flexWrap: "wrap",
  },
});
