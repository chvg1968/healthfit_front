import React from 'react';
import { useSelector } from 'react-redux';
import { DiaryProductListItem } from '../../components/DiaryProductListItem';
import { useTranslation } from 'react-i18next';
import {
  AlternativeText,
  ProductsList,
  ProductsListThumb,
} from './DiaryProductsList.styled';

export const DiaryProductsList = () => {
  const { t } = useTranslation();
  const products = useSelector(state => state.diary.products);

  // Verifica si products es un arreglo
  const isAnyProducts = Array.isArray(products) && products.length > 0;

  return !isAnyProducts ? (
    <AlternativeText>{t('emptyList')}</AlternativeText>
  ) : (
    <ProductsListThumb>
      <ProductsList>
        {products.map(product => (
          <DiaryProductListItem
            key={product.id}
            product={{
              ...product,
              title: product.displayTitle || product.titles?.en // Asegúrate de tener un valor por defecto
            }}
          />
        ))}
      </ProductsList>
    </ProductsListThumb>
  );
};
