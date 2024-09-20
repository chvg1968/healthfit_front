import { useState, useRef, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GrClose } from 'react-icons/gr';
import { diaryPerDayOperation, diarySelectors } from '../../redux/app/diaryPerDay';
import { useTranslation } from 'react-i18next';
import { ChoiceModal } from '../../components/ChoiceModal';
import {
  BtnClose,
  Product,
  ProductCalories,
  ProductInfo,
  ProductName,
  ProductNameThumb,
  ProductWeight,
} from './DiaryProductListItem.styled';
import { ReactPortal } from '../../components/ReactPortal';
import PropTypes from 'prop-types';

export const DiaryProductListItem = ({ product }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const textThumbRef = useRef();
  const textRef = useRef();
  const { weightGrm, _id } = product;
  const [showModal, setShowModal] = useState(false);
  const date = useSelector(diarySelectors.getCurrentDate);
  const currentDate = new Date().toLocaleDateString();
  const isCurrentDay = date === currentDate;
  const isLoadingDeletedProd = useSelector(diarySelectors.getIsDeleteProductLoading);

  const lang = i18n.language; // Obtener el idioma actual

  useLayoutEffect(() => {
    const textThumbWidth = textThumbRef.current.clientWidth;
    const textWidth = textRef.current.clientWidth;

    if (textThumbWidth < textWidth) {
      textRef.current.classList.add('animate');
    } else {
      textRef.current.classList.remove('animate');
    }
  });

  const getProductTitle = () => {
    if (product.product && product.product.title) {
      return product.product.title[lang] || product.product.title.en || product.product.title.es || t('unknownProduct');
    }
    return product.title || t('unknownProduct');
  };

  const productTitle = getProductTitle();
  const productCalories = product.product ? product.product.calories : 'cal';

  const payload = {
    productId: _id,
    date: date,
  };

  const handleDelete = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const choiceHandler = answer => {
    if (answer) {
      dispatch(diaryPerDayOperation.actionDeleteProduct(payload));
    }
    setShowModal(false);
  };

  return (
    <>
      <Product>
        <ProductInfo>
          <ProductNameThumb ref={textThumbRef}>
            <ProductName ref={textRef}>{productTitle}</ProductName>
          </ProductNameThumb>
          <ProductWeight>{weightGrm} g</ProductWeight>
          <ProductCalories>{productCalories} cal</ProductCalories>
        </ProductInfo>

        {isCurrentDay && (
          <BtnClose
            type="button"
            onClick={handleDelete}
            disabled={isLoadingDeletedProd}
          >
            <GrClose />
          </BtnClose>
        )}
      </Product>

      {showModal && (
        <ReactPortal>
          <ChoiceModal
            text={t('deleteOr')}
            choiceHandler={choiceHandler}
            subText={productTitle}
          />
        </ReactPortal>
      )}
    </>
  );
};

DiaryProductListItem.propTypes = {
  product: PropTypes.shape({
    product: PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.shape({
        en: PropTypes.string,
        es: PropTypes.string,
      }),
      calories: PropTypes.number,
    }),
    weightGrm: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
    title: PropTypes.string,
  }).isRequired,
};