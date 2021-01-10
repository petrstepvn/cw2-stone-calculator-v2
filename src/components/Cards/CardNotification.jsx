import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import LayoutCard from '../Layout/LayoutCard';
import { LanguageContext } from '../../provider/Language';

const useStyles = makeStyles((theme) => ({
  cardBorder: {
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
  },
  title: {
    fontWeight: '700',
    marginBottom: '0.5rem',
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
}));

const CardNotification = () => {
  const classes = useStyles();
  const [language] = useContext(LanguageContext);
  const {
    notification: { title, body },
  } = language;

  return (
    <LayoutCard propClass={classes.cardBorder} width={12} icon={<CloseIcon />}>
      <Typography className={classes.title}>{title}</Typography>
      <Typography>{body}</Typography>
    </LayoutCard>
  );
};

export default CardNotification;
