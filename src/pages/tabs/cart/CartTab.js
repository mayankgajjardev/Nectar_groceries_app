import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import AppStyles from "../../../constants/AppStyles";
import cartStyle from "./Cart.style";
import CartCard from "./components/CartCard";
import AppData from "../../../data/AppData";
import Spacer from "../../../components/Spacer";
import {
	fontSp,
	fullHeight,
	fullWidth,
	height,
	width,
} from "../../../utils/AppDimension";
import AppColors from "../../../constants/AppColors";
import { FontFamily } from "../../../constants/AppEnums";
import AppBar from "../../../components/AppBar";

export default function CartTab() {
	return (
		<ScreenWrapper>
			<View style={AppStyles.container}>
				<AppBar title={"My Cart"} />
				<FlatList
					data={AppData.products}
					renderItem={(e) => <CartCard item={e.item} onDelete={() => {}} />}
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
							Go to Checkout
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</ScreenWrapper>
	);
}
