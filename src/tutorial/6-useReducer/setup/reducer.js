export const reducer = (state,action)=>{
  // return state
  if(action.type ==='ADD_ITEM'){
    const newPeople = [...state.people,action.payload];
      return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent:'item added',
    };
  }
    if(action.type ==='NO_VALUE'){
      return {...state,isModalOpen:true,modalContent:'Please enter value'}
    }
    if(action.type ==='CLOSE_MODAL'){
      return {...state,isModalOpen:false};
    }
    // remove Item
    if(action.type ==='REMOVE_ITEM'){
      const newPeople = state.people.filter(
        (person) => person.id !==action.payload
      );
      return {...state,people:newPeople};
    }
  throw new Error('no matching action type');
};

export default reducer