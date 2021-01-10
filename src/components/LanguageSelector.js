import React, { useContext, useState } from 'react';
import { dictionaryList, languageOptions } from '../languages';
import { LanguageContext } from '../provider/Language';
import {
  FormControl,
  Select,
  MenuItem,
  Button,
  Menu,
  Box,
} from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const LanguageSelector = () => {
  const [language, setLanguage] = useContext(LanguageContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLanguageChange = (e) => {
    setLanguage(dictionaryList[e.target.getAttribute('data-lng')]);
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        startIcon={<TranslateIcon />}
        endIcon={<ExpandMoreIcon />}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {languageOptions[language.selectedLanguage]}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLanguageChange} data-lng="en">
          {languageOptions.en}
        </MenuItem>
        <MenuItem onClick={handleLanguageChange} data-lng="de">
          {languageOptions.de}
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
