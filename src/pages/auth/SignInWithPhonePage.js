import { View, Text } from "react-native";
import React from "react";
import AppStyles from "../../constants/AppStyles";
import CustomImage from "../../components/CustomImage";
import AppAssets from "../../constants/AppAssets";
import { fontSp, fullWidth, height } from "../../utils/AppDimension";
import ScreenWrapper from "../../components/ScreenWrapper";
import { FontFamily } from "../../constants/AppEnums";
import Spacer from "../../components/Spacer";
import AppButton from "../../components/CustomButton";
import AppColors from "../../constants/AppColors";
import { useNavigation } from "@react-navigation/native";
import AppRoutes from "../../constants/AppRoutes";

export default function SignInWithPhonePage() {
	const navigation = useNavigation();
	return (
		<ScreenWrapper barStyle='dark'>
			<View style={AppStyles.container}>
				<CustomImage
					image={AppAssets.authBackground}
					height={height(40)}
					width={fullWidth}
					radius={0}
					contentFit='cover'
				/>
				<Spacer height={height(5)} />
				<View style={{ paddingHorizontal: 20 }}>
					<Text
						style={{
							fontSize: fontSp(22),
							fontFamily: FontFamily.medium,
						}}
					>
						Get your groceries
					</Text>
					<Text
						style={{
							fontSize: fontSp(22),
							fontFamily: FontFamily.medium,
						}}
					>
						with nectar
					</Text>
				</View>
				<Spacer height={height(5)} />
				<Text
					style={{
						fontSize: fontSp(14),
						fontFamily: FontFamily.regular,
						textAlign: "center",
					}}
				>
					Or connect with social media
				</Text>
				<Spacer height={height(5)} />
				<AppButton
					title='Continue with Google'
					backgroundColor={AppColors.blue}
					onPress={() => {
						navigation.navigate(AppRoutes.login);
					}}
				/>
				<Spacer height={20} />
				<AppButton
					title='Continue with Facebook'
					backgroundColor={AppColors.darkBlue}
					onPress={() => {}}
				/>
			</View>
		</ScreenWrapper>
	);
}
