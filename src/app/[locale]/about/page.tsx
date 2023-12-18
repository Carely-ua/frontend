import { Typography } from '@/ui-kit';
import { Breadcrumbs } from '@/components';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.wrapper}>
      <Breadcrumbs breadcrumbs={[{ label: 'Про нас', path: '/' }]} />
      <Typography gutterBottom="md" component="h3">
        Carely - сучасний інструмент для вибору найкращого лікування! Carely - це сучасний проєкт
        для тих, хто хоче усвідомлено піклуватись про своє здоров&#39;я та лікування.
      </Typography>
      <div>
        <Typography className={styles.subTitle} gutterBottom="md" component="h3">
          На сайті Carely ви можете:
        </Typography>
        <Typography component="ul" className={styles.list}>
          <Typography component="li">Знайти лікаря і записатися на прийом</Typography>
          <Typography component="li">Записатися на обстеження у клініку</Typography>
          <Typography component="li">Обрати найкращу лабораторію</Typography>
          <Typography component="li">Отримати послугу зі знижкою</Typography>
        </Typography>
      </div>
      <div>
        <Typography className={styles.subTitle} gutterBottom="md" component="h3">
          А навіщо мені користуватись Carely?
        </Typography>
        <Typography component="p">
          Окрім зручної навігації, власного кабінету та можливості обрати найближчий медичний
          заклад, ви можете забронювати прийом у лікаря чи обстеження за спеціальною ціною. Так-так,
          мова йде про знижки на послуги, які доступні тільки на Carely! Але на нашу думку, знижки
          це не головне. Найголовніше, чим Carely корисний для пацієнтів - чесний рейтинг і прозорі
          відгуки. Ви можете обрати дійсно кращих лікарів, сучасні і зручні клініки, найкращі
          лабораторії, спираючись на реальні відгуки інших пацієнтів. Рейтинг на Carely побудований
          за принципом реальних відгуків з подвійною аутентифікацією. Залишити оцінку та відгук
          пацієнти можуть тільки після того, як пройшли процедуру чи консультацію у медичному
          закладі.
        </Typography>
      </div>
      <div>
        <Typography gutterBottom="md" component="h3">
          А ще Carely - це зручно!{' '}
        </Typography>
        <Typography component="ul" className={styles.list}>
          <Typography component="li">
            Спеціальні пропозиції: Carely надає можливість придбати медичну послугу зі знижкою.
          </Typography>
          <Typography component="li">
            Все поруч: Лікарі, клініки, діагностика, аналізи, ліки в вашому приватному кабінеті
            Carely - ви ніколи нічого не загубите і не пропустите.
          </Typography>
          <Typography component="li">
            Обґрунтований вибір: Ви можете обрати найкращий варіант медичного закладу спираючись на
            безліч параметрів: від його розміщення, до реальних відгуків.
          </Typography>
          <Typography component="li">
            Чесний рейтинг: Всі відгуки від справжніх пацієнтів, адже ми проводимо подвійну
            перевірку!
          </Typography>
          <Typography component="li">
            Електронний ваучер: Коли ви бронюєте послугу чи прийом у лікаря, Carely надає вам
            електронний ваучер для пред&#39;явлення у медичному закладі.
          </Typography>
          <Typography component="li">
            Для вас це безоплатно: Carely не бере оплату за свої послуги у пацієнтів! Ви оплачуєте
            тільки вартість лікування у клініці чи лабораторії.
          </Typography>
        </Typography>
      </div>
    </div>
  );
};

export default About;
