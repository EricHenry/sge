const INITIAL_STATE = {
  '/defaultPath': {
    get: {
      summary: 'Click on the edit button to change this path!',
      parameters: [],
    },
  },
};

const NEW_OPERATION = {
  parameters: [],
  responses: {},
};

function editablePathsReducer(state = INITIAL_STATE, action) {
  let newPaths;
  let newPath;
  let parameter;
  let newParam

  switch (action.type) {
    case 'DELETE_PATH':
      newPaths = Object.assign({}, state);
      delete newPaths[action.pathName];
      return newPaths;
    case 'ADD_GET_OPERATION':
      newPath = angular.copy(state[action.pathName], {});
      newPath.get = Object.assign({}, NEW_OPERATION);

      return Object.assign({}, state, { [action.pathName]: newPath });

    case 'ADD_POST_OPERATION':
      newPath = angular.copy(state[action.pathName], {});
      newPath.post = Object.assign({}, NEW_OPERATION);

      return Object.assign({}, state, { [action.pathName]: newPath });

    case 'ADD_PUT_OPERATION':
      newPath = angular.copy(state[action.pathName], {});
      newPath.put = Object.assign({}, NEW_OPERATION);

      return Object.assign({}, state, { [action.pathName]: newPath });

    case 'ADD_DELETE_OPERATION':
      newPath = angular.copy(state[action.pathName], {});
      newPath.delete = Object.assign({}, NEW_OPERATION);

      return Object.assign({}, state, { [action.pathName]: newPath });

    case 'ADD_RESPONSE':
    case 'ADD_PARAMETER':
      newPath = angular.copy(state[action.pathName], {});
      newPath[action.operation].parameters.push({ name: 'update me!', required: false });

      return Object.assign({}, state, { [action.pathName]: newPath });

    case 'ADD_SCHEMA_TO_PARAMETER':
      newPath = angular.copy(state[action.pathName], {});
      parameter = newPath[action.operation].parameters[action.index];
      newParam = {
        name: parameter.name,
        required: parameter.required,
        in: parameter.in,
        description: parameter.description,
        schema: { $ref: '' },
      };

      newPath[action.operation].parameters.splice(action.index, 1, newParam);

      return Object.assign({}, state, { [action.pathName]: newPath });

    case 'ADD_EXTRA_FIELDS_TO_PARAMETER':
      newPath = angular.copy(state[action.pathName], {});
      parameter = newPath[action.operation].parameters[action.index];
      newParam = {
        name: parameter.name,
        required: action.inType === 'path' ? true : parameter.required,
        in: action.inType,
        description: parameter.description,
        type: '',
        format: '',
        items: {},
      };

      newPath[action.operation].parameters.splice(action.index, 1, newParam);

      return Object.assign({}, state, { [action.pathName]: newPath });

    default:
      return state;
  }
}

export default editablePathsReducer;
