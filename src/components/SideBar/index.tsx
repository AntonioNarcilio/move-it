import { SideBarContainer } from './styles';

export function SideBar() {
  return (
    <SideBarContainer>
      <ul>
        <li>
          <span>
            <img title="Move.it" src="/icons/logos.svg" alt="logo" />
          </span>
        </li>
        <li title="Home">
          <label htmlFor="tab1">
            <input type="radio" name="tab-control" id="tab1" checked />
            <span>
              <img title="Home" src="/icons/home.svg" alt="home" />
            </span>
          </label>
        </li>
        <li title="Classificação">
          <label htmlFor="tab2">
            <input type="radio" name="tab-control" id="tab2" />
            <span>
              <img src="/icons/award.svg" alt="classificação" />
            </span>
          </label>
        </li>
      </ul>

      {/* <div>
          <span>
            <img title="Move.it" src="/icons/logos.svg" alt="logo" />
          </span>
        </div>
        <div>
          <span>
            <img title="Home" src="/icons/home.svg" alt="home" />
          </span>
        </div>
        <div>
          <span>
            <img
              title="Classificação"
              src="/icons/award.svg"
              alt="classificação"
            />
          </span>

        </div> */}
    </SideBarContainer>
  );
}
