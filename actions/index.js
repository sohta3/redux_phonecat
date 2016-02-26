export const filterPhone = (text) => {
  return {
    type: 'FILTER_PHONE',
    text
  }
}

export const sortPhone = (order) => {
  return {
    type: 'SORT_PHONE',
    order
  }
}
