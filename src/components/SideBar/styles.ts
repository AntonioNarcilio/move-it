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
    height: calc(100vh / 4);

    display: flex;
    align-items: end;

    position: relative;
    top: 2rem;
  }

  ul li:nth-child(1) span img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    object-position: 0px 0px;
  }

  ul li:nth-child(2){
    display: flex;
    align-items: flex-end;

    height: calc(100vh / 4);
    padding-bottom: 2rem;
  }

  ul li:nth-child(2) span img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    object-position: -48px 0px;
    /* margin-left: 5rem; */
  }


  ul li:nth-child(3){
    display: flex;
    align-items: flex-start;

    height: calc(100vh / 4);
    padding-top: 2rem;
  }

  ul li:nth-child(3) span img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    object-position: -48px 0px;
    /* margin-left: 5rem; */
  }

/*  div:nth-child(2) span:nth-child(2),
 div:nth-child(3) span:nth-child(2) {
  transform: rotate(-90deg)
} */

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
  height: 10%;
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
ul li input[type="radio"]:checked {
  background: ${(props) => props.theme.colors.green};
  top: 38%;
}
ul li:nth-of-type(3) input[type="radio"]:checked {
  background: ${(props) => props.theme.colors.green};
  top: 52.2%;
}
/*
input[type="radio"]:checked + label {
  transform: translateX(0%);
  transition: transform 0.4s ease 0.4s;
} */
`;
