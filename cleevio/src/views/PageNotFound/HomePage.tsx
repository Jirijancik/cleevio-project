import React from 'react';
import { MainPageLayout } from '../../layouts/MainLayout/MainLayout';

export interface IButtonProps {
  // readonly text?: string;
  // readonly onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  // readonly isDisabled?: boolean;
  // readonly isLoading?: boolean;
  // readonly state?: ButtonState;
}

const propTypes = {
  // text: PropTypes.string,
  // onClick: PropTypes.func.isRequired,
  // isDisabled: PropTypes.bool,
  // isLoading: PropTypes.bool,
  // state: PropTypes.oneOf(Object.values(ButtonState)),
};

export const PageNotFound: React.FC<IButtonProps> = () => {
  console.log('ahoj');

  return (
    <>
      <MainPageLayout>
        <h1>404 Page not found</h1>
      </MainPageLayout>
    </>
  );
};

PageNotFound.displayName = 'SidebarMenu';
PageNotFound.propTypes = propTypes;
