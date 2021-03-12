import SvgLogo from 'svg-react-loader!../../../public/icons/logo.svg';
import SvgHome from 'svg-react-loader!../../../public/icons/home.svg';
import SvgAward from 'svg-react-loader!../../../public/icons/award.svg';

import SvgSun from 'svg-react-loader!../../../public/icons/sun-02.svg';
import SvgSunActive from 'svg-react-loader!../../../public/icons/sun-01.svg';
import SvgMoon from 'svg-react-loader!../../../public/icons/moon.svg';
import SvgMoonActive from 'svg-react-loader!../../../public/icons/crescent-moon-01.svg';

import Link from 'next/link';

import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { useContext } from 'react';
import { SelectPageButtonContext } from '../../contexts/SelectPageButtonContext';
import {
  SideBarContainer,
  Indicador,
  SelectPageButtonActive,
  SelectPageButtonNoActive,
} from './styles';

interface SideBarProps {
  toggleTheme: () => void;
}

export function SideBar({ toggleTheme }: SideBarProps) {
  const {
    isSelectedHome, isSelectedRank, selectHomePage, selectRankPage,
  } = useContext(SelectPageButtonContext);

  const { colors, title } = useContext(ThemeContext);

  return (
    <SideBarContainer>
      <ul>
        <li>
          <span title="Move.it">
            <SvgLogo />
          </span>
        </li>
        <li title="Home">
          <Link href="/">
            <label htmlFor="tab1">
              { isSelectedHome ? (
                <SelectPageButtonActive
                  type="button"
                  onClick={selectHomePage}
                >
                  <Indicador />

                  <span title="Home">
                    <SvgHome />
                  </span>
                </SelectPageButtonActive>
              ) : (
                <SelectPageButtonNoActive
                  type="button"
                  onClick={selectHomePage}
                >
                  <span title="Home">
                    <SvgHome />
                  </span>
                </SelectPageButtonNoActive>
              )}
            </label>
          </Link>
        </li>
        <li title="Classificação">

          <Link href="/rank">
            <label htmlFor="tab2">
              { isSelectedRank ? (
                <SelectPageButtonActive
                  type="button"
                  onClick={selectRankPage}
                >

                  <Indicador />

                  <span title="Rank">
                    <SvgAward />
                  </span>
                </SelectPageButtonActive>
              ) : (
                <SelectPageButtonNoActive
                  type="button"
                  onClick={selectRankPage}
                >
                  <span title="Rank">
                    <SvgAward />
                  </span>
                </SelectPageButtonNoActive>
              )}
            </label>
          </Link>
        </li>
        <li>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dracula'}
            // activeBoxShadow="#00fff2"
            // uncheckedIcon={false}
            // checkedIcon={false}
            // boxShadow="0px 0px 4px 1px rgb(65, 65, 65)"
            activeBoxShadow="0px 0px 1px 4px rgba(255, 238, 0, 0)"
            uncheckedIcon={(
              <SvgMoon
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: '120%',
                }}
              />
            )}
            checkedIcon={(
              <SvgSun
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: '75%',
                }}
              />
            )}
            uncheckedHandleIcon={(
              <SvgSunActive
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
                }}
              />
            )}
            checkedHandleIcon={(
              <SvgMoonActive
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
                }}
              />
            )}
            height={18}
            width={45}
            handleDiameter={20}
            // offColor={colors.sideBarDisable}
            // onColor={colors.sideBarDisable}
            offColor="#393A59"
            onColor="#008FE0"
          />
        </li>
      </ul>

    </SideBarContainer>
  );
}
