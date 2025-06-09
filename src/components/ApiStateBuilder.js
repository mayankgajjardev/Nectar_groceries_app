import React from "react";
import { View, Text } from "react-native";
import Loader from "./Loader";

const ApiStateBuilder = ({
	data,
	error,
	loading,
	onLoading,
	onError,
	onData,
}) => {
	if (loading) {
		return onLoading ? onLoading() : <Loader />;
	}

	if (error) {
		return onError ? (
			onError(error)
		) : (
			<View style={{ padding: 16 }}>
				<Text style={{ color: "red" }}>Error: {error.message}</Text>
			</View>
		);
	}

	if (data) {
		return onData(data);
	}

	return null;
};

export default ApiStateBuilder;
