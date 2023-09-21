import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/app/auth';
import { DailyCalorieIntake } from 'components/DailyCalorieIntake';
import { Thumb, ProdThumb, List, Title, AltText } from './SideBar.styles';

export const SideBar = ({ date, kcalConsumed, calorie }) => {
  const notRecommendedProd = useSelector(authSelectors.getUserNotRecommendProd);

  return (
    <Thumb>
      <DailyCalorieIntake
        date={date.replace(/\./g, '/')}
        daylykCalCount={calorie}
        kcalConsumed={kcalConsumed}
      />

      <ProdThumb>
<<<<<<< HEAD
        <Title>Comida no recomendada</Title>
=======
        <Title>Alimentos no recomendados</Title>
>>>>>>> 56f7a49 (update files)

        {notRecommendedProd.length > 0 ? (
          <List>
            {notRecommendedProd?.map((product, i) => (
              <li key={i}>{product.uk}</li>
            ))}
          </List>
        ) : (
<<<<<<< HEAD
          <AltText>Los productos no recomendados para usted se mostrarán aquí.</AltText>
=======
          <AltText>Aquí se mostrarán los alimentos no recomendados para ti</AltText>
>>>>>>> 56f7a49 (update files)
        )}
      </ProdThumb>
    </Thumb>
  );
};
