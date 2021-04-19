import SvgLevel from 'svg-react-loader!../../../public/icons/level.svg';
import Avatar from 'svg-react-loader!../../../public/avatar/avatar-circle-01.svg';

import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';

import { ProfileContainer } from './styles';

export function Profile() {
  const { level } = useContext(ChallengeContext);
  return (
    <ProfileContainer>
      {/* <img src="https://github.com/antonionarcilio.png" alt="Perfil" /> */}
      <Avatar />
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
