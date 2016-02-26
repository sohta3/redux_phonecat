export default function filterPhone(state = [], action) {
  switch (action.type) {
    case 'INCREMENT':
      return state
    case 'DECREMENT':
      return state
    case 'FILTER_PHONE':
        //console.log(action);
        //console.log(state);
        //console.log(state.filter((phone) => { return phone.name.indexOf(action.text) >= 0; })
      //return state
      return state.map((phone) => {
        if ((phone.name.toLowerCase()).indexOf((action.text.toLowerCase())) >= 0) {
          phone.visible = true;
        } else {
          phone.visible = false;
        }
        return phone;
      })
    default:
      return state
  }
}
