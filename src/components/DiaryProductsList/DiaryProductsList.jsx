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
  const { t, i18n } = useTranslation();
  const productsList = useSelector(diarySelectors.getDiaryProducts);
  const lang = i18n.language; // Obtener el idioma actual (es)

  // Verificar si productsList es un array y no nulo
  const isAnyProducts = Array.isArray(productsList) && productsList.length > 0;

  return !isAnyProducts ? (
    <AlternativeText>{t('emptyList')}</AlternativeText>
  ) : (
    <ProductsListThumb>
      <ProductsList>
        {[...productsList].reverse().map((product, i) => {
          // Verificar que product.title existe y tiene las propiedades 'es' y 'en'
          const title = product.title && (lang === 'es' ? product.title.es : product.title.en);

          // Si title no existe, usa una cadena vacía como valor por defecto
          const safeTitle = title || '';

          return (
            <DiaryProductListItem
              key={i}
              product={{
                ...product,
                title: safeTitle // Usar el título seguro
              }}
              lang={['es', 'en'].includes(lang) ? lang : lang} // Pasar el idioma actual al componente
            />
          );
        })}
      </ProductsList>
    </ProductsListThumb>
  );
};
