import styled from 'styled-components';

export const SideBarContainer = styled.div`
  width: 100%;
  max-width: 5rem;
  min-height: 100vh;

  background: ${(props) => props.theme.colors.foreground};

  ul li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul li:nth-child(1) {
    width: 5rem;
    height: 40vh;

    display: flex;
    align-items: end;

    /* position: relative; */
    padding-top: 2rem;
  }

  ul li:nth-child(1) span img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    object-position: 0px 0px;
  }

  ul li:nth-child(2){
    display: flex;
    align-items: center;

    height: 70px;
  }

  ul li:nth-child(2) span img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    object-position: -48px 0px;
  }


  ul li:nth-child(3){
    display: flex;
    align-items: center;

    height: 70px;
  }

  ul li:nth-child(3) span img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    object-position: -48px 0px;
  }


/* label div {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.4s ease;
  transform: translateX(-100%);
} */

ul li label {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}


 input[type="radio"] {
  position: absolute;
  width: 5px;
  height: 70px;
  appearance: none;
  margin: 0;
  left: 0;
  z-index: 1;
  outline: 0;

  border-radius: 0px 5px 5px 0px;

  transition: all 0.5s linear;
}

div:nth-of-type(1) {

}
div:nth-of-type(2) {
}

ul li:nth-of-type(2) input[type="radio"]:checked {
  background: ${(props) => props.theme.colors.green};
  /* top: 38%; */
}

ul li:nth-of-type(2) input[type="radio"]:checked  ~ span img {
  width: 36px;
  height: 36px;
  object-fit: cover;
  object-position: -98px 0px;
}


ul li:nth-of-type(3) input[type="radio"]:checked {
  background: ${(props) => props.theme.colors.green};
  /* top: 52.2%; */
}

ul li:nth-of-type(3) input[type="radio"]:checked  ~ span img {
  width: 36px;
  height: 36px;
  object-fit: cover;
  object-position: -98px 0px;
}


/* ul li:nth-child(3) span img {
  object-position: -98px 0px;
} */

/*
input[type="radio"]:checked + label {
  transform: translateX(0%);
  transition: transform 0.4s ease 0.4s;
} */


@media(max-width: 760px) {
  display: none;
}


`;
