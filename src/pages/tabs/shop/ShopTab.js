import { View, Text, TextInput, FlatList, ScrollView } from "react-native";
import React from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";
import AppStyles from "../../../constants/AppStyles";
import shopStyles from "./Shop.style";
import ShopHeader from "./components/ShopHeader";
import AppColors from "../../../constants/AppColors";
import Spacer from "../../../components/Spacer";
import SearchBar from "./components/SearchBar";
import CustomImage from "../../../components/CustomImage";
import AppAssets from "../../../constants/AppAssets";
import { fontSp, fullWidth, height } from "../../../utils/AppDimension";
import { FontFamily } from "../../../constants/AppEnums";
import SectionHeader from "./components/SectionHeader";
import ProductCard from "./components/ProductCard";
import GrocerieCard from "./components/GrocerieCard";
import groceries from "../../../data/AppData";
import AppData from "../../../data/AppData";

export default function ShopTab() {
	return (
		<ScreenWrapper>
			<ScrollView>
				<View style={AppStyles.container}>
					<ShopHeader />
					<Spacer height={22} />
					<SearchBar />
					<Spacer height={16} />
					<CustomImage
						image={AppAssets.banner}
						height={height(14)}
						width={fullWidth - 40}
						contentFit='cover'
						radius={16}
						style={{
							marginHorizontal: 20,
						}}
					/>
					<Spacer height={16} />
					<SectionHeader title={"Exclusive Offer"} onPress={() => {}} />
					<Spacer height={10} />
					<View style={{ height: height(28) }}>
						<FlatList
							data={[0, 1, 2, 3, 4, 5, 6]}
							renderItem={(e) => <ProductCard />}
							keyExtractor={(e) => e.toString()}
							horizontal
							contentContainerStyle={{
								paddingHorizontal: 20,
							}}
							ItemSeparatorComponent={(e) => <Spacer width={14} />}
							showsHorizontalScrollIndicator={false}
						/>
					</View>
					<Spacer height={16} />

					<SectionHeader title={"Best Selling"} onPress={() => {}} />
					<Spacer height={10} />
					<View style={{ height: height(28) }}>
						<FlatList
							data={[0, 1, 2, 3, 4, 5, 6]}
							renderItem={(e) => <ProductCard />}
							keyExtractor={(e) => e.toString()}
							horizontal
							contentContainerStyle={{
								paddingHorizontal: 20,
							}}
							ItemSeparatorComponent={(e) => <Spacer width={14} />}
							showsHorizontalScrollIndicator={false}
						/>
					</View>
					<Spacer height={16} />

					<SectionHeader title={"Groceries"} onPress={() => {}} />
					<Spacer height={10} />
					<View style={{ height: height(13) }}>
						<FlatList
							data={AppData.groceries}
							renderItem={(e) => (
								<GrocerieCard item={e.item} onPress={() => {}} />
							)}
							keyExtractor={(e) => e.id.toString()}
							horizontal
							contentContainerStyle={{
								paddingHorizontal: 20,
							}}
							ItemSeparatorComponent={(e) => <Spacer width={14} />}
							showsHorizontalScrollIndicator={false}
						/>
					</View>
					<Spacer height={14} />
					<View style={{ height: height(28) }}>
						<FlatList
							data={[0, 1, 2, 3, 4, 5, 6]}
							renderItem={(e) => <ProductCard />}
							keyExtractor={(e) => e.toString()}
							horizontal
							contentContainerStyle={{
								paddingHorizontal: 20,
							}}
							ItemSeparatorComponent={(e) => <Spacer width={14} />}
							showsHorizontalScrollIndicator={false}
						/>
					</View>
					<Spacer height={16} />
				</View>
			</ScrollView>
		</ScreenWrapper>
	);
}
