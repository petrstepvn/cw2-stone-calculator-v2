import React, { useContext } from 'react';
import { LanguageContext } from '../../provider/Language';
import { Box, Typography, Slider, Tooltip } from '@material-ui/core';

const LevelSlider = ({ type, value, dispatch, stoneGrade }) => {
  const [language] = useContext(LanguageContext);

  return (
    <Tooltip
      title={
        type === 'stoneRefinementLevel' && stoneGrade > 0 ? (
          <Typography>{language.levelSliderNote}</Typography>
        ) : (
          ''
        )
      }
      arrow
    >
      <Box>
        <Typography variant="subtitle1" color="textSecondary">
          {language.label[type]}:{' '}
          <Typography color="textPrimary" component="span">
            {type === 'stoneRefinementLevel' ? '+' : null}
            {value}
          </Typography>
        </Typography>
        <Slider
          valueLabelDisplay="auto"
          marks
          min={0}
          max={type === 'stoneRefinementLevel' ? 12 : 30}
          value={value}
          onChange={(e, newValue) => {
            if (value !== newValue) {
              dispatch({ type: type, payload: { [type]: newValue } });
            }
          }}
          disabled={
            type === 'stoneRefinementLevel' ? Boolean(stoneGrade) : false
          }
        />
      </Box>
    </Tooltip>
  );
};

export default React.memo(LevelSlider);
