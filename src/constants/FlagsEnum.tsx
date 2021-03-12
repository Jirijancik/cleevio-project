/* eslint-disable comma-spacing */
import React from 'react';
import SvgAustria from '../assets/icons/Flags/Austria';
import SvgChina from '../assets/icons/Flags/China';
import SvgCzechia from '../assets/icons/Flags/Czechia';
import SvgFrance from '../assets/icons/Flags/France';
import SvgGermany from '../assets/icons/Flags/Germany';
import SvgGreece from '../assets/icons/Flags/Greece';
import SvgItaly from '../assets/icons/Flags/Italy';
import SvgNetherlands from '../assets/icons/Flags/Netherlands';
import SvgPortugal from '../assets/icons/Flags/Portugal';
import SvgSlovakias from '../assets/icons/Flags/Slovakia';
import SvgSpain from '../assets/icons/Flags/Spain';
import SvgSweden from '../assets/icons/Flags/Sweden';
import SvgUnitedKingdom from '../assets/icons/Flags/UnitedKingdom';
import SvgUnitedStates from '../assets/icons/Flags/UnitedStates';

declare namespace JSX {
    interface Element {
    }
}

export enum FlagsName {
    Austria = 'flag-austria',
    China = 'flag-china',
    Czechia = 'flag-czechia',
    France = 'flag-france',
    Germany = 'flag-germany',
    Greece = 'flag-greece',
    Italy = 'flag-italy',
    Netherlands = 'flag-netherlands',
    Portugal = 'flag-portugal',
    Slovakia = 'flag-slovakia',
    Spain = 'flag-spain',
    Sweden = 'flag-sweden',
    UnitedKingdom = 'flag-united-kingdom',
    UnitedStates = 'flag-united-states',
}

export const FlagsMap = new Map<FlagsName,(props: React.SVGProps<SVGSVGElement>) => JSX.Element>();
FlagsMap.set(FlagsName.Austria, SvgAustria);
FlagsMap.set(FlagsName.China, SvgChina);
FlagsMap.set(FlagsName.Czechia, SvgCzechia);
FlagsMap.set(FlagsName.France, SvgFrance);
FlagsMap.set(FlagsName.Germany, SvgGermany);
FlagsMap.set(FlagsName.Greece, SvgGreece);
FlagsMap.set(FlagsName.Italy, SvgItaly);
FlagsMap.set(FlagsName.Netherlands, SvgNetherlands);
FlagsMap.set(FlagsName.Portugal, SvgPortugal);
FlagsMap.set(FlagsName.Slovakia, SvgSlovakias);
FlagsMap.set(FlagsName.Spain, SvgSpain);
FlagsMap.set(FlagsName.Sweden, SvgSweden);
FlagsMap.set(FlagsName.UnitedKingdom, SvgUnitedKingdom);
FlagsMap.set(FlagsName.UnitedStates, SvgUnitedStates);
