import { Dimensions, Platform, StatusBar } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export const size = (size) => {
	const multiplier = 2.2;
	return ((SCREEN_HEIGHT / SCREEN_WIDTH) * size) / multiplier;
};

export const width = (percentage) => {
	return (SCREEN_WIDTH / 100) * percentage;
};

export const fullWidth = SCREEN_WIDTH;
export const fullHeight = SCREEN_HEIGHT;

export const height = (percentage) => {
	return (SCREEN_HEIGHT / 100) * percentage;
};

export const vh = (percentage) => {
	return (SCREEN_HEIGHT / 100) * percentage;
};

export const fontSp = (fontSize) => {
	const multiplier = 680;
	const standardLength =
		SCREEN_WIDTH > SCREEN_HEIGHT ? SCREEN_WIDTH : SCREEN_HEIGHT;
	const offset =
		SCREEN_WIDTH > SCREEN_HEIGHT
			? 0
			: Platform.OS === "ios"
			? 78
			: StatusBar.currentHeight ?? 0;
	const deviceHeight =
		Platform.OS === "android" ? standardLength - offset : standardLength;
	const heightPercent = (fontSize * deviceHeight) / multiplier;
	return Math.round(heightPercent);
};
export const getHitSlop = () => ({
	top: size(10),
	bottom: size(10),
	left: size(10),
	right: size(10),
});
