import { Button, ButtonState } from 'components/Button';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { MainPageLayout } from '../../layouts/MainLayout/MainLayout';

export const PageNotFound: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <MainPageLayout infobarContent="Sometimes trips can make you lost. Please go back." infobarTitle="Whoops">
        <h1>404: Page not found 😭</h1>
        <p style={{ maxWidth: 450, padding: 20 }}>
          Well this is unexpected, something went wrong or you got lost.
          <br />
          Please go back and mabye try it later.
          If your problem presists, please feel free to contact us, so we can help you ASAP :)
        </p>
        <Button onClick={() => history.goBack()} state={ButtonState.Primary}>Go back</Button>
      </MainPageLayout>

    </>
  );
};

PageNotFound.displayName = 'PageNotFound';
