import {
	View,
	Text,
	TextInput,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
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

export default function LoginPage() {
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
						<Text style={authStyle.titleText}>Loging</Text>
						<Spacer height={3} />
						<Text style={authStyle.subtitleText}>
							Enter your emails and password
						</Text>
						<Spacer height={height(5)} />
						<AppInput
							title={"Email"}
							placeholder={"Enter Email"}
							onChangeText={() => {}}
							keyboardType='email-address'
						/>

						<Spacer height={height(5)} />
						<AppInput
							title={"Password"}
							placeholder={"Enter Password"}
							autoCorrect={false}
							secureTextEntry={!visibility}
							onRightPress={handleToggleVisibility}
							rightIcon={renderRightIcon}
						/>
						<TouchableOpacity onPress={() => {}}>
							<Text style={authStyle.forgotText}>Forgot Password?</Text>
						</TouchableOpacity>
						<Spacer height={height(5)} />
						<AppButton
							title={"Login"}
							onPress={() => {
								navigation.navigate(AppRoutes.dashboard);
							}}
						/>
						<Spacer height={height(5)} />
						<View style={{ flexDirection: "row", justifyContent: "center" }}>
							<Text style={authStyle.boldText}>Don’t have an account? </Text>
							<TouchableOpacity
								onPress={() => {
									navigation.navigate(AppRoutes.register);
								}}
							>
								<Text style={authStyle.boldColorText}>SingUp</Text>
							</TouchableOpacity>
						</View>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
		</ScreenWrapper>
	);
}
