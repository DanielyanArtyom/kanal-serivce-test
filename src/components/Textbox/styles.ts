import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { isPhoneBasedOnRatio } from "../../utils";

const isPhone = isPhoneBasedOnRatio();

export const styles = StyleSheet.create({
  root: {
    marginBottom: 20,
    flexDirection: isPhone ? "column" : "row",
    flexWrap: isPhone ? "nowrap" : "wrap",
    width:'100%',
    maxWidth:450,
    justifyContent:'space-between',
    alignItems:isPhone ? 'baseline' : 'center',
    
  },
  label: {
    fontFamily: "Inter",
    fontWeight: "800",
    fontSize: 24,
    lineHeight: 29,
    color: colors.BLACK,
    marginBottom: isPhone ? 13 : 0,
  },
  input: {
    borderWidth: 4,
    borderRadius: 10,
    borderColor: colors.BLUE_WATER,
    backgroundColor: colors.INPUT_BACKGROUND,
    padding: 7,
    width: "100%",
    maxWidth:295,
    minWidth: 212,
  },
  errorMessage: {
    fontSize: isPhone ? 10 : 12,
    color:colors.ERROR_MESSAGE,
    paddingTop:5,
  }
});
