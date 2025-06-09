import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableHighlight,
} from "react-native";
import React, { useEffect } from "react";
import { FontFamily } from "../constants/AppEnums";
import { fontSp, height } from "../utils/AppDimension";
import AppColors from "../constants/AppColors";
import Spacer from "./Spacer";
import PropTypes from "prop-types";

function AppInput({
	title,
	initialValue,
	placeholder,
	autoCapitalize = false,
	autoCorrect = true,
	readOnly = false,
	multiline = false,
	secureTextEntry = false,
	keyboardType = "default",
	onChangeText,
	onBlur,
	onKeyPress,
	onRightPress,
	leftIcon = null,
	rightIcon = null,
}) {
	return (
		<View style={{}}>
			<Text style={{ fontFamily: FontFamily.semiBold }}>{title}</Text>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					borderBottomWidth: 1,
					borderBottomColor: AppColors.border,
					// height: height(6),
				}}
			>
				{/* Left Icon */}
				{leftIcon && (
					<View style={{ marginRight: 10 }}>
						{typeof leftIcon === "function" ? leftIcon() : leftIcon}
					</View>
				)}

				<TextInput
					onChangeText={onChangeText}
					autoCapitalize={autoCapitalize}
					autoCorrect={autoCorrect}
					value={initialValue}
					keyboardType={keyboardType}
					multiline={multiline}
					onBlur={onBlur}
					onKeyPress={onKeyPress}
					readOnly={readOnly}
					placeholder={placeholder || "Write something"}
					secureTextEntry={secureTextEntry || false}
					style={{
						height: height(6),
						borderBottomWidth: 1,
						borderBottomColor: AppColors.border,
						padding: 0,
						flex: 1,
						fontSize: fontSp(14),
					}}
				/>
				{/* Right Icon */}
				{rightIcon && (
					<TouchableHighlight
						onPress={onRightPress}
						underlayColor={AppColors.border}
						style={{
							padding: 10,
							position: "absolute",
							borderRadius: 50,
							right: 4,
						}}
					>
						{typeof rightIcon === "function" ? rightIcon() : rightIcon}
					</TouchableHighlight>
				)}
			</View>
		</View>
	);
}

// ✅ Add PropTypes
AppInput.propTypes = {
	title: PropTypes.string.isRequired,
	initialValue: PropTypes.string,
	placeholder: PropTypes.string,
	autoCapitalize: PropTypes.bool,
	readOnly: PropTypes.bool,
	multiline: PropTypes.bool,
	keyboardType: PropTypes.oneOf([
		"default",
		"email-address",
		"numeric",
		"phone-pad",
		"number-pad",
		"decimal-pad",
		"visible-password",
		"ascii-capable",
		"numbers-and-punctuation",
		"url",
		"name-phone-pad",
		"twitter",
		"web-search",
	]),
	onChangeText: PropTypes.func,
	onBlur: PropTypes.func,
	onKeyPress: PropTypes.func,
	leftIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
	rightIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
	secureTextEntry: PropTypes.bool,
};

export default React.memo(AppInput);
