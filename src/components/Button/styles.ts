import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    button: {
        borderRadius:15,
        backgroundColor:colors.CREAM,
    },
    label: {
        fontSize:24,
        lineHeight:29,
        color:colors.BLACK,
        fontFamily:'Inter',
        fontWeight:'800',
        paddingHorizontal:35,
        paddingVertical:12,
        textAlign:'center',
    }
});
