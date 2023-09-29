import { ReactNode } from 'react';
import { Breadcrumbs as BreadcrumbsMUI } from '@mui/material';
import Link from 'next/link';
import { Typography } from '@/ui-kit';
import { SVG } from '../svg';
import styles from './Breadcrumbs.module.scss';

export type CrumbItem = {
  label: ReactNode;
  path: string;
};

export type BreadcrumbsProps = {
  breadcrumbs: CrumbItem[];
};

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <div className={styles.breadcrumbs}>
      <BreadcrumbsMUI separator="/" aria-label="breadcrumb">
        <Link href="/">
          <div className={styles.homeIcon}>
            <SVG.Home width={19} height={19} />
          </div>
        </Link>
        {breadcrumbs.map((crumb, i) => {
          const isLastItem = i === breadcrumbs.length - 1;
          if (!isLastItem) {
            return (
              <>
                <Link className={styles.item} href={crumb.path} key={i}>
                  <Typography component="p" color="dark-grey">
                    {crumb.label}
                  </Typography>
                </Link>
              </>
            );
          }

          return (
            <div key={i}>
              <Typography component="p" color="dark-grey">
                {crumb.label}
              </Typography>
            </div>
          );
        })}
      </BreadcrumbsMUI>
    </div>
  );
};
