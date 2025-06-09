import { StyleSheet } from "react-native";
import { FontFamily } from "../../../constants/AppEnums";
import { fontSp } from "../../../utils/AppDimension";

const shopStyles = StyleSheet.create({
	headerWrapper: {
		alignItems: "center",
		marginTop: 20,
	},
	locationWrapper: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
		marginTop: 10,
	},
	headerText: {
		fontFamily: FontFamily.semiBold,
		fontSize: fontSp(16),
	},
});

export default shopStyles;
