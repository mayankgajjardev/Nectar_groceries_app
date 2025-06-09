import { View, Text } from "react-native";
import React from "react";
import shopStyles from "../Shop.style";
import { FillLogo, LocationIcon } from "../../../../constants/Icons";

export default function ShopHeader() {
	return (
		<View style={shopStyles.headerWrapper}>
			<View style={{ paddingLeft: 10 }}>
				<FillLogo height={40} />
			</View>
			<View style={shopStyles.locationWrapper}>
				<LocationIcon />
				<Text style={shopStyles.headerText}>Dhaka, Banassre</Text>
			</View>
		</View>
	);
}
