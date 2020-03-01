import uuid from "uuid/v4";
const initalState = [
  {
    id: 1,
    name: "gym",
    duration: "2 hours"
  }
];

const activitiesReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CREATE_ACTIVITY":
      return [...state, {
        id: uuid(),
        name: payload.name,
        duration: payload.duration
      }];
    case "DELETE_ACTIVITY":
      const copyState = [...state];
      //Find id of object to remove
      const i = copyState.findIndex(x => x.id === payload.id);
      copyState.splice(i, 1);
      return [...copyState];
    default:
      return state;
  }

  return state;
};

export default activitiesReducer;