import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import AppAssets from "../constants/AppAssets";
import AppColors from "../constants/AppColors";

const CustomImage = (props) => {
	const {
		image,
		height,
		width = "100%",
		radius = 13,
		style,
		loaderSize = 30,
		contentFit,
	} = props;
	const [loaded, setLoaded] = useState(false);

	return (
		<View
			style={[
				styles.imageContainer,
				{
					height: height,
					width: width,
					borderRadius: radius,
					justifyContent: "center",
					alignItems: "center",
				},
				style,
			]}
		>
			{!loaded && (
				<View style={styles.loaderContainer}>
					<ActivityIndicator size={loaderSize} color={AppColors.primary} />
				</View>
			)}
			<Image
				source={typeof image === "string" ? image : image}
				style={{
					width: width,
					height: height,
					borderRadius: radius,
				}}
				onLoadEnd={() => setLoaded(true)}
				contentFit={contentFit ? contentFit : "contain"}
				transition={100}
				transitionDuration={300}
				transitionEasing='ease-in-out'
				transitionTimingFunction='ease-in-out'
			/>
		</View>
	);
};

export default CustomImage;

const styles = StyleSheet.create({
	imageContainer: {
		overflow: "hidden",
	},
	loaderContainer: {
		position: "absolute",
		zIndex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
