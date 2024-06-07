import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsersAdvice } from '../../redux/app/auth/auth-operations';
import { authSelectors } from '../../redux/app/auth';
import { diaryPerDayOperation, updateDate } from '../../redux/app/diaryPerDay';

import { DailyCaloriesForm, Header, SideBar } from '../../components';

import { Thumb, ContainerBar, SunIcon, MoonIcon } from './CalculatorPage.styled';
import { useTranslation } from 'react-i18next';
import { BtnDN } from '../../components/Buttons/ButtonDayNight/ButtonDayNight.styled';
import { themeSelector } from '../../redux/app/theme/themeSlice';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';

const CalculatorPage = () => {
  
  const {t}= useTranslation();
  const dispatch = useDispatch();
  const {isDark} = useSelector(state => state.theme)
  const userInfo = useSelector(authSelectors.getUserInfo);
  const currentDate = new Date().toLocaleDateString(`${t('toLocaleLanguage')}`);
  useEffect(() => {
    
    const currentDate = new Date().toLocaleDateString(`${t('toLocaleLanguage')}`);
  
    dispatch(updateDate(currentDate));
    dispatch(diaryPerDayOperation.actionGetProducts({ date: currentDate }));
  }, [dispatch, isDark,t]);

  const submitForm = async data => {
    dispatch(getUsersAdvice(data));
  };
  
  
  const themeToggle =()=>{
    
    dispatch(themeSelector());
  }
 


  return (
    <>
      <Header localPage="CalculatorPage" />
      
      <Thumb>
        <DailyCaloriesForm
          onFormSubmit={submitForm}
          userInfo={userInfo}
          isCleanUserInfo={false}
        />

        <ContainerBar>
          <SideBar date={currentDate} />
        </ContainerBar>
      </Thumb>
      <BtnDN onClick={themeToggle}> {isDark ? <SunIcon>☀️</SunIcon> : <MoonIcon>🌙</MoonIcon>}</BtnDN>
      <LanguageSwitcher currentPage = "authenticated" page= "calcularor"/>
    </>
  );
};
export default CalculatorPage;
