import { View, Text, ImageBackground } from "react-native";
import React from "react";
import AppAssets from "../../constants/AppAssets";
import { StatusBar } from "expo-status-bar";
import {
	fontSp,
	fullHeight,
	fullWidth,
	height,
	width,
} from "../../utils/AppDimension";
import AppColors from "../../constants/AppColors";
import Logo from "../../../assets/icons/logo.svg";
import Spacer from "../../components/Spacer";
import { FontFamily } from "../../constants/AppEnums";
import AppButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import AppRoutes from "../../constants/AppRoutes";

export default function OnBoardingPage() {
	const navigation = useNavigation();
	return (
		<>
			<StatusBar style='light' />
			<View style={{ flex: 1 }}>
				<ImageBackground
					source={AppAssets.onBoarding}
					style={{ flex: 1, height: fullHeight + height(6) }}
					resizeMode='cover'
				>
					<View
						style={{
							flex: 1,
							justifyContent: "flex-end",
							alignItems: "center",
						}}
					>
						<Logo />
						<Spacer height={height(3)} />
						<View style={{ flexDirection: "column", alignItems: "center" }}>
							<Text
								style={{
									fontFamily: FontFamily.bold,
									fontSize: fontSp(32),
									color: AppColors.white,
								}}
							>
								Welcome
							</Text>
							<Text
								style={{
									fontFamily: FontFamily.bold,
									fontSize: fontSp(32),
									color: AppColors.white,
								}}
							>
								to our store
							</Text>
							<Spacer height={height(2)} />
							<Text
								style={{
									fontFamily: FontFamily.regular,
									fontSize: fontSp(15),
									color: AppColors.white,
								}}
							>
								Ger your groceries in as fast as one hour
							</Text>
							<Spacer height={40} />
							<AppButton
								title='Get started'
								style={{ width: fullWidth - width(18) }}
								onPress={() => {
									navigation.navigate(AppRoutes.signInWithPhone);
								}}
							/>

							<Spacer height={height(12)} />
						</View>
					</View>
				</ImageBackground>
			</View>
		</>
	);
}
