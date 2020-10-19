import React, { useState, createContext } from 'react';
import { dictionaryList } from '../languages';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(dictionaryList.en);

	return (
		<LanguageContext.Provider value={[language, setLanguage]}>
			{children}
		</LanguageContext.Provider>
	);
};

// export function LanguageProvider({ children }) {
// 	const [userLanguage, setUserLanguage] = useState('en');

// 	const provider = {
// 		userLanguage,
// 		dictionary: dictionaryList[userLanguage],
// 		userLanguageChange: (selected) => {
// 			const newLanguage = languageOptions[selected] ? selected : 'en';
// 			setUserLanguage(newLanguage);
// 			window.localStorage.setItem('rcml-lang', newLanguage);
// 		},
// 	};

// 	return (
// 		<LanguageContext.Provider value={provider}>
// 			{children}
// 		</LanguageContext.Provider>
// 	);
// }
