import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/app/auth';
import { DailyCalorieIntake } from '../../components/DailyCalorieIntake';
import { Thumb, ProdThumb, List, Title, AltText } from './SideBar.styles';
import { useTranslation } from 'react-i18next';

export const SideBar = ({ date, kcalConsumed, calorie, lang }) => {
  const { t } = useTranslation();
  console.log('Sidebar loaded');
  const notRecommendedProd = useSelector(authSelectors.getUserNotRecommendProd);

  return (
    <Thumb>
      <DailyCalorieIntake
        date={date.replace(/\./g, '/')}
        daylykCalCount={calorie}
        kcalConsumed={kcalConsumed}
      />

      <ProdThumb>
        <Title>{t('recommendedFoods')}</Title>
        {notRecommendedProd.length > 0 ? (
          <List>
            {notRecommendedProd?.map((product, i) => (
              <li key={i}>{lang === 'en' ? product.en : product.es}</li>
            ))}
          </List>
        ) : (
          <AltText>{t('noRecoTittle')}</AltText>
        )}
      </ProdThumb>
    </Thumb>
  );
};
