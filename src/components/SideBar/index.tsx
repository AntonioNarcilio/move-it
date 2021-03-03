import SvgLogo from 'svg-react-loader!../../../public/icons/logo.svg';
import SvgHome from 'svg-react-loader!../../../public/icons/home.svg';
import SvgAward from 'svg-react-loader!../../../public/icons/award.svg';
import { SideBarContainer } from './styles';

export function SideBar() {
  return (
    <SideBarContainer>
      <ul>
        <li>
          <span>
            <SvgLogo />
          </span>
        </li>
        <li title="Home">
          <label htmlFor="tab1">
            <input type="radio" name="tab-control" id="tab1" defaultChecked />
            <span title="Home">
              <SvgHome />
            </span>
          </label>
        </li>
        <li title="Classificação">
          <label htmlFor="tab2">
            <input type="radio" name="tab-control" id="tab2" />
            <span title="Classificação">
              <SvgAward />
            </span>
          </label>
        </li>
      </ul>
    </SideBarContainer>
  );
}
