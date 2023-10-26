'use client';

import { forwardRef } from 'react';
import { useSnackbar, SnackbarContent, CustomContentProps } from 'notistack';
import Typography from '@mui/material/Typography';
import { SVG } from '../svg';
import styles from './Snackbar.module.scss';

interface ReportCompleteProps extends CustomContentProps {
  allowDownload?: boolean;
}

export const Snackbar = forwardRef<HTMLDivElement, ReportCompleteProps>(({ id, ...props }, ref) => {
  return (
    <SnackbarContent ref={ref}>
      <div className={styles.notification}>
        <div className={styles.icon}>
          <SVG.CheckMark />
        </div>
        <Typography component="h5">{props.message}</Typography>
      </div>
    </SnackbarContent>
  );
});

Snackbar.displayName = 'Snackbar';
