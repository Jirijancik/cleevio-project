import { CardTrip } from 'components/Trip/components/CardTrip/CardTrip';
import React, { useEffect, useState } from 'react';
import { MainPageLayout } from 'layouts/MainLayout/MainLayout';
import UUID from 'node-uuid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from 'actions/fetchData';
import { Stack } from 'layouts/wrappers/Stack';

const infoTitle = 'Tips & tricks';
const firstInfobarParagraphText = 'Company was established back in the year 2007 by 3 friends who were fascinated by the web and mobile technologies and product design. Today, Cleevio is lead by its own CEO, David Bezdeka, and is working on projects for clients and companies around the world. With his work he helps with the product itself, starting startups or understanding how to manage and deliver a large-scale solution. Cleevio‘s people come from a diverse environment, but they work like a well-coordinated team at work. During development, they use new technologies and libraries, always striving to uplevel. They work side-by-side with clients as a partner and they are their digital expert. They advise and influence the design and strategy of the project. They are looking for bold clients who are leaders in their field and have innovative, creative ideas. They are attracted to projects which utilize new technologies.';
const secondInfobarParagraphText = 'Are you passionate about building human-centered products? That’s a good start, because people in Cleevio are too! They really, really like techy stuff and they love to cooperate, co-exist with people who are tech-savvy, are empathetic to be able to understand the users of their solutions, and are able to take up the challenges the digital world can bring. Cleevio is committed to creating a diverse and inclusive workplace, where everyone has the freedom to thrive while being taken care of. They break problems down to first principles and reason upwards. The goal is to turn 20 percent of their effort into 80 percent of the impact.';
const infobarContent = (
  <Stack spacing={20}>
    <p>{firstInfobarParagraphText}</p>
    <p>{secondInfobarParagraphText}</p>
  </Stack>
);

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const fetchedTrips = useSelector((state:any) => state.tripList);
  const newLocalTrips = useSelector((state:any) => state.addTrip);
  const [localTripsData, setLocalTripsData] = useState<Array<any>>(fetchedTrips.data);

  useEffect(() => {
    const url = 'https://gist.githubusercontent.com/davidzadrazil/43378abbaa2f1145ef50000eccf81a85/raw/d734d8877c2aa9e1e8c1c59bcb7ec98d7f8d8459/countries.json';
    dispatch(fetchData(url));
  }, []);

  useEffect(() => {
    if (newLocalTrips) {
      setLocalTripsData([...fetchedTrips.data, ...newLocalTrips.data]);
    }
  }, [newLocalTrips, fetchedTrips]);
  return (
    <>
      <MainPageLayout infobarContent={infobarContent} infobarTitle={infoTitle} hedingTitle="Your trips">
        {
          fetchedTrips.isLoading ? 'LOADING...' : !!localTripsData && localTripsData.map((trip:any) => (
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

HomePage.displayName = 'HomePage';
