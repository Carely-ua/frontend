'use client';

import { FC, useState } from 'react';
import classNames from 'classnames';
import { ClinicTypes } from '@/services';
import { ClinicType } from '@/utils/graphql/__generated__/types';
import { Typography } from '@/ui-kit';
import { ClinicCard, GeneralClinicCart } from '../clinic-card';
import { Map } from '../map';
import { SVG } from '../svg';
import { PageSearch, PageSearchProps } from '../page-search';
import { Breadcrumbs, BreadcrumbsProps } from '../breadcrumbs';
import styles from './Search.module.scss';
import { StickyMap } from './StickyMap';

interface MapButtonProps {
  isCardActive: boolean;
  clickHandler(): void;
}

const MapButton: FC<MapButtonProps> = ({ isCardActive, clickHandler }) => {
  return (
    <div className={styles.mapButton} onClick={clickHandler}>
      <Typography component="p" color="white">
        {isCardActive ? 'Показати список' : ' Показати на мапі'}
      </Typography>
      <div className={styles.mapButtonIcon}>
        {isCardActive ? <SVG.Burger width={16} height={16} /> : <SVG.Map width={16} height={16} />}
      </div>
    </div>
  );
};

export interface SearchProps extends PageSearchProps, BreadcrumbsProps {
  clinics: Array<ClinicTypes.Clinic | ClinicTypes.ClinicWithServices>;
  hrefPrefix: string;
  onlyGeneralCard?: boolean;
}

export const Search: FC<SearchProps> = ({
  clinics,
  hrefPrefix,
  onlyGeneralCard,
  title,
  icon,
  breadcrumbs,
}) => {
  const [isCardActive, setIsCardActive] = useState(false);

  const mapButtonHandler = () => {
    return setIsCardActive(prev => !prev);
  };

  if (clinics.length <= 0) return null;

  return (
    <>
      {isCardActive ? (
        <div className={styles.mobileMap}>
          {/* @ts-ignore */}
          <Map data={clinics} />
        </div>
      ) : (
        <div>
          <PageSearch title={title} icon={icon} />
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <div id="Search" className={styles.wrapper}>
            <div className={styles.item}>
              {clinics.map(clinic => {
                if (!clinic) return null;

                if (clinic.clinicType === ClinicType.Clinic && !onlyGeneralCard) {
                  return <ClinicCard hrefPrefix={hrefPrefix} key={clinic.id} {...clinic} />;
                }

                return <GeneralClinicCart hrefPrefix={hrefPrefix} key={clinic.id} {...clinic} />;
              })}
            </div>
            <div className={classNames(styles.item, styles.map)}>
              {/* @ts-ignore */}
              <StickyMap data={clinics} hrefPrefix={hrefPrefix} />
            </div>
          </div>
        </div>
      )}
      <MapButton clickHandler={mapButtonHandler} isCardActive={isCardActive} />
    </>
  );
};
