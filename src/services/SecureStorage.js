import * as SecureStore from "expo-secure-store";

/// Set Value in Secure Storage
export const setStorageValue = async ({key,value}) => {
	try {
		await SecureStore.setItemAsync(key, value);
	} catch (e) {
		console.log(`Secure Storage :: Set Value :: Error :: ${e}`);
	}
};

/// Get Value from Secure Storage
export const getStorageValue = async (key) => {
	try {
		let result = await SecureStore.getItemAsync(key);
		if (result) {
			console.log("🔐 Here's your value 🔐 \n" + result);
		} else {
			console.log("No values stored under that key.");
		}
		return result;
	} catch (e) {
		console.log(`Secure Storage :: Get Value :: Error :: ${e}`);
	}
};
