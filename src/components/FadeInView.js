import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	Easing,
} from "react-native-reanimated";

export default function FadeInView({
	duration = 500,
	style,
	children,
	delay = 0,
}) {
	const opacity = useSharedValue(0);

	useEffect(() => {
		opacity.value = withTiming(1, {
			duration,
			delay,
			easing: Easing.inOut(Easing.ease),
		});
	}, []);

	const animatedStyle = useAnimatedStyle(() => ({
		opacity: opacity.value,
	}));

	return (
		<Animated.View style={[style, animatedStyle]}>{children}</Animated.View>
	);
}
