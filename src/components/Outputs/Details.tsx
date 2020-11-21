import React from 'react';
import {
  Table,
  TableBody,
  TableHead,
  Paper,
  TableRow,
  TableCell,
  Typography,
} from '@material-ui/core';
import { thousandSeparator } from '../../utils';

interface Props {
  details: {
    head: {
      primary: string;
      secondary: number;
    };
    body: [
      {
        primary: string;
        secondary: number;
      }
    ];
  };
}

const Details = ({ details }: Props) => {
  console.table(details.body);
  return (
    <Paper variant="outlined" style={{ marginTop: '1.5rem' }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">{details.head.primary}</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6">
                +{thousandSeparator(details.head.secondary)}
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {details.body.map((detail, i) => (
            <TableRow key={i}>
              <TableCell>
                <Typography variant="body2" color="textSecondary">
                  {detail.primary}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2" color="textSecondary">
                  +{thousandSeparator(detail.secondary)}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Details;
