import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import AppStyles from "../../../constants/AppStyles";
import exploreStyle from "./Explore.style";
import Spacer from "../../../components/Spacer";
import SearchBar from "../../tabs/shop/components/SearchBar";
import AppData from "../../../data/AppData";
import { height } from "../../../utils/AppDimension";
import CategoryCard from "./components/CategoryCard";
import AppBar from "../../../components/AppBar";
import { useNavigation } from "@react-navigation/native";
import AppRoutes from "../../../constants/AppRoutes";

export default function ExploreTab() {
	const navigation = useNavigation();
	return (
		<ScreenWrapper>
			<View style={AppStyles.container}>
				<AppBar title={"Find Products"} hideBorder={true} />
				<FlatList
					data={AppData.products}
					renderItem={(e) => (
						<CategoryCard
							item={e.item}
							onPress={() => {
								navigation.navigate(AppRoutes.categoryProducts, {
									title: e.item.title,
								});
							}}
						/>
					)}
					keyExtractor={(e) => e.id.toString()}
					numColumns={2}
					contentContainerStyle={{
						paddingHorizontal: 20,
						paddingTop: 10,
						paddingBottom: 20,
						gap: 12,
					}}
					columnWrapperStyle={{
						justifyContent: "space-between",
						gap: 12,
					}}
					ListHeaderComponent={
						<>
							<SearchBar marginHorizontal={0.1} />
							<Spacer height={10} />
						</>
					}
				/>
			</View>
		</ScreenWrapper>
	);
}
