import { SVG } from '../svg';
import styles from './PhoneButton.module.scss';

export const PhoneButton = () => {
  const pressHandler = () => {
    //TODO: implement popup for it
    console.log('pressHandler');
  };

  return (
    <div className={styles.phoneButton} onClick={pressHandler}>
      <SVG.Phone width={24} height={24} />
    </div>
  );
};
