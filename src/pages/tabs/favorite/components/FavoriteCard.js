import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomImage from "../../../../components/CustomImage";
import { FontFamily } from "../../../../constants/AppEnums";
import { fontSp, height } from "../../../../utils/AppDimension";
import AppColors from "../../../../constants/AppColors";
import Spacer from "../../../../components/Spacer";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function FavoriteCard({ item }) {
	return (
		<View
			style={{
				borderRadius: 16,
				flex: 1,
			}}
		>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<CustomImage
					image={item.image}
					height={height(6)}
					width={height(6)}
					radius={100}
					contentFit='cover'
				/>
				<Spacer width={16} />
				<View style={{ flexDirection: "column", flex: 1 }}>
					<Text
						style={{
							fontFamily: FontFamily.semiBold,
							fontSize: fontSp(16),
						}}
					>
						Sprite Can
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.medium,
							fontSize: fontSp(12),
							color: AppColors.offWhite,
							paddingTop: 2,
						}}
					>
						325ml, Price
					</Text>
				</View>
				<TouchableOpacity onPress={() => {}}>
					<View
						style={{
							padding: 3,
							flexDirection: "row",
							alignItems: "center",
							gap: 8,
						}}
					>
						<Text
							style={{ fontFamily: FontFamily.semiBold, fontSize: fontSp(14) }}
						>
							$1.50
						</Text>
						<MaterialIcons
							name='arrow-forward-ios'
							size={18}
							color={AppColors.black}
						/>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}
