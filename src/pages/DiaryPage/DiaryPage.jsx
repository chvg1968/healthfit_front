import { useEffect } from 'react';

import { BsPlusLg } from 'react-icons/bs';

import {
  diaryPerDayOperation,
  diarySelectors,
} from '../../redux/app/diaryPerDay';
import { getIsModalOpen, openModalAction } from '../../redux/app/openModal';
import { themeSelector } from '../../redux/app/theme/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import useViewportDimensions from '../../hooks/useViewportDimensions';
import { useTranslation } from 'react-i18next';
import {
  DiaryAddProductForm,
  DiaryDateCalendar,
  DiaryProductsList,
  Header,
  ReactPortal,
  SideBar,
} from '../../components';

import {
  PageGrid,
  AddBtnMobile,
  SidebarWrap,
  ContainerDiary,
  SunIcon,
  MoonIcon,
} from './DiaryPage.styled';
import { BtnDN } from '../../components/Buttons/ButtonDayNight/ButtonDayNight.styled';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';

export default function DiaryPage() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const viewportDimensions = useViewportDimensions();
  const isMobileWidth = viewportDimensions.width <= 767;
  const currentDate = new Date().toLocaleDateString(`${t('toLocaleLanguage')}`);
  const date = useSelector(diarySelectors.getCurrentDate);
  const isCurrentDay = date === currentDate;
  const lng = useSelector(state => state.language);
  const isMobileFormOpen = useSelector(getIsModalOpen);

  useEffect(() => {
    dispatch(
      diaryPerDayOperation.actionGetProducts({ date: currentDate }),
    ).then(res => {
      if (typeof res.payload === 'string') {
        dispatch(
          diaryPerDayOperation.actionCreateProductsList({ date: currentDate }),
        );
      }
    });
  }, [currentDate, dispatch]);

  const { isDark } = useSelector(state => state.theme);

  const themeToggle = () => {
    dispatch(themeSelector());
  };

  return (
    <>
      <Header localPage="DiaryPage" />
      <BtnDN onClick={themeToggle}>
        {' '}
        {isDark ? <SunIcon>☀️</SunIcon> : <MoonIcon>🌙</MoonIcon>}
      </BtnDN>
      {!isMobileFormOpen && (
        <PageGrid>
          <ContainerDiary>
            <LanguageSwitcher />
            <DiaryDateCalendar lng={lng} />

            {isCurrentDay ? (
              isMobileWidth ? (
                <>
                  <DiaryProductsList />

                  <AddBtnMobile onClick={() => dispatch(openModalAction(true))}>
                    <BsPlusLg size={14} />
                  </AddBtnMobile>
                </>
              ) : (
                <>
                  <DiaryAddProductForm />
                  <h2>{t('foodsEaten')}</h2>
                  <DiaryProductsList />
                </>
              )
            ) : (
              <>
                <DiaryAddProductForm />
                <h2>{t('foodsEaten')}</h2>
                <DiaryProductsList />
              </>
            )}
          </ContainerDiary>

          <SidebarWrap>
            <SideBar date={date} />
          </SidebarWrap>
        </PageGrid>
      )}

      <LanguageSwitcher currentPage="authenticated" />

      {isMobileFormOpen && (
        <ReactPortal wrapperId="mobile-add-product-form">
          <DiaryAddProductForm />
        </ReactPortal>
      )}
    </>
  );
}
