import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomImage from "../../../../components/CustomImage";
import AppAssets from "../../../../constants/AppAssets";
import { fontSp, height, width } from "../../../../utils/AppDimension";
import AppColors from "../../../../constants/AppColors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { FontFamily } from "../../../../constants/AppEnums";
import Spacer from "../../../../components/Spacer";

export default function ProductCard({ item, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View
				style={{
					borderColor: AppColors.border,
					borderWidth: 2,
					borderRadius: 16,
					paddingHorizontal: 10,
					width: width(45),
					height: height(28),
				}}
			>
				<View
					style={{
						justifyContent: "space-between",
						flex: 1,
						paddingTop: 20,
					}}
				>
					<View>
						<View
							style={{
								alignItems: "center",
							}}
						>
							<CustomImage
								image={item ? item.image : AppAssets.tometo}
								height={height(10)}
								width={height(10)}
								radius={100}
								contentFit='cover'
							/>
						</View>
						<Spacer height={10} />
						<Text
							style={{
								fontFamily: FontFamily.semiBold,
								fontSize: fontSp(15),
							}}
							numberOfLines={2}
						>
							{item ? item.title : "Bell Pepper Red"}
						</Text>
						<Spacer height={1} />
						<Text
							style={{
								fontFamily: FontFamily.medium,
								fontSize: fontSp(12),
								color: AppColors.offWhite,
							}}
							numberOfLines={1}
						>
							1kg, Price
						</Text>
					</View>
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						marginBottom: 10,
					}}
				>
					<Text
						style={{ fontFamily: FontFamily.semiBold, fontSize: fontSp(16) }}
					>
						$4.99
					</Text>
					<TouchableOpacity>
						<View
							style={{
								borderRadius: 16,
								backgroundColor: AppColors.primary,
								paddingHorizontal: 11,
								paddingVertical: 8,
							}}
						>
							<FontAwesome6 name='add' size={22} color={AppColors.white} />
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableOpacity>
	);
}
