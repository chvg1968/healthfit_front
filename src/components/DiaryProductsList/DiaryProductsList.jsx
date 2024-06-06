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

  const isAnyProducts = productsList !== null && productsList.length > 0;

  return !isAnyProducts ? (
    <AlternativeText>{t('emptyList')}</AlternativeText>
  ) : (
    <ProductsListThumb>
      <ProductsList>
        {console.log('printing products', productsList)}
        {[...productsList].reverse().map((product, i) => (
          <DiaryProductListItem
            key={i}
            product={product}
            langCodes={t('langCode')}
          />
        ))}
      </ProductsList>
    </ProductsListThumb>
  );
};
