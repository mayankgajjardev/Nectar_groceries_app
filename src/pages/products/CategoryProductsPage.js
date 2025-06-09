import { View, Text, FlatList } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import AppStyles from "../../constants/AppStyles";
import { useRoute } from "@react-navigation/native";
import AppData from "../../data/AppData";
import ProductsHeader from "./components/ProductsHeader";
import ProductCard from "../tabs/shop/components/ProductCard";

export default function CategoryProductsPage() {
	const route = useRoute();
	const { title } = route.params;
	return (
		<ScreenWrapper>
			<View style={AppStyles.container}>
				<ProductsHeader title={title} />
				<FlatList
					data={AppData.exclusiveProducts}
					renderItem={(e) => <ProductCard item={e.item} />}
					keyExtractor={(e) => e.id.toString()}
					numColumns={2}
					contentContainerStyle={{
						paddingRight: 20,
						paddingLeft: 15,
						paddingTop: 10,
						paddingBottom: 20,
						gap: 12,
					}}
					columnWrapperStyle={{
						justifyContent: "space-between",
						gap: 12,
					}}
				/>
			</View>
		</ScreenWrapper>
	);
}
