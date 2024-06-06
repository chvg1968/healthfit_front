import { useState } from 'react';

import { adviceForNoAuthUser } from '../../service/axios.config';
import { useSelector } from 'react-redux';
import {
  Background,
  DailyCaloriesForm,
  Header,
  Loader,
  Modal,
} from '../../components';

import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';

import { BtnDN } from '../../components/Buttons/ButtonDayNight/ButtonDayNight.styled';
import { themeSelector } from '../../redux/app/theme/themeSlice';
import { useDispatch } from 'react-redux';
import { MoonIcon, SunIcon, PageGrid } from './MainPage.styled';

export default function MainPage() {
  const dispatch = useDispatch();
  const isDark = useSelector(state => state.theme.isDark);
  const [userInfo, setUserInfo] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
    setIsLoading(false);
  };

  const submitForm = async data => {
    console.log('data del form', data);
    setIsLoading(true);
    const resp = await adviceForNoAuthUser(data);

    if (resp.code === 200) {
      setUserInfo(resp.data.nutritionAdvice);
      setOpenModal(true);
      setIsLoading(false);
    }
  };
  const themeToggle = () => {
    dispatch(themeSelector());
  };

  return (
    <Background>
      <PageGrid>
        <BtnDN onClick={themeToggle}>
          {' '}
          {isDark ? <SunIcon>☀️</SunIcon> : <MoonIcon>🌙</MoonIcon>}
        </BtnDN>
        <LanguageSwitcher />

        <Header localPage="MainPage" />

        <DailyCaloriesForm
          onFormSubmit={submitForm}
          isCleanUserInfo={true}
          isShowNoti={false}
        />
        {isLoading && <Loader />}
        {openModal && (
          <Modal userData={userInfo} closeModalHandle={closeModal} />
        )}
      </PageGrid>
    </Background>
  );
}
