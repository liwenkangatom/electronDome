
export const constantName = 'constantName'
export const actionName = (param) => ({
  type: type,
  payload: payload
})

const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {

  case typeName:
    return { ...state }

  default:
    return state
  }
}
