import {
	View,
	Text,
	ScrollView,
	KeyboardAvoidingView,
	Platform,
	TouchableOpacity,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import AppStyles from "../../constants/AppStyles";
import ScreenWrapper from "../../components/ScreenWrapper";
import authStyle from "./Auth.style";
import { height } from "../../utils/AppDimension";
import FillLogo from "../../../assets/icons/fill_logo.svg";
import Spacer from "../../components/Spacer";
import AppInput from "../../components/AppInput";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AppButton from "../../components/CustomButton";
import AppColors from "../../constants/AppColors";
import { useNavigation } from "@react-navigation/native";
import AppRoutes from "../../constants/AppRoutes";

export default function RegisterPage() {
	const navigation = useNavigation();
	const [visibility, setVisibility] = useState(false);
	const handleToggleVisibility = useCallback(() => {
		setVisibility((prev) => !prev);
	}, []);

	useEffect(() => {
		console.log("Visibility :-", visibility);
	}, [visibility]);

	const renderRightIcon = useCallback(
		() => (
			<MaterialIcons
				name={visibility ? "visibility-off" : "visibility"}
				size={24}
				color={AppColors.offWhite}
			/>
		),
		[visibility]
	);

	return (
		<ScreenWrapper>
			<ScrollView style={AppStyles.container}>
				<KeyboardAvoidingView
					style={AppStyles.container}
					behavior={Platform.OS === "ios" ? "padding" : "height"}
				>
					<View style={authStyle.loginWrapper}>
						<Spacer height={height(5)} />
						<View style={{ alignItems: "center" }}>
							<FillLogo height={height(20)} />
						</View>
						<Text style={authStyle.titleText}>Sign Up</Text>
						<Spacer height={3} />
						<Text style={authStyle.subtitleText}>
							Enter your credentials to continue
						</Text>
						<Spacer height={height(5)} />
						<AppInput
							title={"Username"}
							placeholder={"Enter Username"}
							onChangeText={() => {}}
						/>
						<Spacer height={height(3)} />
						<AppInput
							title={"Email"}
							placeholder={"Enter Email"}
							onChangeText={() => {}}
							keyboardType='email-address'
						/>
						<Spacer height={height(3)} />
						<AppInput
							title={"Password"}
							placeholder={"Enter Password"}
							autoCorrect={false}
							secureTextEntry={!visibility}
							onRightPress={handleToggleVisibility}
							rightIcon={renderRightIcon}
						/>
						<TouchableOpacity onPress={() => {}}>
							<Text style={authStyle.termsText}>
								By continuing you agree to our{" "}
								<Text style={{ color: AppColors.primary }}>
									Terms of Service
								</Text>{" "}
								and{" "}
								<Text style={{ color: AppColors.primary }}>
									Privacy Policy.
								</Text>
							</Text>
						</TouchableOpacity>
						<Spacer height={height(5)} />
						{/* Button */}
						<AppButton title={"Sign Up"} onPress={() => {}} />
						<Spacer height={height(5)} />
						<View style={{ flexDirection: "row", justifyContent: "center" }}>
							<Text style={authStyle.boldText}>Already have an account? </Text>
							<TouchableOpacity
								onPress={() => {
									navigation.goBack();
								}}
							>
								<Text style={authStyle.boldColorText}>SingIn</Text>
							</TouchableOpacity>
						</View>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
		</ScreenWrapper>
	);
}
