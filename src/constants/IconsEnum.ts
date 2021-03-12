/* eslint-disable comma-spacing */
import React from 'react';
import SvgAdd from '../assets/icons/Add';
import SvgArrowLeft from '../assets/icons/ArrowLeft';
import SvgArrowRight from '../assets/icons/ArrowRight';
import SvgCheck from '../assets/icons/Check';
import SvgChevronDown from '../assets/icons/ChevronDown';
import SvgDelete from '../assets/icons/Delete';
import SvgEdit from '../assets/icons/Edit';
import SvgFutureFeature from '../assets/icons/FutureFeature';
import SvgFutureSection from '../assets/icons/FutureSection';
import SvgLoading from '../assets/icons/Loading';
import SvgStar from '../assets/icons/Star';
import SvgYourTrips from '../assets/icons/YourTrips';

declare namespace JSX {
    interface Element {
    }
}

export enum IconsName {
    Add = 'icon-add',
    ArrowLeft = 'icon-arrow-left',
    ArrowRight = 'icon-arrow-right',
    Check = 'icon-check',
    ChevronDown = 'icon-chevron-down',
    Delete = 'icon-delete',
    Edit = 'icon-edit',
    FutureFeature = 'icon-future-feature',
    FutureSection = 'icon-future-section',
    Loading = 'icon-loading',
    Star = 'icon-star',
    YourTrips = 'icon-your-trips',
}

const IconsMap = new Map<IconsName,(props: React.SVGProps<SVGSVGElement>) => JSX.Element>();
IconsMap.set(IconsName.Add, SvgAdd);
IconsMap.set(IconsName.ArrowLeft, SvgArrowLeft);
IconsMap.set(IconsName.ArrowRight, SvgArrowRight);
IconsMap.set(IconsName.Check, SvgCheck);
IconsMap.set(IconsName.ChevronDown, SvgChevronDown);
IconsMap.set(IconsName.Delete, SvgDelete);
IconsMap.set(IconsName.Edit, SvgEdit);
IconsMap.set(IconsName.FutureFeature, SvgFutureFeature);
IconsMap.set(IconsName.FutureSection, SvgFutureSection);
IconsMap.set(IconsName.Loading, SvgLoading);
IconsMap.set(IconsName.Star, SvgStar);
IconsMap.set(IconsName.YourTrips, SvgYourTrips);
export default IconsMap;
