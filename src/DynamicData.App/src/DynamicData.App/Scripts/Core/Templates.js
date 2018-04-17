var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var TemplateWrapper = /** @class */ (function () {
            function TemplateWrapper(template, defaultEdit, defaultQuickView) {
                if (template) {
                    this._edit = template.edit;
                    this._quickView = template.quickView;
                }
                this._defaultEdit = defaultEdit;
                this._defaultQuickView = defaultQuickView;
            }
            Object.defineProperty(TemplateWrapper.prototype, "edit", {
                get: function () {
                    return this._edit || this._defaultEdit;
                },
                set: function (value) {
                    this._edit = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TemplateWrapper.prototype, "quickView", {
                get: function () {
                    return this._quickView || this._defaultQuickView;
                },
                set: function (value) {
                    this._quickView = value;
                },
                enumerable: true,
                configurable: true
            });
            return TemplateWrapper;
        }());
        Core.TemplateWrapper = TemplateWrapper;
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));
//# sourceMappingURL=Templates.js.map