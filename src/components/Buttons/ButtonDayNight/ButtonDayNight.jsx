import { BtnDN } from './ButtonDayNight.styled';

export const ToggleButton = ({
  onClickHandler,
  btnText,
  
}) => {
  return (
    <BtnDN
      onClick={onClickHandler}
    
    >
      {btnText}
    </BtnDN>
  );
};