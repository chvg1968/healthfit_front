import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsPlusLg } from 'react-icons/bs';
import { Rings } from 'react-loader-spinner';

import { diaryPerDayOperation, diarySelectors } from '../../redux/app/diaryPerDay';
import { openModalAction } from '../../redux/app/openModal';
import { getProductsByQuery } from '../../service/axios.config';
import { useTranslation } from 'react-i18next';

import {
  Form,
  FormBtnMobile,
  FormBtn,
  FormLabel,
  FormInputWeight,
  FormInputProduct,
  MobileAddProductFormWraper,
} from './DiaryAddProductForm.styled';

const loadOptions = async (inputValue, callback) => {
  if (inputValue.length < 2) {
    return;
  }
  const { data } = await getProductsByQuery(inputValue);

  callback(
    data.result.map(product => {
      const title = product.title;
      return { label: title, value: title };
    }),
  );
};

export const DiaryAddProductForm = () => {
  const {t}= useTranslation();
  const dispatch = useDispatch();

  let [selectedProduct, setSelectedProduct] = useState(null);
  let [weight, setWeight] = useState('');

  const currentDate = new Date().toLocaleDateString(`${t('toLocaleLanguage')}`);
  const isLoadingAddedProduct = useSelector(
    diarySelectors.getIsAddProductLoading,
  );

  const handleSubmit = async e => {
    e.preventDefault();

    const weightNumber = parseInt(weight);
    const { data: products } = await getProductsByQuery(selectedProduct.value);
    const productId = products.result[0]._id;

    dispatch(
      diaryPerDayOperation.actionAddProduct({
        date: currentDate,
        data: { product: productId, weightGrm: weightNumber },
      }),
    );

    dispatch(openModalAction(false));
    reset();
  };

  const reset = () => {
    setSelectedProduct(null);
    setWeight('');
  };

  return (
    <MobileAddProductFormWraper>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          <FormInputProduct
            classNamePrefix={'react-select'}
            value={selectedProduct}
            onChange={setSelectedProduct}
            loadOptions={loadOptions}
            placeholder={t('productName')}
            title={t('productName')}
            cacheOptions
            noOptionsMessage={({ inputValue }) =>
              inputValue ?  `${t('noProduct')}` : `${t('productName')}`
            }
            isClearable
            backspaceRemovesValue
            escapeClearsValue
          />
        </FormLabel>

        <FormLabel>
          <FormInputWeight
            type="number"
            min={1}
            name="weight"
            title={t('enterWeight')}
            required
            value={weight}
            onChange={e => setWeight(e.target.value)}
            placeholder={t('grams')}
          />
        </FormLabel>

        <FormBtnMobile
          type="submit"
          disabled={
            selectedProduct === null || weight === '' || isLoadingAddedProduct
          }
        >
          {isLoadingAddedProduct ? (
            <Rings color=" #FC842D" height={40} width={40} />
          ) : (
            `${t('add')}`
          )}
        </FormBtnMobile>

        <FormBtn
          type="submit"
          disabled={
            selectedProduct === null || weight === '' || isLoadingAddedProduct
          }
        >
          {isLoadingAddedProduct ? (
            <Rings color=" #FC842D" height={40} width={40} />
          ) : (
            <BsPlusLg size={14} />
          )}
        </FormBtn>
      </Form>
    </MobileAddProductFormWraper>
  );
};
