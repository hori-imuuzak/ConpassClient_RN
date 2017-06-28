import nav from '../routes/Navigation';

const initialState = nav.router.getStateForAction(nav.router.getActionForPathAndParams('Splash'));

export default (state = initialState, action) => {
  const nextState = nav.router.getStateForAction(action, state);

  return nextState || state;
};