import SvgLevel from 'svg-react-loader!../../../public/icons/level.svg';

import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';

import { ProfileContainer } from './styles';

export function Profile() {
  const { level } = useContext(ChallengeContext);
  return (
    <ProfileContainer>
      <img src="https://github.com/antonionarcilio.png" alt="Perfil" />
      <div>
        <strong>Antônio Narcilio</strong>
        <p>
          <SvgLevel />
          Level
          {' '}
          {level}
        </p>
      </div>
    </ProfileContainer>
  );
}
