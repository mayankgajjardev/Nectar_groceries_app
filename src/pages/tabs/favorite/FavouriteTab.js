import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import AppStyles from "../../../constants/AppStyles";
import AppData from "../../../data/AppData";
import AppColors from "../../../constants/AppColors";
import { fontSp, fullWidth, height } from "../../../utils/AppDimension";
import { FontFamily } from "../../../constants/AppEnums";
import FavoriteCard from "./components/FavoriteCard";
import Divider from "../../../components/Divider";
import AppBar from "../../../components/AppBar";

export default function FavoriteTab() {
	return (
		<ScreenWrapper>
			<View style={AppStyles.container}>
				<AppBar title={"Favorite"} />
				<FlatList
					data={AppData.products}
					renderItem={(e) => <FavoriteCard item={e.item} />}
					keyExtractor={(e) => e.id.toString()}
					contentContainerStyle={{
						paddingHorizontal: 20,
						paddingTop: 10,
						paddingBottom: height(8.5),
					}}
					ItemSeparatorComponent={(e) => (
						<View
							style={{
								height: 1,
								width: fullWidth - 40,
								backgroundColor: AppColors.border,
								marginVertical: 20,
							}}
						/>
					)}
				/>
				<TouchableOpacity onPress={() => {}}>
					<View
						style={{
							width: fullWidth - 40,
							marginHorizontal: 20,
							height: height(6),
							backgroundColor: AppColors.primary,
							borderRadius: 16,
							justifyContent: "center",
							alignItems: "center",
							position: "absolute",
							bottom: 10,
							zIndex: 10,
						}}
					>
						<Text
							style={{
								fontFamily: FontFamily.semiBold,
								fontSize: fontSp(14),
								color: AppColors.white,
							}}
						>
							Add All To Cart
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</ScreenWrapper>
	);
}
