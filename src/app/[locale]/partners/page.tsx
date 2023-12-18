import { Typography } from '@/ui-kit';
import { Breadcrumbs } from '@/components';
import styles from './Partners.module.scss';

const Partners = () => {
  return (
    <div>
      <Breadcrumbs breadcrumbs={[{ label: 'Партнерам', path: '/' }]} />
      <Typography gutterBottom="xlg" component="h3">
        Стати партнером Carely може будь-яка клініка чи лабораторія. Для цього просто залиште заявку
        і ми зареєструємо вашу компанію на платформі!
      </Typography>
      <Typography component="ul" className={styles.list}>
        <Typography component="li">
          <Typography gutterBottom="xs" component="h3">
            Carely - це новий канал реклами
          </Typography>
          <Typography component="p">
            Завдяки розміщенню вашого медичного закладу на платформі, ви отримаєте максимально
            якісний канал реклами! Адже ви платите тільки за реальних пацієнтів.
          </Typography>
        </Typography>
        <Typography component="li">
          <Typography gutterBottom="xs" component="h3">
            Carely - приведе нових пацієнтів
          </Typography>
          <Typography component="p">
            У містах України зараз дуже багато внутрішньо переміщених осіб. Які не мають у кого
            запитати поради чи рекомендації. Carely - приведе вам цих пацієнтів.
          </Typography>
        </Typography>
        <Typography component="li">
          <Typography gutterBottom="xs" component="h3">
            Carely - це вклад у репутацію закладу
          </Typography>
          <Typography component="p">
            Абсолютно чесний рейтинг, який створюють пацієнти виключно після відвідування клініки
            гарантує вам репутацію, на яку не можуть впливати сторонні люди.
          </Typography>
        </Typography>
        <Typography component="li">
          <Typography gutterBottom="xs" component="h3">
            Carely - це зручність
          </Typography>
          <Typography component="p">
            Ми самостійно зареєструємо ваш заклад на платформі і внесемо всі необхідні дані, вам не
            потрібно буде витрачати на це час. Займайтесь тим, що ви вмієте найкраще - лікуйте, а ми
            потурбуємось, щоб пацієнти вас знайшли!
          </Typography>
        </Typography>
        <Typography component="li">
          <Typography gutterBottom="xs" component="h3">
            Carely - це підтримка
          </Typography>
          <Typography component="p">
            Якщо вам потрібно змінити інформацію, вартість послуг чи додати лікаря - зверніться до
            нашої служби підтримки і ми все зробимо максимально швидко!
          </Typography>
        </Typography>
      </Typography>
    </div>
  );
};

export default Partners;
