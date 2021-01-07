import {
  ONBOARDING_STEPS_COMPLETE,
} from '../types';

const initial = {
  onboardingStepsComlete: false,
};

export default function (state = initial, action) {
  const {type} = action;
  switch(type) {
    case ONBOARDING_STEPS_COMPLETE: {
      return {
        onboardingStepsComlete: true,
      };
    }
    default: return state;
  }
}
