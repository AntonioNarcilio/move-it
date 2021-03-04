import SvgLogo from 'svg-react-loader!../../../public/icons/logo.svg';
import SvgHome from 'svg-react-loader!../../../public/icons/home.svg';
import SvgAward from 'svg-react-loader!../../../public/icons/award.svg';
import Link from 'next/link';

import { useContext } from 'react';
import {
  SideBarContainer, Indicador, SelectPageButtonActive, SelectPageButtonNoActive,
} from './styles';
import { SelectPageButtonContext } from '../../contexts/SelectPageButtonContext';

export function SideBar() {
  const {
    isSelectedHome, isSelectedRank, selectHomePage, selectRankPage,
  } = useContext(SelectPageButtonContext);

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
      </ul>

    </SideBarContainer>
  );
}
