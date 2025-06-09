import { View, TouchableOpacity, Image, Text, Linking } from "react-native";
import AppAssets from "../constants/AppAssets";
import AppColors from "../constants/AppColors";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { fontSp } from "../utils/AppDimension";
import AppConstants from "../constants/AppConstants";

export default function AppHeader({
	isRoute = false,
	onBackPress,
	onHelplinePress,
	title,
	hideBack,
}) {
	return (
		<>
			<View
				style={{
					flexDirection: "row",
					justifyContent: hideBack ? "center" : "space-between",
					alignItems: "center",
					backgroundColor: AppColors.primary,
					height: 60,
					width: "100%",
					paddingHorizontal: 20,
				}}
			>
				{!hideBack && (
					<TouchableOpacity onPress={isRoute ? onBackPress : () => {}}>
						<Ionicons
							name={isRoute ? "arrow-back" : "notifications-outline"}
							size={30}
							color={AppColors.white}
						/>
					</TouchableOpacity>
				)}
				{title ? (
					<Text
						style={{
							fontSize: fontSp(20),
							color: AppColors.white,
						}}
					>
						{title}
					</Text>
				) : (
					<Image
						source={AppAssets.whiteLogo}
						resizeMode='contain'
						width={200}
						style={{
							width: 200,
							height: 22,
						}}
					/>
				)}

				{!isRoute ? (
					<TouchableOpacity
						onPress={
							onHelplinePress
								? onHelplinePress
								: () => {
										Linking.openURL(AppConstants.helpline);
								  }
						}
					>
						<Entypo name='help-with-circle' size={26} color={AppColors.white} />
					</TouchableOpacity>
				) : (
					<View style={{ width: 26 }} />
				)}
			</View>
		</>
	);
}
