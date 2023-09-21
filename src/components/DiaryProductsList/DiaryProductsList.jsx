import { useSelector } from 'react-redux';

import { diarySelectors } from 'redux/app/diaryPerDay';

import { DiaryProductListItem } from 'components/DiaryProductListItem';

import {
  AlternativeText,
  ProductsList,
  ProductsListThumb,
} from './DiaryProductsList.styled';

export const DiaryProductsList = () => {
  const productsList = useSelector(diarySelectors.getDiaryProducts);
  const isAnyProducts = productsList !== null && productsList.length > 0;

  return !isAnyProducts ? (
    <AlternativeText>
<<<<<<< HEAD
      La lista de productos en tu agenda está vacía
=======
      La lista de productos en tu diario está vacía
>>>>>>> 56f7a49 (update files)
    </AlternativeText>
  ) : (
    <ProductsListThumb>
      <ProductsList>
        {[...productsList].reverse().map((product, i) => (
          <DiaryProductListItem key={i} product={product} />
        ))}
      </ProductsList>
    </ProductsListThumb>
  );
};
