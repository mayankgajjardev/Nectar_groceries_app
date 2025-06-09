import { View, Text } from "react-native";
import React from "react";
import CustomImage from "./CustomImage";
import { height } from "../utils/AppDimension";
import AppAssets from "../constants/AppAssets";

export default function Loader() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
			}}
		>
			<CustomImage
				image={AppAssets.loader}
				height={height(10)}
				width={height(10)}
			/>
		</View>
	);
}
