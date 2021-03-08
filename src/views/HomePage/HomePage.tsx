import { CardTrip } from 'components/Trip/components/CardTrip/CardTrip';
import React, { useEffect, useState } from 'react';
import { MainPageLayout } from 'layouts/MainLayout/MainLayout';
import UUID from 'node-uuid';

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

interface ITrip {
  value: string;
  text: string;
  icon: string;
}

const infoTitle = 'Tips & tricks';
const infoText = 'Are you passionate about building human-centered products? That’s a good start, because people in Cleevio are too! They really, really like techy stuff and they love to cooperate, co-exist with people who are tech-savvy, are empathetic to be able to understand the users of their solutions, and are able to take up the challenges the digital world can bring. Cleevio is committed to creating a diverse and inclusive workplace, where everyone has the freedom to thrive while being taken care of. They break problems down to first principles and reason upwards. The goal is to turn 20 percent of their effort into 80 percent of the impact. ';

export const HomePage: React.FC<IButtonProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Array<ITrip>>();

  useEffect(() => {
    (async () => {
      const url = 'https://gist.githubusercontent.com/davidzadrazil/43378abbaa2f1145ef50000eccf81a85/raw/d734d8877c2aa9e1e8c1c59bcb7ec98d7f8d8459/countries.json';
      const response = await fetch(url);
      const [fetchedData] = await response.json();
      await setData(fetchedData.data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <MainPageLayout infobarText={infoText} infobarTitle={infoTitle}>

        {
          isLoading ? 'LOADING...' : !!data && data.map((trip) => (
            <CardTrip
              company={trip.text}
              country={trip.text}
              adress={trip.value}
              flagName={trip.icon}
              key={UUID.v4()}
            />
          ))
        }

      </MainPageLayout>
    </>
  );
};

HomePage.displayName = 'SidebarMenu';
HomePage.propTypes = propTypes;
