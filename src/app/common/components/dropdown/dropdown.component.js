import template from './dropdown.html';
import controller from './dropdown.controller';

export default DropdownComponent;

function DropdownComponent(){
  return {
    restrict:'E',
    replace: true,
    template,
    scope:{},
    bindToController:{
      ngModel: '=',
      sgChoices: '=',
    },
    controller,
    controllerAs: 'dropdown',
  };
}