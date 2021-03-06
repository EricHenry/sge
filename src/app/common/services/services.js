import CompilerService from "./compiler.service";
import InfoService from "./info.service";
import PathService from "./path.service";
import DefinitionsService from "./definitions.service";
import ObjectFactory from "./objectFactory.service";
import SwaggerHubService from "./SwaggerHub/swaggerHub.service";
import UtilitiesService from "./util.service.js";

export default angular.module("compilerModule", [])
                        .factory("CompilerService", CompilerService)
                        .factory("InfoService", InfoService)
                        .factory("PathService", PathService)
                        .factory("DefinitionsService", DefinitionsService)
                        .factory("ObjectFactory", ObjectFactory)
                        .factory("SwaggerHub", SwaggerHubService)
                        .factory("UtilitiesService", UtilitiesService);
