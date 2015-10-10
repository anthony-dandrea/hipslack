export function users(state={}, {type, payload}) {
  switch (type) {
  case 'GET_USERS_SUCCEEDED':
    return {...state, ...payload.json};
  case 'POST_USER_INITIATED':
    return {...state, optimistic: {name: payload.name}};
  case 'POST_USER_SUCCEEDED':
    const {optimistic, ...oldState} = state;
    return {...oldState, [payload.json.name]: optimistic};
  default:
    return state;
  }
}

export function messages(state={}, {type, payload}) {
  switch (type) {
  case 'GET_MESSAGES_SUCCEEDED':
    return {...state, ...payload.json};
  case 'POST_MESSAGE_INITIATED':
    return {...state, optimistic: {content: payload.content, author: payload.author}};
  case 'POST_MESSAGE_SUCCEEDED':
    const {optimistic, ...oldState} = state;
    return {...oldState, [payload.json.name]: optimistic};
  default:
    return state;
  }
}
