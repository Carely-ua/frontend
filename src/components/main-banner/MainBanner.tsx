import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { Button, Typography } from '@/ui-kit';
import { SearchBlock } from '../search-block';
import { SVG } from '../svg';
import styles from './MainBanner.module.scss';

export const MainBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div>
          <Typography component="h1" color="white" className={styles.title}>
            Онлайн медицина з турботую про користувача і його гаманець
          </Typography>
          <Typography component="h3" color="white">
            Lorem ipsum dolor sit amet consectetur. Aliquam urna egestas est lectus. Magna eu sapien
            in nisl tempor faucibus eget amet aliquam.
          </Typography>
        </div>
      </div>
      <div className={styles.search}>
        <SearchBlock />
      </div>
      <div className={styles.labBlock}>
        <Link href="/labs" className={styles.labBlockButton}>
          <Button buttonType="white">Знайти лабораторію</Button>
        </Link>
        <div className={styles.rating}>
          <SVG.Star width={28} height={28} />
          <Typography component="h3" color="secondary">
            5
          </Typography>
        </div>
        <div className={styles.circle} />
        <Image
          src="/images/main-banner-decoration-1.svg"
          alt="decoration"
          width={145}
          height={54}
        />
      </div>
      <div className={styles.clinicBlock}>
        <Link href="/clinics" className={styles.clinicBlockButton}>
          <Button>Знайти клініку</Button>
        </Link>
        <div className={styles.rating}>
          <SVG.Star width={28} height={28} />
          <Typography component="h3" color="secondary">
            5
          </Typography>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/images/oxford-medical.png" alt="decoration" width={135} height={51} />
        </div>
        <div className={styles.decoration}>
          <Image
            src="/images/main-banner-decoration-2.svg"
            alt="decoration"
            width={133}
            height={27}
          />
          <Image
            src="/images/main-banner-decoration-3.svg"
            alt="decoration"
            width={233}
            height={48}
          />
        </div>
      </div>
      <div className={styles.doctorBlock}>
        <Link href="/consultations" className={styles.doctorBlockButton}>
          <Button buttonType="secondary">Обрати лікаря</Button>
        </Link>
        <div className={styles.doctorImage}>
          <Image src="/images/gastroenterologist.svg" alt="doctor" width={30} height={30} />
        </div>
        <Image
          src="/images/main-banner-decoration-4.svg"
          alt="decoration"
          width={145}
          height={54}
        />
      </div>
      <div className={styles.heart}>
        <Image src="/images/heart.png" alt="heart" width={194} height={170} />
      </div>
      <div className={styles.snake}>
        <Image src="/images/snake.png" alt="snake" width={162} height={193} />
      </div>
      <div className={styles.clinic}>
        <Image src="/images/clinic.png" alt="clinic" width={243} height={185} />
      </div>
    </div>
  );
};
