import { createContext, useContext, useState, useMemo } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	const [userInfo, setUserInfo] = useState(null);

	const appContext = useMemo(
		() => ({
			isDarkTheme,
			setIsDarkTheme,
			userInfo,
			setUserInfo, 
		}),
		[isDarkTheme, userInfo]
	);

	return (
		<AppContext.Provider value={appContext}>{children}</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (context === undefined) {
		throw new Error("useAppContext must be used within an AppProvider");
	}
	return context;
};
