import React from 'react';
import { MainPageLayout } from '../../layouts/MainLayout/MainLayout';

export interface IButtonProps {
  //  readonly infobarText?: string;
  //  readonly infobarTitle?: string;
  // readonly onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  // readonly isDisabled?: boolean;
  // readonly isLoading?: boolean;
  // readonly state?: ButtonState;
}

const propTypes = {
  // infobarText: PropTypes.string,
  // infobarTitle: PropTypes.string,
  // onClick: PropTypes.func.isRequired,
  // isDisabled: PropTypes.bool,
  // isLoading: PropTypes.bool,
  // state: PropTypes.oneOf(Object.values(ButtonState)),
};

const infoTitle = 'Tips & tricks';
const infoText = 'Are you passionate about building human-centered products? That’s a good start, because people in Cleevio are too! They really, really like techy stuff and they love to cooperate, co-exist with people who are tech-savvy, are empathetic to be able to understand the users of their solutions, and are able to take up the challenges the digital world can bring. Cleevio is committed to creating a diverse and inclusive workplace, where everyone has the freedom to thrive while being taken care of. They break problems down to first principles and reason upwards. The goal is to turn 20 percent of their effort into 80 percent of the impact. ';

export const HomePage: React.FC<IButtonProps> = () => {
  console.log('ahoj');

  return (
    <>
      <MainPageLayout infobarText={infoText} infobarTitle={infoTitle}>
        <p>Ahoj jsem Home Page</p>
      </MainPageLayout>
    </>
  );
};

HomePage.displayName = 'SidebarMenu';
HomePage.propTypes = propTypes;
