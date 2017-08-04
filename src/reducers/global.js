const initialState = {
  locale: 'en',
};

export default function global( state = initialState, { payload, type } ) {
  switch ( type ) {
    default:
      return state;
  }
}
