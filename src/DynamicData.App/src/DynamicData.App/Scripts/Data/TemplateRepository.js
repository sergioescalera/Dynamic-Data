var DynamicData;
(function (DynamicData) {
    var Data;
    (function (Data) {
        "use strict";
        var TemplateRepository = /** @class */ (function () {
            function TemplateRepository(http, q) {
                var _this = this;
                this._q = q;
                this._editPromise = http
                    .get("html/Entity.html")
                    .then(function (response) {
                    _this._edit = response.data;
                });
                this._quickViewPromise = http
                    .get("html/EntityQuickViewForm.html")
                    .then(function (response) {
                    _this._quickView = response.data;
                });
            }
            TemplateRepository.prototype.Delete = function (name) {
                Data.storage.DeleteTemplate(name);
            };
            TemplateRepository.prototype.GetByName = function (name) {
                var _this = this;
                var template = Data.storage.GetTemplate(name);
                return this._q
                    .all([this._quickViewPromise, this._editPromise])
                    .then((function () {
                    return new DynamicData.Core.TemplateWrapper(template, _this._edit, _this._quickView);
                }).bind(this));
            };
            TemplateRepository.prototype.Save = function (name, template) {
                Data.storage.SetTemplate(name, {
                    edit: template ? template.edit : null,
                    quickView: template ? template.quickView : null
                });
            };
            return TemplateRepository;
        }());
        angular.module(DynamicData.Config.appName)
            .factory(Data.templateRepositoryName, [
            "$http",
            "$q",
            function (http, q) { return new TemplateRepository(http, q); }
        ]);
    })(Data = DynamicData.Data || (DynamicData.Data = {}));
})(DynamicData || (DynamicData = {}));
//# sourceMappingURL=TemplateRepository.js.map