import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontFamily } from "../../../../constants/AppEnums";
import { fontSp, fullWidth } from "../../../../utils/AppDimension";
import AppColors from "../../../../constants/AppColors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Divider from "../../../../components/Divider";

export default function AccountItemCard({ icon, title, onPress }) {
	return (
		<>
			<TouchableOpacity onPress={onPress}>
				<View
					style={{
						flexDirection: "row",
						paddingVertical: 20,
						paddingHorizontal: 20,
						justifyContent: "space-between",
					}}
				>
					<View style={{ flexDirection: "row", gap: 14 }}>
						{icon}
						<Text
							style={{
								fontFamily: FontFamily.semiBold,
								fontSize: fontSp(14),
							}}
						>
							{title}
						</Text>
					</View>
					<MaterialIcons
						name='arrow-forward-ios'
						size={20}
						color={AppColors.black}
					/>
				</View>
			</TouchableOpacity>
			<Divider height={1} width={fullWidth} color={AppColors.border} />
		</>
	);
}
