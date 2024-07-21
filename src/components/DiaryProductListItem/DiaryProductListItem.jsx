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
import PropTypes from 'prop-types'; // Importar PropTypes para validar las props

export const DiaryProductListItem = ({ product, lang }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const textThumbRef = useRef();
  const textRef = useRef();
  const { title, weightGrm, _id } = product;
  const [showModal, setShowModal] = useState(false);
  const date = useSelector(diarySelectors.getCurrentDate);
  const currentDate = new Date().toLocaleDateString();
  const isCurrentDay = date === currentDate;
  const isLoadingDeletedProd = useSelector(diarySelectors.getIsDeleteProductLoading);

  useLayoutEffect(() => {
    const textThumbWidth = textThumbRef.current.clientWidth;
    const textWidth = textRef.current.clientWidth;

    if (textThumbWidth < textWidth) {
      textRef.current.classList.add('animate');
    } else {
      textRef.current.classList.remove('animate');
    }
  });

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

  // Aquí product.title ya es una cadena de texto
  // const productName = lang === 'en' ? product.title.en : product.title.es;

  return (
    <>
      <Product>
        <ProductInfo>
          <ProductNameThumb ref={textThumbRef}>
            <ProductName ref={textRef}>{title}</ProductName>
          </ProductNameThumb>
          <ProductWeight>{weightGrm} g</ProductWeight>
          <ProductCalories>{product.product.calories} cal</ProductCalories>
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
            subText={title}
          />
        </ReactPortal>
      )}
    </>
  );
};

// Usar PropTypes para asegurar que las props sean pasadas correctamente
DiaryProductListItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired, // Ahora se espera que title sea una cadena
    weightGrm: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
    product: PropTypes.shape({
      calories: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  lang: PropTypes.string.isRequired,
};
