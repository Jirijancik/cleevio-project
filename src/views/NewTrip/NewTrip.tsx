import React, { useEffect, useState, useRef } from 'react';
import { MainPageLayout } from 'layouts/MainLayout/MainLayout';
import { Select } from 'components/SingleSelect/SingleSelect';
import { Item } from '@react-stately/collections';
import { Input } from 'components/Input';
import { DatePicker } from 'components/DatePicker';
import { Paper } from 'components/Paper';
import { Button, ButtonState } from 'components/Button';
import { ButtonType } from 'components/Button/buttonTypeEnum';
import { addTrip } from 'actions/addTrip';
import { useHistory } from 'react-router-dom';
import { FlagsMap, FlagsName, IconsName } from 'constants/index';
import { Icon } from 'components/Icon';
import { getEnumKeyByEnumValue } from 'utils/getEnumKeyByEnumValue';
import { useDispatch, useSelector } from 'react-redux';
import { CardTrip } from 'components/Trip/components/CardTrip/CardTrip';
import UUID from 'node-uuid';
import { Stack } from 'layouts/wrappers/Stack';
import { RadioGroup } from 'components/RadioGroup';
import { RadioButton } from 'components/RadioGroup/components/RadioButton/RadioButton';

interface ICustomFormRef extends Omit<HTMLFormElement, 'elements'>{
  elements:{}
}

export const NewTrip: React.FC = () => {
  const history = useHistory();
  const newLocalTrips = useSelector((state:any) => state.addTrip.data) as Array<any>;
  const [tripsList, setTipsList] = useState<any>(null);
  const formRef = useRef<ICustomFormRef>(null);

  const SelectItems = [...FlagsMap.keys()].map((flag) => (
    <Item key={flag}>
      <div style={{ display: 'flex', gap: 10 }}>
        <Icon iconName={flag} />
        {getEnumKeyByEnumValue(FlagsName, flag)}
      </div>
    </Item>
  ));

  console.log(formRef);

  useEffect(() => {
    const AddedTripsList = !newLocalTrips.length
      ? <p>No trips to show</p>
      : !!newLocalTrips && newLocalTrips.map((trip:any) => (
        <CardTrip
          company={trip.text}
          country={trip.text}
          adress={trip.value}
          flagName={trip.icon}
          key={UUID.v4()}
        />
      ));
    setTipsList(AddedTripsList);
  }, [newLocalTrips]);

  const dispatch = useDispatch();
  const handleSubmit = (event:any) => {
    event.preventDefault();
    const formElements: any = formRef.current?.elements;
    const result = {
      icon: formElements.Country?.selectedOptions[0]?.value,
      startDate: formElements.StartDate?.value,
      endDate: formElements.EndDate?.value,
      companyName: formElements.CompanyName?.value,
      text: formElements.City?.value,
      value: formElements.Street?.value,
      streetNumber: formElements.StreetNumber?.value,
      zipCode: formElements.ZipCode?.value,
    };
    dispatch(addTrip(result));
    history.push('/');
  };

  const FooterSubmitButton = (
    <Button
      type={ButtonType.Submit}
      state={ButtonState.Primary}
      onClick={handleSubmit}
      iconName={IconsName.Check}
      form="new-trip"
    >
      Save
    </Button>
  );

  return (
    <MainPageLayout infobarTitle="Last Added Trips" hedingTitle="Create new trip" infobarContent={tripsList} footerContent={FooterSubmitButton}>
      <form style={{ display: 'flex', flexFlow: 'column', gap: 23 }} onSubmit={handleSubmit} id="new-trip" ref={formRef as React.RefObject<HTMLFormElement>}>
        <Paper spacing={20}>
          <Select name="Country" label="Select Country" placeholder="Select Country">
            {SelectItems}
          </Select>
        </Paper>
        <Paper spacing={20}>
          <Stack spacing={23}>
            <DatePicker label="Start Date" name="StartDate" />
            <DatePicker label="End Date" name="EndDate" />
          </Stack>
        </Paper>
        <Paper spacing={20}>
          <Stack spacing={20}>
            <Input
              label="Company Name"
              name="CompanyName"
            />
            <Input
              label="City"
              name="City"
            />
            <Input
              label="Street"
              name="Street"
            />
            <Input
              label="Street number"
              name="StreetNumber"
            />
            <Input
              label="Zip code"
              name="ZipCode"
            />
          </Stack>
        </Paper>

        <Paper spacing={20}>
          <RadioGroup label="Have you been recently tested for COVID?">
            <RadioButton value="Yes">Yes</RadioButton>
            <RadioButton value="No">No</RadioButton>
          </RadioGroup>
        </Paper>
      </form>
    </MainPageLayout>
  );
};

NewTrip.displayName = 'NewTrip';
