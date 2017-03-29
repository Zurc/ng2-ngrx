// The 'items' reducer performs actions on our list of items
export const items = (state: any = [], {type, payload}) => {
  switch (type) {
    // ADD_ITEMS returns whatever collection we send in as the new array.
    case 'ADD_ITEMS':
      return payload;
    // CREATE_ITEM returns a new array by concatenating the existing items array with our new item.
    case 'CREATE_ITEM':
      return [...state, payload];
    // UPDATE_ITEM returns a new array by mapping through the current array, finding the item we want to update and cloning a new object using Object.assign.
    case 'UPDATE_ITEM':
      return state.map(item => {
        return item.id === payload.id ? Object.assign({}, item, payload) : item;
      });
    // DELETE_ITEM returns a new array by filtering out the item that we want to delete.
    case 'DELETE_ITEM':
      return state.filter(item => {
        return item.id !== payload.id;
      });
    default:
      return state;
  }
};
