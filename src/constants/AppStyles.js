import { fontSp } from "../utils/AppDimension";
import AppColors from "./AppColors";
import { FontFamily } from "./AppEnums";

const AppStyles = {
	container: {
		flex: 1,
	},
	statusColor: AppColors.primary,
	boxBgColor: AppColors.primary,
	mainView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	headerText: {
		fontFamily: FontFamily.semiBold,
		fontSize: fontSp(18),
		textAlign: "center",
		paddingTop: 16,
		paddingBottom: 16,
	},
};

export default AppStyles;
