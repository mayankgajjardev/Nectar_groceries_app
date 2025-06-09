import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppColors from "../constants/AppColors";
import { fontSp, height } from "../utils/AppDimension";
import AppRoutes from "../constants/AppRoutes";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";
import OnBoardingPage from "../pages/onboarding/OnBoardingPage";
import SignInWithPhonePage from "../pages/auth/SignInWithPhonePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ProductDetailPage from "../pages/products/ProductDetailPage";
import FilterBottomSheet from "../pages/products/FilterBottomSheet";
import CheckoutBottomSheet from "../pages/checkout/CheckoutBottomSheet";
import ShopTab from "../pages/tabs/shop/ShopTab";
import CartTab from "../pages/tabs/cart/CartTab";
import AccountTab from "../pages/tabs/account/AccountTab";
import ExploreTab from "../pages/tabs/explore/ExploreTab";
import FavoriteTab from "../pages/tabs/favorite/FavouriteTab";
import { AppProvider, useAppContext } from "../context/AppContext";
import {
	AccountIcon,
	CartIcon,
	ExploreIcon,
	FavoriteIcon,
	ShopIcon,
} from "../constants/Icons";
import CategoryProductsPage from "../pages/products/CategoryProductsPage";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabsStack() {
	const { userInfo } = useAppContext();

	return (
		<Tab.Navigator
			initialRouteName={AppRoutes.shopTab}
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: AppColors.primary,
				tabBarInactiveTintColor: AppColors.black,
				headerShown: false,
				tabBarLabelStyle: {
					fontSize: fontSp(12),
					paddingTop: 5,
				},
				tabBarStyle: {
					backgroundColor: AppColors.white,
					paddingBottom: 12,
					paddingTop: 6,
					height: height(8.2),
				},
				tabBarIcon: ({ color, size, focused }) => {
					let child;
					switch (route.name) {
						case AppRoutes.shopTab:
							child = (
								<ShopIcon
									color={focused ? AppColors.primary : AppColors.black}
								/>
							);
							break;
						case AppRoutes.exploreTab:
							child = (
								<ExploreIcon
									color={focused ? AppColors.primary : AppColors.black}
								/>
							);
							break;
						case AppRoutes.cartTab:
							child = (
								<CartIcon
									color={focused ? AppColors.primary : AppColors.black}
								/>
							);
							break;
						case AppRoutes.favoriteTab:
							child = (
								<FavoriteIcon
									color={focused ? AppColors.primary : AppColors.black}
								/>
							);
							break;
						case AppRoutes.accountTab:
							child = (
								<AccountIcon
									color={focused ? AppColors.primary : AppColors.black}
								/>
							);
							break;
						default:
							child = (
								<ShopIcon
									color={focused ? AppColors.primary : AppColors.black}
								/>
							);
							break;
					}

					return child;
				},
			})}
		>
			<Tab.Screen
				name={AppRoutes.shopTab}
				component={ShopTab}
				options={{
					tabBarLabel: AppRoutes.shopTab,
				}}
			/>
			<Tab.Screen
				name={AppRoutes.exploreTab}
				component={ExploreTab}
				options={{ tabBarLabel: AppRoutes.exploreTab }}
			/>
			<Tab.Screen
				name={AppRoutes.cartTab}
				children={CartTab}
				options={{ tabBarLabel: AppRoutes.cartTab }}
			/>
			<Tab.Screen
				name={AppRoutes.favoriteTab}
				component={FavoriteTab}
				options={{ tabBarLabel: AppRoutes.favoriteTab }}
			/>
			<Tab.Screen
				name={AppRoutes.accountTab}
				component={AccountTab}
				options={{ tabBarLabel: AppRoutes.accountTab }}
			/>
		</Tab.Navigator>
	);
}

function AppStacks() {
	return (
		<SafeAreaProvider>
			<AppProvider>
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName={AppRoutes.dashboard}
						screenOptions={{
							headerShown: false,
							animation: "slide_from_right",
						}}
					>
						<Stack.Screen
							name={AppRoutes.onBoarding}
							component={OnBoardingPage}
						/>
						<Stack.Screen
							name={AppRoutes.signInWithPhone}
							component={SignInWithPhonePage}
						/>
						<Stack.Screen name={AppRoutes.login} component={LoginPage} />
						<Stack.Screen name={AppRoutes.register} component={RegisterPage} />
						<Stack.Screen
							name={AppRoutes.dashboard}
							component={BottomTabsStack}
						/>

						<Stack.Screen
							name={AppRoutes.categoryProducts}
							component={CategoryProductsPage}
						/>
						<Stack.Screen
							name={AppRoutes.productDetail}
							component={ProductDetailPage}
						/>

						<Stack.Screen
							name={AppRoutes.filterBottomSheet}
							component={FilterBottomSheet}
							options={{
								presentation: "transparentModal",
								animation: "fade_from_bottom",
							}}
						/>
						<Stack.Screen
							name={AppRoutes.checkoutBottomSheet}
							component={CheckoutBottomSheet}
							options={{
								presentation: "transparentModal",
								animation: "fade_from_bottom",
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</AppProvider>
		</SafeAreaProvider>
	);
}

export default AppStacks;
