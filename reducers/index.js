export default function filterPhone(state = [], action) {
  switch (action.type) {
    case 'INCREMENT':
      return state
    case 'DECREMENT':
      return state
    case 'FILTER_PHONE':
      return state.map((phone) => {
        if ((phone.name.toLowerCase()).indexOf((action.text.toLowerCase())) >= 0) {
          phone.visible = true;
        } else {
          phone.visible = false;
        }
        return phone;
      })
    case 'SORT_PHONE':
      console.log('sort!!');
      console.log(action);
      return state.sort((a, b) => {
          if (action.order == 'name') {
              if (a.name < b.name) {
                return -1;
              } else if (a.name > b.name ){
                return 1;
              } else {
                return 0;
              }
          } else if (action.order == 'age') {
              return a.age - b.age;
          } else {
            return 0;
          }
      })
    default:
      return state
  }
}
