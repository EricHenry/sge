import template from "./parameterEditor.html";
import controller from "./parameterEditor.controller";

/**
 */
export default function ParameterEditorComponent() {
    return {
        restrict: "E",
        template,
        controller,
        controllerAs: "paramModalControl"
    };
}
