import styled from 'styled-components';
import Datetime from 'react-datetime';
import { breakpoints } from '../../assets/sizes';

export const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-start;
  min-width: 0; /* Evitar que la fecha se recorte */
  
  

  @media ${breakpoints.minTablet} {
    align-items: baseline;
  }

  &:hover,
  &:focus {
    button {
      fill: var(--accent-color);
    }
  }
`;

export const DatePicker = styled(Datetime)`
  width: 120px;
  font-size: 18px;
  line-height: 1.21;
  letter-spacing: 0em;
  
  .rdtPicker {
    background-color:var(--background-color-calendar);
    .rdtToday {
      
      color: var(--accent-color);
    }
    td.rdtToday:before {
      content: none;
    }
    td.rdtActive {
      background-color: var(--accent-shadow);

      :hover {
        background-color: var(--accent-color);
      }
    }

  }

  & input {
    width: 120px;
    border: none;
  }

  @media ${breakpoints.minTablet} {
    width: 230px;
    font-size: 18px;

    & input {
      font-size: 30px;
      width: 230px;
    }
  }
`;
