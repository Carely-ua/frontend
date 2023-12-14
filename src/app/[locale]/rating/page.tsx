import { Typography } from '@mui/material';
import styles from './Rating.module.scss';

const Rating = () => {
  return (
    <div className={styles.container}>
      <Typography className={styles.title} component="h1">
        Як обрати кращу клініку чи лабораторію?
      </Typography>
      <Typography component="p">
        Звичайно, всі намагаються обирати заклади поблизу від дому чи роботи, але як бути впевненим,
        що там вам нададуть найкраще лікування? Це питання вирішити дуже просто - зверніть увагу на
        рейтинг медичного закладу на нашому сайті!
      </Typography>
      <ul className={styles.list}>
        <li>
          <Typography className={styles.subTitle} component="h3">
            Чому рейтингу можна довіряти?
          </Typography>
          <Typography component="p">
            На сайті Carely відгук може залишити тільки реальний пацієнт і тільки після того, як він
            побував на прийомі у клініці чи скористався послугами лабораторії. Ми проводимо
            двосторонню аутентифікацію кожного користувача перед тим, як опублікувати його відгук і
            внести зміни у рейтинг закладу лікування.{' '}
          </Typography>
        </li>
        <li className={styles.item}>
          <Typography className={styles.subTitle} component="h3">
            Як це працює?
          </Typography>
          <Typography component="p">
            Після того, як пацієнт бронює на сайті Carely будь-яку послугу у медичного закладу, він
            отримує електронний ваучер на використання. На цьому етапі залишити відгук про заклад
            неможливо задля запобігання накручування рейтингу або навпаки, псування репутації
            конкурента.
          </Typography>
          <Typography component="p">
            Лише після того, як пацієнт побуває на прийомі у клініці чи лабораторії і погасить свій
            електронний ваучер у медзакладі, у нього відкривається можливість залишити реальний
            відгук і поставити оцінку обслуговуванню.
          </Typography>
        </li>
        <li className={styles.item}>
          <Typography className={styles.subTitle} component="h3">
            Так ось навіщо ви наполягаєте на відгуках!
          </Typography>
          <Typography component="p">
            Ми прагнемо створити максимально комфортне і безпечне середовище, де кожен може обрати
            найкращий рівень лікування. Саме тому ваші відгуки надцінні для нас і всіх інших
            користувачів!
          </Typography>
          <Typography component="p">
            Будь ласка, залишайте відгуки обмірковано і справедливо, допомагайте іншим людям подбати
            про своє здоров&#39;я!
          </Typography>
        </li>
      </ul>
    </div>
  );
};

export default Rating;
