module DynamicData.Data {

    "use strict";

    export interface ITemplateRepository {
        Delete(name: string): void;
        GetByName(name: string): angular.IPromise<Core.IEntityTemplate>;
        Save(name: string, template: Core.IEntityTemplate): void;
    }

    class TemplateRepository implements ITemplateRepository {

        private _q: ng.IQService;
        private _edit: string;
        private _editPromise: ng.IPromise<void>;
        private _quickView: string;
        private _quickViewPromise: ng.IPromise<void>;

        constructor(http: ng.IHttpService, q: ng.IQService) {

            this._q = q;

            this._editPromise = http
                .get("html/Entity.html")
                .then((response: ng.IHttpPromiseCallbackArg<string>) => {

                    this._edit = response.data;
                });

            this._quickViewPromise = http
                .get("html/EntityQuickViewForm.html")
                .then((response: ng.IHttpPromiseCallbackArg<string>) => {

                    this._quickView = response.data;
                });
        }

        Delete(name: string): void {

            storage.DeleteTemplate(name);
        }

        GetByName(name: string): angular.IPromise<Core.IEntityTemplate> {

            var template: Core.IEntityTemplate = storage.GetTemplate(name);

            return this._q
                .all([this._quickViewPromise, this._editPromise])
                .then((() => {

                    return new Core.TemplateWrapper(template, this._edit, this._quickView);

                }).bind(this));
        }

        Save(name: string, template: Core.IEntityTemplate): void {

            storage.SetTemplate(name, {
                edit: template ? template.edit : null,
                quickView: template ? template.quickView : null
            });
        }
    }

    angular.module(Config.appName)
        .factory(templateRepositoryName, [
            "$http",
            "$q",
            (http: ng.IHttpService, q: ng.IQService) => new TemplateRepository(http, q)
        ]);
}