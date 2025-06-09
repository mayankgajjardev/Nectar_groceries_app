import AppAssets from "./src/constants/AppAssets";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import AppStacks from "./src/navigation/AppNavigator";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();
function AppLayout() {
	const [isAppReady, setIsAppReady] = useState(false);
	const [fontsLoaded, fontError] = useFonts({
		regular: AppAssets.regular,
		medium: AppAssets.medium,
		light: AppAssets.light,
		semiBold: AppAssets.semiBold,
		bold: AppAssets.bold,
	});
	useEffect(() => {
		if (fontsLoaded || fontError) {
			setIsAppReady(true);
		}
	}, [fontsLoaded, fontError]);

	const onLayoutRootView = useCallback(async () => {
		if (isAppReady && fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [isAppReady, fontsLoaded]);

	if (!fontsLoaded || !isAppReady) {
		return null;
	}

	return (
		<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
			<AppStacks />
		</View>
	);
}

export default function App() {
	return <AppLayout />;
}
