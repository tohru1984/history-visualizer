import { HumanEvent } from './types';
import { evolutionEvents } from './evolution';
import { earlySapiensEvents } from './earlySapiens';
import { greatJourneyEvents } from './greatJourney';
import { civilizationEvents } from './civilization';
import { modernEvents } from './modern';
import { warEvents } from './wars';
import { countryEvents } from './countries';

export * from './types';

import { megafaunaEvents } from './megafauna';
import { homininEvents } from './hominins';
import { ww2Events } from './ww2_events';

export const humanEvents: HumanEvent[] = [
    ...evolutionEvents,
    ...earlySapiensEvents,
    ...greatJourneyEvents,
    ...civilizationEvents,
    ...modernEvents,
    ...warEvents,
    ...megafaunaEvents,
    ...homininEvents,
    ...countryEvents,
    ...ww2Events
];

export {
    evolutionEvents,
    earlySapiensEvents,
    greatJourneyEvents,
    civilizationEvents,
    modernEvents,
    warEvents,
    megafaunaEvents,
    homininEvents,
    countryEvents,
    ww2Events
};
