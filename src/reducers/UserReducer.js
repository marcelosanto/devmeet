export const initialState = {
  events: [],
  event: [],
}

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setEvents':
      return { ...state, events: action.payload.events }
    case 'setEvent':
      return { ...state, event: action.payload.event }
    default:
      return state
  }
}
