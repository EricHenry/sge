function OperationCtrl($ngRedux) {
  const unsubscribe = $ngRedux.connect(mapStateToCtrl)(this);

  function mapStateToCtrl({ rootReducer }) {
    const state = rootReducer;
    return {
      definitions: Object.keys(state.readableDefinition.definitions),
    };
  }

  this.$onInit = () => {
    this.pathName = this.path.pathName;
  };

  this.in = [
    'path',
    'query',
    'header',
    'body',
    'formData',
  ];

  this.addParameter = (pathName, operation) => {
    $ngRedux.dispatch({
      type: 'ADD_PARAMETER',
      pathName,
      operation,
    });
  };

  this.updateInTypeOfParameter = function updateInTypeOfParameter(pathName, operation, inType, index) {
    if (inType === 'body') {
      $ngRedux.dispatch({
        type: 'ADD_SCHEMA_TO_PARAMETER',
        pathName,
        operation,
        index,
      });
      return;
    }

    $ngRedux.dispatch({
      type: 'ADD_EXTRA_FIELDS_TO_PARAMETER',
      pathName,
      operation,
      index,
      inType,
    });
  };

  this.addResponse = (pathName, operation) => {
    $ngRedux.dispatch({
      type: 'ADD_RESPONSE',
      pathName,
      operation,
    });
  };
}

OperationCtrl.$inject = ['$ngRedux'];

export default OperationCtrl;
