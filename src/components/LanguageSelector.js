import React, { useContext } from 'react';
import { dictionaryList, languageOptions } from '../languages';
import { LanguageContext } from '../provider/Language';
import { FormControl, Select, MenuItem } from '@material-ui/core';

const LanguageSelector = () => {
  const [, setLanguage] = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    setLanguage(dictionaryList[e.target.value]);
  };

  return (
    <FormControl>
      <Select onChange={handleLanguageChange} defaultValue="en">
        <MenuItem value="en">{languageOptions.en}</MenuItem>
        <MenuItem value="de">{languageOptions.de}</MenuItem>
        {/* {Object.entries(languageOptions).map(([id, name]) => (
					<MenuItem key={id} value={id}>
						{name}
					</MenuItem>
				))} */}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;

// import React, { useContext, useEffect } from 'react';

// import { languageOptions } from '../languages';
// import { LanguageContext } from '../containers/Language';

// export default function LanguageSelector() {
// 	const { userLanguage, userLanguageChange } = useContext(LanguageContext);

// 	// set selected language by calling context method
// 	const handleLanguageChange = (e) => userLanguageChange(e.target.value);

// 	useEffect(() => {
// 		let defaultLanguage = window.localStorage.getItem('rcml-lang');
// 		if (!defaultLanguage) {
// 			defaultLanguage = window.navigator.language.substring(0, 2);
// 		}
// 		userLanguageChange(defaultLanguage);
// 	}, [userLanguageChange]);
// 	console.log(Object.entries(languageOptions));
// 	return (
// 		<select onChange={handleLanguageChange} value={userLanguage}>
// 			{Object.entries(languageOptions).map(([id, name]) => (
// 				<option key={id} value={id}>
// 					{name}
// 				</option>
// 			))}
// 		</select>
// 	);
// }
