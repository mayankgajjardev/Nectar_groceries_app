import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import AppStyle from "../../../constants/AppStyles";
import AccountHeader from "./components/AccountHeader";
import Divider from "../../../components/Divider";
import AccountItemCard from "./components/AccountItemCard";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
	About,
	Help,
	LocationOutline,
	Logout,
	MyDetails,
	Notification,
	Orders,
	Payment,
	PromoCode,
} from "../../../constants/Icons";
import Spacer from "../../../components/Spacer";
import { fontSp, height } from "../../../utils/AppDimension";
import { FontFamily } from "../../../constants/AppEnums";
import AppColors from "../../../constants/AppColors";

export default function AccountTab() {
	return (
		<ScreenWrapper>
			<View style={AppStyle.container}>
				<AccountHeader />
				<Divider />
				<ScrollView>
					<AccountItemCard
						title={"Orders"}
						icon={<Orders />}
						onPress={() => {}}
					/>
					<AccountItemCard
						title={"My Details"}
						icon={<MyDetails />}
						onPress={() => {}}
					/>
					<AccountItemCard
						title={"Delivery Address"}
						icon={<LocationOutline />}
						onPress={() => {}}
					/>
					<AccountItemCard
						title={"Payment Methods"}
						icon={<Payment />}
						onPress={() => {}}
					/>
					<AccountItemCard
						title={"Promo Cord"}
						icon={<PromoCode />}
						onPress={() => {}}
					/>
					<AccountItemCard
						title={"Notification"}
						icon={<Notification />}
						onPress={() => {}}
					/>
					<AccountItemCard title={"Help"} icon={<Help />} onPress={() => {}} />
					<AccountItemCard
						title={"About"}
						icon={<About />}
						onPress={() => {}}
					/>
					<Spacer height={height(5)} />
					<TouchableOpacity onPress={() => {}}>
						<View
							style={{
								flexDirection: "row",
								backgroundColor: AppColors.secondary,
								paddingVertical: 18,
								marginHorizontal: 20,
								borderRadius: 16,
								paddingHorizontal: 20,
								justifyContent: "space-between",
							}}
						>
							<MaterialIcons
								name='logout'
								size={24}
								color={AppColors.primary}
							/>
							<Text
								style={{
									fontFamily: FontFamily.semiBold,
									fontSize: fontSp(16),
									color: AppColors.primary,
								}}
							>
								Log Out
							</Text>
							<Spacer width={22} />
						</View>
					</TouchableOpacity>
				</ScrollView>
			</View>
		</ScreenWrapper>
	);
}
