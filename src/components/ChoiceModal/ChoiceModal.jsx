import { Button, CloseBtn } from '../../components/Buttons';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Overlay,
  ModalBox,
  Title,
  Text,
  ContentBox,
  ButtonsSet,
} from './ChoiceModal.styled';

export const ChoiceModal = ({ text, choiceHandler, subText }) => {
  const { t } = useTranslation();
  useEffect(() => {
    window.addEventListener('keydown', escKeyHandle);
    return () => {
      window.removeEventListener('keydown', escKeyHandle);
    };
  });

  const onChoiceCancel = () => {
    choiceHandler(false);
  };

  const onChoiceConfirm = () => {
    choiceHandler(true);
  };

  const escKeyHandle = e => {
    if (e.code === 'Escape') {
      onChoiceCancel();
    }
  };

  const handelOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onChoiceCancel();
    }
  };

  return (
    <Overlay onClick={handelOverlayClick}>
      <ModalBox>
        <CloseBtn onHandleClick={onChoiceCancel} position="absolute" />

        <ContentBox>
          <Title>{t('rusure')} {text}?</Title>
          <Text>{subText}</Text>

          <ButtonsSet>
            <Button
              onClickHandler={onChoiceCancel}
              btnText={t('cancel')}
              autofocus
            />

            <Button onClickHandler={onChoiceConfirm} btnText={t('confirm')} />
          </ButtonsSet>
        </ContentBox>
      </ModalBox>
    </Overlay>
  );
};
