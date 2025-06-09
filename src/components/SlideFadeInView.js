import React, { useEffect } from "react";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	Easing,
} from "react-native-reanimated";

export default function SlideFadeInView({
	children,
	duration = 500,
	delay = 0,
	startOffsetY = 20, // distance to slide from bottom
	style,
}) {
	const opacity = useSharedValue(0);
	const translateY = useSharedValue(startOffsetY);

	useEffect(() => {
		opacity.value = withTiming(1, {
			duration,
			delay,
			easing: Easing.out(Easing.ease),
		});
		translateY.value = withTiming(0, {
			duration,
			delay,
			easing: Easing.out(Easing.ease),
		});
	}, []);

	const animatedStyle = useAnimatedStyle(() => ({
		opacity: opacity.value,
		transform: [{ translateY: translateY.value }],
	}));

	return (
		<Animated.View style={[style, animatedStyle]}>{children}</Animated.View>
	);
}
