import { Typography } from '@/ui-kit';
import { Breadcrumbs } from '@/components';
import styles from './About.module.scss';

const About = () => {
  return (
    <>
      <Breadcrumbs breadcrumbs={[{ label: 'Про нас', path: '/' }]} />
      <div className={styles.wrapper}>
        <Typography gutterBottom="md" component="h3">
          Carely - сучасний інструмент для вибору найкращого лікування! Carely - це сучасний проєкт
          для тих, хто хоче усвідомлено піклуватись про своє здоров&#39;я та лікування.
        </Typography>
        <div>
          <Typography className={styles.subTitle} gutterBottom="md" component="h3">
            На сайті Carely ви можете:
          </Typography>
          <ul className={styles.list}>
            <li>
              <Typography component="p">Знайти лікаря і записатися на прийом</Typography>
            </li>
            <li>
              <Typography component="p">Записатися на обстеження у клініку</Typography>
            </li>
            <li>
              <Typography component="p">Обрати найкращу лабораторію</Typography>
            </li>
            <li>
              <Typography component="p">Отримати послугу зі знижкою</Typography>
            </li>
          </ul>
        </div>
        <div>
          <Typography className={styles.subTitle} gutterBottom="md" component="h3">
            А навіщо мені користуватись Carely?
          </Typography>
          <Typography component="p">
            Окрім зручної навігації, власного кабінету та можливості обрати найближчий медичний
            заклад, ви можете забронювати прийом у лікаря чи обстеження за спеціальною ціною.
            Так-так, мова йде про знижки на послуги, які доступні тільки на Carely! Але на нашу
            думку, знижки це не головне. Найголовніше, чим Carely корисний для пацієнтів - чесний
            рейтинг і прозорі відгуки. Ви можете обрати дійсно кращих лікарів, сучасні і зручні
            клініки, найкращі лабораторії, спираючись на реальні відгуки інших пацієнтів. Рейтинг на
            Carely побудований за принципом реальних відгуків з подвійною аутентифікацією. Залишити
            оцінку та відгук пацієнти можуть тільки після того, як пройшли процедуру чи консультацію
            у медичному закладі.
          </Typography>
        </div>
        <div>
          <Typography gutterBottom="md" component="h3">
            А ще Carely - це зручно!
          </Typography>
          <ul className={styles.list}>
            <li>
              <Typography component="p">
                Спеціальні пропозиції: Carely надає можливість придбати медичну послугу зі знижкою.
              </Typography>
            </li>
            <li>
              <Typography component="p">
                Все поруч: Лікарі, клініки, діагностика, аналізи, ліки в вашому приватному кабінеті
                Carely - ви ніколи нічого не загубите і не пропустите.
              </Typography>
            </li>
            <li>
              <Typography component="p">
                Обґрунтований вибір: Ви можете обрати найкращий варіант медичного закладу спираючись
                на безліч параметрів: від його розміщення, до реальних відгуків.
              </Typography>
            </li>
            <li>
              <Typography component="p">
                Чесний рейтинг: Всі відгуки від справжніх пацієнтів, адже ми проводимо подвійну
                перевірку!
              </Typography>
            </li>
            <li>
              <Typography component="p">
                Електронний ваучер: Коли ви бронюєте послугу чи прийом у лікаря, Carely надає вам
                електронний ваучер для пред&#39;явлення у медичному закладі.
              </Typography>
            </li>
            <li>
              <Typography component="p">
                Для вас це безоплатно: Carely не бере оплату за свої послуги у пацієнтів! Ви
                оплачуєте тільки вартість лікування у клініці чи лабораторії.
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
