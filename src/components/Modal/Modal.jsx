import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, CloseBtn } from '../../components/Buttons';
import IconBack from '../../assets/images/arrow-mobile.png';
import { useTranslation } from 'react-i18next';
import {
  Overlay,
  ModalDiv,
  ModalTtl,
  KcalCount,
  Text,
  ProdList,
  CloseModalBtn,
  CloseBtnWrapper,
  ContentWrap,
  BackButton,
  BtnThumb,
} from './Modal.styled';

export const Modal = ({
  closeModalHandle,
  userData: { userDailyCalorieIntake, userNotRecommendedProducts },
}) => {
  const navigate = useNavigate();

  const escKeyHandle = event => {
    if (event.keyCode === 27) {
      closeModalHandle();
    }
  };
  const { t } = useTranslation();
  useEffect(() => {
    window.addEventListener('keydown', escKeyHandle);
    return () => {
      window.removeEventListener('keydown', escKeyHandle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickOvrlHandle = event => {
    if (event.target.id === 'modal-overlay') {
      closeModalHandle();
    }
  };
  const onBtnClickHandle = () => {
    closeModalHandle();
    navigate('/register', { replace: true });
  };

  const closeModal = () => {
    closeModalHandle();
  };

 
  return (
    <Overlay id="modal-overlay" onClick={onClickOvrlHandle}>
      <ModalDiv>
        <CloseBtnWrapper>
          <BackButton onClick={() => closeModal()}>
            <img src={IconBack} alt="IconBack" width={12} height={7} />
          </BackButton>
          <CloseModalBtn>
            <CloseBtn onHandleClick={closeModal} />
          </CloseModalBtn>
        </CloseBtnWrapper>
        <ContentWrap>
          <ModalTtl>{t('calIngest')}</ModalTtl>
          <KcalCount>
            {userDailyCalorieIntake}
            <span> kcal</span>
          </KcalCount>
          <Text>{t('Productos no recomendados')}</Text>
          <ProdList>
            {userNotRecommendedProducts?.map((product, i) => (
              <li key={i}>{t(product)}</li>
            ))}
          </ProdList>

          <BtnThumb>
            <Button
              onClickHandler={onBtnClickHandle}
              btnText={t('btnTextStart')}
            />
          </BtnThumb>
        </ContentWrap>
      </ModalDiv>
    </Overlay>
  );
};
