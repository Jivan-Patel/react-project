export default function reducer(state, action) {
    switch (action.type) {
        case "inc": return { ...state, count: state.count + 1 };
        case "dec": return { ...state, count: state.count - 1 };
        case "reset": return { ...state, count: state.count = 0 };
        case "getCount": return { ...state, count: state.count = action.value };
        case "setName": return { ...state, name: state.name = "Jivan" };
        default: return state;
    }
}