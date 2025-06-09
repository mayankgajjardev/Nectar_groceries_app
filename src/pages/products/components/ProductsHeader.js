import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Filter } from "../../../constants/Icons";
import AppStyles from "../../../constants/AppStyles";
import { useNavigation } from "@react-navigation/native";
import AppRoutes from "../../../constants/AppRoutes";

export default function ProductsHeader({ title }) {
	const navigation = useNavigation();
	return (
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
				<MaterialIcons name='arrow-back-ios' size={24} color='black' />
			</TouchableOpacity>
			<Text style={AppStyles.headerText}>{title || "Products"}</Text>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate(AppRoutes.filterBottomSheet);
				}}
			>
				<Filter />
			</TouchableOpacity>
		</View>
	);
}
