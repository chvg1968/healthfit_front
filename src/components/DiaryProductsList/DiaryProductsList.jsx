import { useSelector } from 'react-redux';
import { diarySelectors } from '../../redux/app/diaryPerDay';
import { DiaryProductListItem } from '../../components/DiaryProductListItem';
import { useTranslation } from 'react-i18next';
import {
  AlternativeText,
  ProductsList,
  ProductsListThumb,
} from './DiaryProductsList.styled';

export const DiaryProductsList = () => {
  const { t } = useTranslation();
  const productsList = useSelector(diarySelectors.getDiaryProducts);

  const isAnyProducts = Array.isArray(productsList) && productsList.length > 0;

  return !isAnyProducts ? (
    <AlternativeText>{t('emptyList')}</AlternativeText>
  ) : (
    <ProductsListThumb>
      <ProductsList>
        {productsList
          .slice()
          .reverse()
          .map(product => (
            <DiaryProductListItem
              key={product._id}
              product={product}
            />
          ))}
      </ProductsList>
    </ProductsListThumb>
  );
};