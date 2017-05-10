module DynamicData.UI.Controllers {

    "use strict";

    export interface IEntityScope extends ng.IScope {
        vm: ViewModels.EntityViewModel;
    }

    interface IEntityRouteParamsService extends ng.route.IRouteParamsService {
        entityType?: string;
        entityId?: string;
    }

    class EntityController {

        static $inject = [
            "$scope",
            "$routeParams",
            "$location",
            Core.appBarStatusName,
            Data.entityTypeRepositoryName,
            Data.entityRepositoryName
        ];

        constructor(
            scope: IEntityScope,
            routeParams: IEntityRouteParamsService,
            location: ng.ILocationService,
            appBarStatus: Core.IAppBarStatus,
            entityTypeRepository: Data.IEntityTypeRepository,
            entityRepository: Data.IEntityRepository) {

            Core.Trace.Message(`${entityControllerName}.constructor`);

            var type: string = routeParams.entityType;
            var id: number = routeParams.entityId ? parseInt(routeParams.entityId) : null;

            scope.vm = new ViewModels.EntityViewModel(scope, location, appBarStatus, entityTypeRepository, entityRepository, type, id);
        }
    }

    angular.module(Config.appName)
        .controller(entityControllerName, EntityController);
}