import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import AppStyles from "../../constants/AppStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import Spacer from "../../components/Spacer";
import { fontSp, height } from "../../utils/AppDimension";
import AppColors from "../../constants/AppColors";
import { FontFamily } from "../../constants/AppEnums";
import AppButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import CheckBoxField from "./components/CheckBoxField";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";

export default function FilterBottomSheet() {
	const navigation = useNavigation();

	return (
		<ScreenWrapper>
			<Animated.View
				style={AppStyles.container}
				exiting={SlideOutDown.duration(300)}
			>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						paddingHorizontal: 20,
					}}
				>
					<TouchableOpacity
						onPress={() => {
							navigation.goBack();
						}}
					>
						<Ionicons name='close' size={30} color='black' />
					</TouchableOpacity>
					<Text style={AppStyles.headerText}>Filters</Text>
					<Spacer width={24} />
				</View>
				<Spacer height={height(1)} />
				<View
					style={{
						flex: 1,
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
						backgroundColor: AppColors.secondary,
						paddingHorizontal: 20,
					}}
				>
					<Spacer height={20} />
					<Text style={{ fontFamily: FontFamily.bold, fontSize: fontSp(16) }}>
						Categories
					</Text>
					<Spacer height={10} />
					<CheckBoxField
						title={"Eggs"}
						isSelected={false}
						onPress={(isChecked) => {}}
					/>
					<CheckBoxField
						title={"Noodles & Pasta"}
						isSelected={false}
						onPress={(isChecked) => {}}
					/>
					<CheckBoxField
						title={"Chips & Crisps"}
						isSelected={false}
						onPress={(isChecked) => {}}
					/>
					<CheckBoxField
						title={"Fast Food"}
						isSelected={false}
						onPress={(isChecked) => {}}
					/>

					<Spacer height={16} />

					<Text style={{ fontFamily: FontFamily.bold, fontSize: fontSp(16) }}>
						Brand
					</Text>
					<Spacer height={10} />
					<CheckBoxField
						title={"Individual Callection"}
						isSelected={false}
						onPress={(isChecked) => {}}
					/>
					<CheckBoxField
						title={"Cocola"}
						isSelected={false}
						onPress={(isChecked) => {}}
					/>
					<CheckBoxField
						title={"Ifad"}
						isSelected={false}
						onPress={(isChecked) => {}}
					/>
					<CheckBoxField
						title={"Kazi Farmas"}
						isSelected={false}
						onPress={(isChecked) => {}}
					/>
				</View>
				<AppButton
					title={"Apply Filter"}
					onPress={() => {
						navigation.goBack();
					}}
					borderRadius={16}
				/>
				<Spacer height={height(3)} />
			</Animated.View>
		</ScreenWrapper>
	);
}
