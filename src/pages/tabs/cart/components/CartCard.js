import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import React from "react";
import { fontSp, height } from "../../../../utils/AppDimension";
import CustomImage from "../../../../components/CustomImage";
import AntDesign from "@expo/vector-icons/AntDesign";
import Spacer from "../../../../components/Spacer";
import { FontFamily } from "../../../../constants/AppEnums";
import AppColors from "../../../../constants/AppColors";

export default function CartCard({ item, onDelete, onIncrease, onDecrease }) {
	return (
		<View
			style={{
				borderRadius: 16,
				flex: 1,
			}}
		>
			<View style={{ flexDirection: "row" }}>
				<CustomImage
					image={item.image}
					height={height(6)}
					width={height(6)}
					radius={100}
					contentFit='cover'
				/>
				<Spacer width={12} />
				<View style={{ flexDirection: "column", flex: 1 }}>
					<Text
						style={{
							fontFamily: FontFamily.semiBold,
							fontSize: fontSp(16),
						}}
					>
						Bell Pepper Red
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.medium,
							fontSize: fontSp(12),
							color: AppColors.offWhite,
							paddingTop: 2,
						}}
					>
						1kg, Price
					</Text>
					<Spacer height={14} />
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<TouchableOpacity onPress={onDecrease}>
								<View
									style={{
										borderRadius: 10,
										borderColor: AppColors.border,
										padding: 4,
										borderWidth: 1,
									}}
								>
									<AntDesign name='minus' size={24} color={AppColors.black} />
								</View>
							</TouchableOpacity>
							<Spacer width={16} />
							<Text
								style={{
									fontFamily: FontFamily.bold,
									fontSize: fontSp(12),
								}}
							>
								1
							</Text>
							<Spacer width={16} />
							<TouchableOpacity onPress={onIncrease}>
								<View
									style={{
										borderRadius: 10,
										borderColor: AppColors.border,
										padding: 5,
										borderWidth: 1,
									}}
								>
									<AntDesign name='plus' size={22} color={AppColors.primary} />
								</View>
							</TouchableOpacity>
						</View>
						<Text
							style={{
								fontSize: fontSp(14),
								fontFamily: FontFamily.semiBold,
							}}
						>
							$4.99
						</Text>
					</View>
				</View>
				<TouchableOpacity onPress={onDelete}>
					<View
						style={{
							padding: 3,
						}}
					>
						<AntDesign name='close' size={24} color={AppColors.offWhite1} />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}
