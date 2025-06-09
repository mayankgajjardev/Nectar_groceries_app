import { StyleSheet } from "react-native";
import { fontSp } from "../../utils/AppDimension";
import { FontFamily } from "../../constants/AppEnums";
import AppColors from "../../constants/AppColors";

const authStyle = StyleSheet.create({
	loginWrapper: {
		paddingHorizontal: 20,
		justifyContent: "flex-end",
	},
	titleText: {
		fontSize: fontSp(22),
		fontFamily: FontFamily.bold,
	},
	subtitleText: {
		fontSize: fontSp(14),
		fontFamily: FontFamily.medium,
	},
	forgotText: {
		marginTop: 16,
		textAlign: "right",
		fontSize: fontSp(14),
		fontFamily: FontFamily.medium,
	},
	termsText: {
		marginTop: 14,
		fontSize: fontSp(12),
		fontFamily: FontFamily.regular,
		lineHeight: 19,
	},
	boldText: {
		marginTop: 16,
		textAlign: "center",
		fontSize: fontSp(14),
		fontFamily: FontFamily.bold,
	},
	boldColorText: {
		marginTop: 16,
		textAlign: "center",
		fontSize: fontSp(14),
		fontFamily: FontFamily.bold,
		color: AppColors.primary,
	},
});

export default authStyle;
