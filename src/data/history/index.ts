import { HumanEvent } from './types';
import { evolutionEvents } from './evolution';
import { earlySapiensEvents } from './earlySapiens';
import { greatJourneyEvents } from './greatJourney';
import { civilizationEvents } from './civilization';
import { modernEvents } from './modern';
import { warEvents } from './wars';

export * from './types';

import { megafaunaEvents } from './megafauna';
import { homininEvents } from './hominins';

export const humanEvents: HumanEvent[] = [
    ...evolutionEvents,
    ...earlySapiensEvents,
    ...greatJourneyEvents,
    ...civilizationEvents,
    ...modernEvents,
    ...warEvents,
    ...megafaunaEvents,
    ...homininEvents
];

export {
    evolutionEvents,
    earlySapiensEvents,
    greatJourneyEvents,
    civilizationEvents,
    modernEvents,
    warEvents,
    megafaunaEvents,
    homininEvents
};
