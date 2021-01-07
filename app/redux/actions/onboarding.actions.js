import {createAction} from 'redux-actions';
import {ONBOARDING_STEPS_COMPLETE} from '../types';

export const onboardingActionCreator = {
  onboardingStepsComplete: createAction(ONBOARDING_STEPS_COMPLETE),
}
