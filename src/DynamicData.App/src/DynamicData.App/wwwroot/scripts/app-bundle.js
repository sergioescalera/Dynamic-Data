var undefinedstr = void 0;
var DynamicData;
(function (DynamicData) {
    "use strict";
    DynamicData.namespace = "DynamicData";
})(DynamicData || (DynamicData = {}));
var DynamicData;
(function (DynamicData) {
    var Config;
    (function (Config) {
        "use strict";
        Config.namespace = DynamicData.namespace + ".Config";
    })(Config = DynamicData.Config || (DynamicData.Config = {}));
})(DynamicData || (DynamicData = {}));
var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        Core.namespace = DynamicData.namespace + ".Core";
        Core.appBarStatusName = Core.namespace + ".AppBarStatus";
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));
var DynamicData;
(function (DynamicData) {
    var Data;
    (function (Data) {
        "use strict";
        Data.namespace = DynamicData.namespace + ".Data";
        Data.entityRepositoryName = Data.namespace + ".EntityRepository";
        Data.entityTypeRepositoryName = Data.namespace + ".EntityTypeRepository";
        Data.entityTypeSettingsRepositoryName = Data.namespace + ".EntityTypeSettingsRepository";
        Data.templateRepositoryName = Data.namespace + ".TemplateRepository";
        Data.sampleDataName = Data.namespace + ".SampleData";
    })(Data = DynamicData.Data || (DynamicData.Data = {}));
})(DynamicData || (DynamicData = {}));
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        ViewModels.namespace = DynamicData.namespace + ".ViewModels";
        ViewModels.dashboardViewModelName = ViewModels.namespace + ".DashboardViewModel";
        ViewModels.dashboardPivotItemViewModelName = ViewModels.namespace + ".DashboardPivotItemViewModel";
        ViewModels.entityViewModelName = DynamicData.namespace + ".EntityViewModel";
        ViewModels.editTypeViewModelName = DynamicData.namespace + ".EditTypeViewModel";
        ViewModels.fieldEditorViewModelName = ViewModels.namespace + ".FieldEditorViewModel";
        ViewModels.manageViewModelName = ViewModels.namespace + ".ManageViewModel";
        ViewModels.settingsViewModelName = ViewModels.namespace + ".SettingsViewModel";
        ViewModels.templatesViewModelName = ViewModels.namespace + ".TemplatesViewModel";
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));
var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        "use strict";
        UI.namespace = DynamicData.namespace + ".UI";
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));
var DynamicData;
(function (DynamicData) {
    var Resources;
    (function (Resources) {
        "use strict";
        Resources.namespace = DynamicData.namespace + ".Resources";
    })(Resources = DynamicData.Resources || (DynamicData.Resources = {}));
})(DynamicData || (DynamicData = {}));
var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            Controllers.namespace = DynamicData.UI.namespace + ".Controllers";
            Controllers.appBarControllerName = Controllers.namespace + ".AppBarController";
            Controllers.dashboardControllerName = Controllers.namespace + ".DashboardController";
            Controllers.dashboardPivotItemControllerName = Controllers.namespace + ".DashboardPivotItemController";
            Controllers.editTypeControllerName = Controllers.namespace + ".EditTypeController";
            Controllers.entityControllerName = Controllers.namespace + ".EntityController";
            Controllers.manageControllerName = Controllers.namespace + ".ManageController";
            Controllers.profileControllerName = Controllers.namespace + ".ProfileController";
            Controllers.settingsControllerName = Controllers.namespace + ".SettingsController";
            Controllers.templatesControllerName = Controllers.namespace + ".TemplatesController";
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));
var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Directives;
        (function (Directives) {
            "use strict";
            Directives.namespace = DynamicData.UI.namespace + ".Directives";
            Directives.entityQuickViewFormName = Directives.namespace + ".EntityQuickViewForm";
            Directives.fieldEditorName = Directives.namespace + ".FieldEditor";
            Directives.typeQuickViewFormName = Directives.namespace + ".TypeQuickViewForm";
        })(Directives = UI.Directives || (UI.Directives = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Resources;
    (function (Resources) {
        "use strict";
        var Strings = (function () {
            function Strings() {
            }
            Strings.RequiredFieldMessageFormat = function (paramName) { return ("'" + paramName + "' cannot be null or empty."); };
            Strings.RequiredArgumentMessageFormat = function (paramName) { return ("Argument cannot be null or empty '" + paramName + "'."); };
            Strings.DuplicatedEntityTypeMessageFormat = function (type) { return ("Duplicated entity type '" + type + "'."); };
            Strings.MissingEntityTypeMessageFormat = function (type) { return ("Entity type '" + type + "' is missing."); };
            Strings.NotSupportedMessage = "Not supported.";
            Strings.No = "No";
            Strings.Yes = "Yes";
            return Strings;
        }());
        Resources.Strings = Strings;
    })(Resources = DynamicData.Resources || (DynamicData.Resources = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Config;
    (function (Config) {
        "use strict";
        var RouteParameters = (function () {
            function RouteParameters() {
            }
            RouteParameters.entityType = ":entityType";
            RouteParameters.entityId = ":entityId";
            return RouteParameters;
        }());
        Config.RouteParameters = RouteParameters;
        var Routes = (function () {
            function Routes() {
            }
            Routes.home = function () { return "/home"; };
            Routes.homeWithType = function (entityType) {
                var route = "/home/" + RouteParameters.entityType;
                if (!angular.isUndefined(entityType)) {
                    route = route.replace(Config.RouteParameters.entityType, entityType);
                }
                return route;
            };
            Routes.profile = function () { return "/profile"; };
            Routes.settings = function () { return "/settings"; };
            Routes.manage = function () { return "/manage"; };
            Routes.typeCreate = function () { return "/type"; };
            Routes.type = function (entityType) {
                var route = "/type/" + RouteParameters.entityType;
                if (!angular.isUndefined(entityType)) {
                    route = route.replace(Config.RouteParameters.entityType, entityType);
                }
                return route;
            };
            Routes.entityCreate = function (entityType) {
                var route = "/entity/" + RouteParameters.entityType;
                if (!angular.isUndefined(entityType)) {
                    route = route.replace(Config.RouteParameters.entityType, entityType);
                }
                return route;
            };
            Routes.entity = function (entityType, entityId) {
                var route = "/entity/" + RouteParameters.entityType + "/" + RouteParameters.entityId;
                if (!angular.isUndefined(entityType)) {
                    route = route.replace(Config.RouteParameters.entityType, entityType);
                }
                if (!angular.isUndefined(entityId)) {
                    route = route.replace(Config.RouteParameters.entityId, entityId);
                }
                return route;
            };
            Routes.templates = function () { return "/templates"; };
            return Routes;
        }());
        Config.Routes = Routes;
        Config.appName = DynamicData.namespace + ".App";
        var module = angular.module(Config.appName, [
            "ngRoute",
            "ngResource",
            "ngMaterial",
            "ngMessages",
            "ngSanitize"
        ]);
        module.config(function init($routeProvider /*ng.route.IRouteProvider*/) {
            DynamicData.Core.Trace.Message(Config.namespace + ".init");
            $routeProvider
                .when(Routes.home(), {
                controller: DynamicData.UI.Controllers.dashboardControllerName,
                templateUrl: "html/Dashboard.html"
            })
                .when(Routes.homeWithType(), {
                controller: DynamicData.UI.Controllers.dashboardControllerName,
                templateUrl: "html/Dashboard.html"
            })
                .when(Routes.profile(), {
                controller: DynamicData.UI.Controllers.profileControllerName,
                templateUrl: "html/Profile.html"
            })
                .when(Routes.settings(), {
                controller: DynamicData.UI.Controllers.settingsControllerName,
                templateUrl: "html/Settings.html"
            })
                .when(Routes.manage(), {
                controller: DynamicData.UI.Controllers.manageControllerName,
                templateUrl: "html/Manage.html"
            })
                .when(Routes.typeCreate(), {
                controller: DynamicData.UI.Controllers.editTypeControllerName,
                templateUrl: "html/EditType.html"
            })
                .when(Routes.type(), {
                controller: DynamicData.UI.Controllers.editTypeControllerName,
                templateUrl: "html/EditType.html"
            })
                .when(Routes.entityCreate(), {
                controller: DynamicData.UI.Controllers.entityControllerName,
                templateUrl: "html/Entity.html"
            })
                .when(Routes.entity(), {
                controller: DynamicData.UI.Controllers.entityControllerName,
                templateUrl: "html/Entity.html"
            })
                .when(Routes.templates(), {
                controller: DynamicData.UI.Controllers.templatesControllerName,
                templateUrl: "html/Templates.html"
            })
                .otherwise({
                redirectTo: Routes.home
            });
        });
    })(Config = DynamicData.Config || (DynamicData.Config = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var AppBarStatus = (function () {
            function AppBarStatus() {
            }
            AppBarStatus.prototype.Detail = function () {
                this.IsNewDisabled = false;
                this.IsRefreshDisabled = false;
                this.IsDeleteDisabled = false;
                this.IsSaveDisabled = false;
                this.IsCancelDisabled = false;
            };
            AppBarStatus.prototype.Master = function () {
                this.IsNewDisabled = false;
                this.IsRefreshDisabled = false;
                this.IsDeleteDisabled = false;
                this.IsSaveDisabled = true;
                this.IsCancelDisabled = true;
            };
            return AppBarStatus;
        }());
        angular.module(DynamicData.Config.appName)
            .factory(Core.appBarStatusName, function () { return new AppBarStatus(); });
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var AttributeType = (function () {
            function AttributeType(name, displayName, typeCode) {
                this.Name = name;
                this.DisplayName = displayName;
                this.TypeCode = typeCode;
            }
            Object.defineProperty(AttributeType.prototype, "Name", {
                get: function () {
                    return this._name;
                },
                set: function (value) {
                    Core.Validation.EnsureRequired(value, "Name");
                    this._name = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AttributeType.prototype, "DisplayName", {
                get: function () {
                    return this._displayName;
                },
                set: function (value) {
                    Core.Validation.EnsureRequired(value, "DisplayName");
                    this._displayName = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AttributeType.prototype, "TypeCode", {
                get: function () {
                    return this._typeCode;
                },
                set: function (value) {
                    Core.Validation.EnsureRequired(value, "TypeCode");
                    this._typeCode = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AttributeType.prototype, "TypeCodeName", {
                get: function () {
                    return Core.AttributeTypeCode[this._typeCode];
                },
                enumerable: true,
                configurable: true
            });
            return AttributeType;
        }());
        Core.AttributeType = AttributeType;
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        (function (AttributeTypeCode) {
            AttributeTypeCode[AttributeTypeCode["Boolean"] = 1] = "Boolean";
            AttributeTypeCode[AttributeTypeCode["Date"] = 2] = "Date";
            AttributeTypeCode[AttributeTypeCode["DateTime"] = 3] = "DateTime";
            AttributeTypeCode[AttributeTypeCode["Decimal"] = 4] = "Decimal";
            AttributeTypeCode[AttributeTypeCode["Email"] = 5] = "Email";
            AttributeTypeCode[AttributeTypeCode["Int"] = 6] = "Int";
            AttributeTypeCode[AttributeTypeCode["Phone"] = 7] = "Phone";
            AttributeTypeCode[AttributeTypeCode["String"] = 8] = "String";
            AttributeTypeCode[AttributeTypeCode["Text"] = 9] = "Text";
            AttributeTypeCode[AttributeTypeCode["Url"] = 10] = "Url";
            AttributeTypeCode[AttributeTypeCode["Currency"] = 11] = "Currency";
            AttributeTypeCode[AttributeTypeCode["Time"] = 12] = "Time";
        })(Core.AttributeTypeCode || (Core.AttributeTypeCode = {}));
        var AttributeTypeCode = Core.AttributeTypeCode;
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var AttributeTypeSerialization = (function () {
            function AttributeTypeSerialization() {
            }
            AttributeTypeSerialization.FromPOCO = function (poco) {
                return new Core.AttributeType(poco.Name, poco.DisplayName, poco.TypeCode);
            };
            AttributeTypeSerialization.ToPOCO = function (attribute) {
                return {
                    Name: attribute.Name,
                    DisplayName: attribute.DisplayName,
                    TypeCode: attribute.TypeCode
                };
            };
            return AttributeTypeSerialization;
        }());
        Core.AttributeTypeSerialization = AttributeTypeSerialization;
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var Entity = (function () {
            function Entity(type, id) {
                if (id === void 0) { id = null; }
                Core.Validation.EnsureRequired(type, "type");
                this._type = type;
                this._fields = {};
                this.Id = id;
            }
            Object.defineProperty(Entity.prototype, "Type", {
                get: function () {
                    return this._type;
                },
                set: function (value) {
                    throw new Error(DynamicData.Resources.Strings.NotSupportedMessage);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Entity.prototype, "Fields", {
                get: function () {
                    return this._fields;
                },
                set: function (value) {
                    throw new Error(DynamicData.Resources.Strings.NotSupportedMessage);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Entity.prototype, "HasValidId", {
                get: function () {
                    return angular.isNumber(this.Id);
                },
                set: function (value) {
                    throw new Error(DynamicData.Resources.Strings.NotSupportedMessage);
                },
                enumerable: true,
                configurable: true
            });
            return Entity;
        }());
        Core.Entity = Entity;
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var EntitySerialization = (function () {
            function EntitySerialization() {
            }
            EntitySerialization.FromPOCO = function (type, id, poco) {
                var entity = new Core.Entity(type, id);
                var keys = Object.keys(poco);
                keys.forEach(function (key) {
                    var attribute = entity.Type.GetAttribute(key);
                    if (!!attribute) {
                        entity.Fields[key] = EntitySerialization.ParseField(attribute, poco[key]);
                    }
                });
                return entity;
            };
            EntitySerialization.ParseField = function (type, value) {
                switch (type.TypeCode) {
                    case Core.AttributeTypeCode.Boolean:
                        if (typeof value === "boolean") {
                            return value;
                        }
                    case Core.AttributeTypeCode.Currency:
                    case Core.AttributeTypeCode.Decimal:
                    case Core.AttributeTypeCode.Int:
                        if (angular.isNumber(value)) {
                            return value;
                        }
                    case Core.AttributeTypeCode.Date:
                    case Core.AttributeTypeCode.DateTime:
                    case Core.AttributeTypeCode.Time:
                        if (angular.isDate(value)) {
                            return value;
                        }
                        if (angular.isString(value)) {
                            return moment(value).toDate();
                        }
                    case Core.AttributeTypeCode.Email:
                    case Core.AttributeTypeCode.Phone:
                    case Core.AttributeTypeCode.String:
                    case Core.AttributeTypeCode.Text:
                    case Core.AttributeTypeCode.Url:
                        if (angular.isString(value)) {
                            return value;
                        }
                    default:
                        return null;
                }
            };
            return EntitySerialization;
        }());
        Core.EntitySerialization = EntitySerialization;
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var EntityType = (function () {
            function EntityType(name, displayName, displayPluralName) {
                this.Name = name;
                this.DisplayName = displayName;
                this.DisplayPluralName = displayPluralName;
            }
            Object.defineProperty(EntityType.prototype, "Name", {
                get: function () {
                    return this._name;
                },
                set: function (value) {
                    Core.Validation.EnsureRequired(value, "Name");
                    this._name = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(EntityType.prototype, "DisplayName", {
                get: function () {
                    return this._displayName;
                },
                set: function (value) {
                    Core.Validation.EnsureRequired(value, "Display Name");
                    this._displayName = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(EntityType.prototype, "DisplayPluralName", {
                get: function () {
                    return this._displayPluralName;
                },
                set: function (value) {
                    Core.Validation.EnsureRequired(value, "Display Plural Name");
                    this._displayPluralName = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(EntityType.prototype, "Icon", {
                get: function () {
                    return this._icon;
                },
                set: function (value) {
                    this._icon = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(EntityType.prototype, "Attributes", {
                get: function () {
                    if (!this._attributes) {
                        this._attributes = [];
                    }
                    return this._attributes;
                },
                set: function (value) {
                    throw new Error(DynamicData.Resources.Strings.NotSupportedMessage);
                },
                enumerable: true,
                configurable: true
            });
            EntityType.prototype.AddAttribute = function (attribute) {
                if (!attribute) {
                    return false;
                }
                var found = this.GetAttribute(attribute.Name);
                if (!!found) {
                    return false;
                }
                this.Attributes.push(attribute);
            };
            EntityType.prototype.DeleteAttribute = function (name) {
                var found = this.GetAttribute(name);
                if (!found) {
                    return false;
                }
                var attributes = this.Attributes;
                var index = attributes.indexOf(found);
                attributes.splice(index, 1);
                return true;
            };
            EntityType.prototype.GetAttribute = function (name) {
                if (!name) {
                    return null;
                }
                var filter = this.Attributes.filter(function (a) { return a.Name === name; });
                return !!filter && !!filter.length ? filter[0] : null;
            };
            EntityType.prototype.IsValid = function () {
                return this.NameIsValid() && !!this.DisplayName && !!this.DisplayPluralName && this.Attributes.length > 0;
            };
            EntityType.prototype.NameIsValid = function () {
                return angular.isDefined(this._name)
                    && angular.isString(this._name)
                    && this._name !== null
                    && this._name !== ""
                    && this._name !== "undefined"
                    && /^[a-zA-Z_]+$/.test(this._name);
            };
            return EntityType;
        }());
        Core.EntityType = EntityType;
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var EntityTypeSerialization = (function () {
            function EntityTypeSerialization() {
            }
            EntityTypeSerialization.ToPOCO = function (type) {
                return {
                    Name: type.Name,
                    DisplayName: type.DisplayName,
                    DisplayPluralName: type.DisplayPluralName,
                    Icon: type.Icon,
                    Attributes: type.Attributes.map(function (a) { return Core.AttributeTypeSerialization.ToPOCO(a); })
                };
            };
            EntityTypeSerialization.FromPOCO = function (poco) {
                var type = new Core.EntityType(poco.Name, poco.DisplayName, poco.DisplayPluralName);
                type.Icon = poco._icon;
                for (var i = 0; i < poco.Attributes.length; i++) {
                    try {
                        var attribute = Core.AttributeTypeSerialization.FromPOCO(poco.Attributes[i]);
                        type.Attributes.push(attribute);
                    }
                    catch (e) {
                        Core.Trace.Warning(e);
                    }
                }
                return type;
            };
            return EntityTypeSerialization;
        }());
        Core.EntityTypeSerialization = EntityTypeSerialization;
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var TemplateWrapper = (function () {
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

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var Trace = (function () {
            function Trace() {
            }
            Trace.ConsoleSupport = function () {
                return typeof console !== undefinedstr &&
                    typeof console.log !== undefinedstr &&
                    typeof console.warn !== undefinedstr &&
                    typeof console.error !== undefinedstr;
            };
            Trace.Message = function (message) {
                if (!Trace.ConsoleSupport()) {
                    return;
                }
                console.log(message);
            };
            Trace.Warning = function (message) {
                if (!Trace.ConsoleSupport()) {
                    return;
                }
                console.warn(message);
            };
            return Trace;
        }());
        Core.Trace = Trace;
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var Validation = (function () {
            function Validation() {
            }
            Validation.EnsureRequired = function (value, label, validateEmptyString) {
                if (validateEmptyString === void 0) { validateEmptyString = true; }
                if (value === undefined || value === null) {
                    throw new Error(DynamicData.Resources.Strings.RequiredFieldMessageFormat(label));
                }
                if (validateEmptyString && value === "") {
                    throw new Error(DynamicData.Resources.Strings.RequiredFieldMessageFormat(label));
                }
            };
            return Validation;
        }());
        Core.Validation = Validation;
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Data;
    (function (Data) {
        "use strict";
        (function (DataActionError) {
            DataActionError[DataActionError["Unknown"] = -1] = "Unknown";
            DataActionError[DataActionError["None"] = 0] = "None";
            DataActionError[DataActionError["NotFound"] = 1] = "NotFound";
            DataActionError[DataActionError["Duplicate"] = 2] = "Duplicate";
        })(Data.DataActionError || (Data.DataActionError = {}));
        var DataActionError = Data.DataActionError;
        var DataActionResult = (function () {
            function DataActionResult(error) {
                this.Success = !error;
                this.Error = error || DataActionError.None;
            }
            return DataActionResult;
        }());
        var DataActionResults = (function () {
            function DataActionResults() {
            }
            DataActionResults.success = new DataActionResult();
            DataActionResults.notFound = new DataActionResult(DataActionError.NotFound);
            DataActionResults.duplicate = new DataActionResult(DataActionError.Duplicate);
            return DataActionResults;
        }());
        Data.DataActionResults = DataActionResults;
    })(Data = DynamicData.Data || (DynamicData.Data = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Data;
    (function (Data) {
        "use strict";
        var EntityRepository = (function () {
            function EntityRepository(entityTypeRepository) {
                if (!entityTypeRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entityTypeRepository"));
                }
                this._entityTypeRepository = entityTypeRepository;
            }
            EntityRepository.prototype.GetByType = function (type) {
                if (!type) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("type"));
                }
                var valid = this.ValidateType(type);
                if (!valid) {
                    return null;
                }
                return Data.storage.GetEntities(type) || [];
            };
            EntityRepository.prototype.GetById = function (type, entityId) {
                var entities = this.GetByType(type);
                if (!entities) {
                    return null;
                }
                if (entityId > entities.length) {
                    return null;
                }
                return entities[entityId];
            };
            EntityRepository.prototype.CreateOrUpdate = function (entity) {
                if (!entity) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entity"));
                }
                if (entity.HasValidId) {
                    return this.Update(entity);
                }
                else {
                    return this.Create(entity);
                }
            };
            EntityRepository.prototype.BulkDelete = function (type, identifiers) {
                if (!type) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("type"));
                }
                var entities = this.GetByType(type);
                if (!entities) {
                    return;
                }
                var results = [];
                identifiers
                    .sort(function (a, b) { return b - a; })
                    .forEach(function (id) {
                    if (id < entities.length) {
                        entities.splice(id, 1);
                        results.push(Data.DataActionResults.success);
                    }
                    else {
                        results.push(Data.DataActionResults.notFound);
                    }
                });
                if (results.filter(function (r) { return r.Success; }).length > 0) {
                    Data.storage.SetEntities(type, entities);
                }
                return results;
            };
            EntityRepository.prototype.Create = function (entity) {
                if (!entity) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entity"));
                }
                var entities = this.GetByType(entity.Type);
                if (!entities) {
                    return Data.DataActionResults.notFound;
                }
                entities.push(entity);
                entity.Id = entities.length - 1;
                Data.storage.SetEntities(entity.Type, entities);
                return Data.DataActionResults.success;
            };
            EntityRepository.prototype.Update = function (entity) {
                if (!entity) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entity"));
                }
                var entities = this.GetByType(entity.Type);
                if (!entities) {
                    return Data.DataActionResults.notFound;
                }
                if (entity.Id > entities.length) {
                    return Data.DataActionResults.notFound;
                }
                entities[entity.Id] = entity;
                Data.storage.SetEntities(entity.Type, entities);
                return Data.DataActionResults.success;
            };
            EntityRepository.prototype.ValidateType = function (type) {
                return !!this._entityTypeRepository.GetByName(type.Name);
            };
            return EntityRepository;
        }());
        angular.module(DynamicData.Config.appName)
            .factory(Data.entityRepositoryName, [
            Data.entityTypeRepositoryName,
            function (entityTypeRepository) { return new EntityRepository(entityTypeRepository); }]);
    })(Data = DynamicData.Data || (DynamicData.Data = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Data;
    (function (Data) {
        "use strict";
        var EntityTypeRepository = (function () {
            function EntityTypeRepository() {
            }
            EntityTypeRepository.prototype.GetAll = function () {
                return Data.storage.Types;
            };
            EntityTypeRepository.prototype.GetByName = function (entityTypeName) {
                var types = this.GetAll();
                var filtered = types.filter(function (t) { return t.Name === entityTypeName; });
                return filtered.length ? filtered[0] : null;
            };
            EntityTypeRepository.prototype.BulkCreate = function (types) {
                if (!types) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("types"));
                }
                var storedTypes = this.GetAll();
                var results = [];
                for (var i = 0; i < types.length; i++) {
                    var type = types[i];
                    if (storedTypes.filter(function (t) { return t.Name === type.Name; }).length > 0) {
                        DynamicData.Core.Trace.Warning(DynamicData.Resources.Strings.DuplicatedEntityTypeMessageFormat(type.Name));
                        results.push(Data.DataActionResults.duplicate);
                    }
                    storedTypes.push(type);
                    results.push(Data.DataActionResults.success);
                }
                if (results.filter(function (o) { return o.Success; }).length > 0) {
                    Data.storage.Types = storedTypes;
                }
                return results;
            };
            EntityTypeRepository.prototype.BulkDelete = function (types) {
                if (!types) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("types"));
                }
                var storedTypes = this.GetAll();
                var results = [];
                types.forEach(function (name) {
                    var filter = storedTypes.filter(function (t) { return t.Name === name; });
                    if (filter.length > 0) {
                        var index = storedTypes.indexOf(filter[0]);
                        Data.storage.DeleteEntities(name);
                        Data.storage.DeleteTemplate(name);
                        Data.storage.DeleteTypeSettings(name);
                        storedTypes.splice(index, 1);
                        results.push(Data.DataActionResults.success);
                    }
                    else {
                        DynamicData.Core.Trace.Warning(DynamicData.Resources.Strings.MissingEntityTypeMessageFormat(name));
                        results.push(Data.DataActionResults.notFound);
                    }
                });
                if (results.filter(function (o) { return o.Success; }).length > 0) {
                    Data.storage.Types = storedTypes;
                }
                return results;
            };
            EntityTypeRepository.prototype.Create = function (type) {
                if (!type) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("type"));
                }
                var types = this.GetAll();
                var filtered = types.filter(function (t) { return t.Name === type.Name; });
                if (filtered.length > 0) {
                    DynamicData.Core.Trace.Warning(DynamicData.Resources.Strings.DuplicatedEntityTypeMessageFormat(type.Name));
                    return Data.DataActionResults.duplicate;
                }
                types.push(type);
                Data.storage.Types = types;
                return Data.DataActionResults.success;
            };
            EntityTypeRepository.prototype.Update = function (type) {
                if (!type) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("type"));
                }
                var types = this.GetAll();
                var filtered = types.filter(function (t) { return t.Name === type.Name; });
                if (filtered.length === 0) {
                    DynamicData.Core.Trace.Warning(DynamicData.Resources.Strings.MissingEntityTypeMessageFormat(type.Name));
                    return Data.DataActionResults.notFound;
                }
                var index = types.indexOf(filtered[0]);
                types[index] = type;
                Data.storage.Types = types;
                return Data.DataActionResults.success;
            };
            return EntityTypeRepository;
        }());
        angular.module(DynamicData.Config.appName)
            .factory(Data.entityTypeRepositoryName, function () { return new EntityTypeRepository(); });
    })(Data = DynamicData.Data || (DynamicData.Data = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Data;
    (function (Data) {
        "use strict";
        var EntityTypeSettingsRepository = (function () {
            function EntityTypeSettingsRepository(q) {
                this._q = q;
            }
            EntityTypeSettingsRepository.prototype.GetByName = function (typeName) {
                var settings = Data.storage.GetTypeSettings(typeName);
                var deferred = this._q.defer();
                deferred.resolve(settings || {
                    SortBy: "",
                    SortByDescending: false
                });
                return deferred.promise;
            };
            EntityTypeSettingsRepository.prototype.Save = function (typeName, settings) {
                Data.storage.SetTypeSettings(typeName, settings);
            };
            return EntityTypeSettingsRepository;
        }());
        angular.module(DynamicData.Config.appName)
            .factory(Data.entityTypeSettingsRepositoryName, [
            "$q",
            function ($q) { return new EntityTypeSettingsRepository($q); }]);
    })(Data = DynamicData.Data || (DynamicData.Data = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Data;
    (function (Data) {
        "use strict";
        var SampleData = (function () {
            function SampleData(entityTypeRepository, templateRepository) {
                if (!entityTypeRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entityTypeRepository"));
                }
                if (!templateRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("templateRepository"));
                }
                this._entityTypeRepository = entityTypeRepository;
                this._templateRepository = templateRepository;
            }
            SampleData.prototype.Install = function () {
                var types = [
                    this.CreateContacts(),
                    this.CreateExpenses(),
                    this.CreateNotes(),
                    this.CreateTasks()];
                this._entityTypeRepository.BulkCreate(types);
                this.CreateTemplates();
            };
            SampleData.prototype.CreateContacts = function () {
                var type = new DynamicData.Core.EntityType("contacts", "Contact", "Contacts");
                type.Attributes.push(new DynamicData.Core.AttributeType("firstname", "First Name", DynamicData.Core.AttributeTypeCode.String));
                type.Attributes.push(new DynamicData.Core.AttributeType("lastname", "Last Name", DynamicData.Core.AttributeTypeCode.String));
                type.Attributes.push(new DynamicData.Core.AttributeType("email", "Email", DynamicData.Core.AttributeTypeCode.String));
                type.Attributes.push(new DynamicData.Core.AttributeType("phone", "Phone", DynamicData.Core.AttributeTypeCode.String));
                return type;
            };
            SampleData.prototype.CreateExpenses = function () {
                var type = new DynamicData.Core.EntityType("expenses", "Expense", "Expenses");
                type.Attributes.push(new DynamicData.Core.AttributeType("description", "Description", DynamicData.Core.AttributeTypeCode.String));
                type.Attributes.push(new DynamicData.Core.AttributeType("amount", "Amount", DynamicData.Core.AttributeTypeCode.Currency));
                type.Attributes.push(new DynamicData.Core.AttributeType("date", "Date", DynamicData.Core.AttributeTypeCode.Date));
                return type;
            };
            SampleData.prototype.CreateNotes = function () {
                var type = new DynamicData.Core.EntityType("notes", "Note", "Notes");
                type.Attributes.push(new DynamicData.Core.AttributeType("text", "Text", DynamicData.Core.AttributeTypeCode.Text));
                return type;
            };
            SampleData.prototype.CreateTasks = function () {
                var type = new DynamicData.Core.EntityType("tasks", "Task", "Tasks");
                type.Attributes.push(new DynamicData.Core.AttributeType("title", "Title", DynamicData.Core.AttributeTypeCode.String));
                type.Attributes.push(new DynamicData.Core.AttributeType("description", "Description", DynamicData.Core.AttributeTypeCode.Text));
                type.Attributes.push(new DynamicData.Core.AttributeType("completed", "Completed", DynamicData.Core.AttributeTypeCode.Boolean));
                return type;
            };
            SampleData.prototype.CreateTemplates = function () {
                var templates = {
                    "contacts": this.CreateContactTemplate(),
                    "expenses": this.CreateExpenseTemplate()
                };
                var keys = Object.keys(templates);
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    this._templateRepository.Save(key, templates[key]);
                }
            };
            SampleData.prototype.CreateContactTemplate = function () {
                return {
                    quickView: "<md-card class=\"entity-view-form\">\n    <md-card-title>\n        <md-card-title-text>\n            <span class=\"entity-name\" ng-bind=\"entity.Type.DisplayName\" ng-click=\"open()\"></span>\n        </md-card-title-text>\n    </md-card-title>\n    <md-card-content>\n        <div class=\"attribute-list\">\n            <div class=\"attribute\">\n                <span ng-bind=\"entity.Fields.firstname\"></span>&nbsp;\n                <span ng-bind=\"entity.Fields.lastname\"></span>\n            </div>\n            <div class=\"attribute\">\n                Phone: <span ng-bind=\"entity.Fields.phone\"></span>\n            </div>\n            <div class=\"attribute\">\n                Email: <span ng-bind=\"entity.Fields.email\"></span>\n            </div>\n        </div>\n    </md-card-content>\n</md-card>"
                };
            };
            SampleData.prototype.CreateExpenseTemplate = function () {
                return {
                    quickView: "<md-card class=\"entity-view-form\">\n    <md-card-title>\n        <md-card-title-text>\n            <span class=\"entity-name\" ng-bind=\"entity.Type.DisplayName\" ng-click=\"open()\"></span>\n        </md-card-title-text>\n    </md-card-title>\n    <md-card-content>\n        <div class=\"attribute-list\">\n            <div class=\"attribute\">\n                <span ng-bind=\"format(entity.Fields.date)\"></span>&nbsp;\n                <span ng-bind=\"entity.Fields.description\"></span>&nbsp;\n                <span ng-bind=\"entity.Fields.amount\"></span>\n            </div>\n        </div>\n    </md-card-content>\n</md-card>"
                };
            };
            return SampleData;
        }());
        angular.module(DynamicData.Config.appName)
            .factory(Data.sampleDataName, [
            Data.entityTypeRepositoryName,
            Data.templateRepositoryName,
            function (entityTypeRepository, templateRepository) {
                return new SampleData(entityTypeRepository, templateRepository);
            }
        ]);
    })(Data = DynamicData.Data || (DynamicData.Data = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Data;
    (function (Data) {
        "use strict";
        var Storage = (function () {
            function Storage() {
                this._settingsKey = "settings";
                this._typesKey = "types";
                this._templateKey = "template_";
                this._entitiesKey = "data_";
                this._typeSettingsKey = "type_settings_";
            }
            Object.defineProperty(Storage.prototype, "Settings", {
                // settings
                get: function () {
                    var obj = this.getObject(this._settingsKey);
                    return obj || { IsTraceEnabled: true, IsSampleDataInstalled: false, IsDebugEnabled: false };
                },
                set: function (value) {
                    this.setObject(this._settingsKey, value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Storage.prototype, "Types", {
                // types
                get: function () {
                    var array = this.getObject(this._typesKey) || [];
                    var results = [];
                    array.forEach(function (o) {
                        try {
                            results.push(DynamicData.Core.EntityTypeSerialization.FromPOCO(o));
                        }
                        catch (e) {
                            DynamicData.Core.Trace.Warning(e);
                        }
                    });
                    return results;
                },
                set: function (value) {
                    this.setObject(this._typesKey, value.map(function (t) { return DynamicData.Core.EntityTypeSerialization.ToPOCO(t); }));
                },
                enumerable: true,
                configurable: true
            });
            // entities
            Storage.prototype.GetEntities = function (type) {
                if (!type) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("type"));
                }
                var array = this.getObject(this._entitiesKey + type.Name);
                if (angular.isArray(array)) {
                    return array.map(function (o, id) { return DynamicData.Core.EntitySerialization.FromPOCO(type, id, o); });
                }
                return null;
            };
            Storage.prototype.SetEntities = function (type, value) {
                if (!type) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("type"));
                }
                var array = value.map(function (o) { return o.Fields; });
                this.setObject(this._entitiesKey + type.Name, array);
            };
            Storage.prototype.DeleteEntities = function (typeName) {
                localStorage.removeItem(this._templateKey + typeName);
            };
            // templates
            Storage.prototype.GetTemplate = function (typeName) {
                if (!typeName) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("typeName"));
                }
                var template = this.getObject(this._templateKey + typeName);
                return template;
            };
            Storage.prototype.SetTemplate = function (typeName, template) {
                if (!typeName) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("typeName"));
                }
                if (!template) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("template"));
                }
                this.setObject(this._templateKey + typeName, template);
            };
            Storage.prototype.DeleteTemplate = function (typeName) {
                if (!typeName) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("typeName"));
                }
                localStorage.removeItem(this._templateKey + typeName);
            };
            // type settings
            Storage.prototype.GetTypeSettings = function (typeName) {
                if (!typeName) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("typeName"));
                }
                var settings = this.getObject(this._typeSettingsKey + typeName);
                return settings;
            };
            Storage.prototype.SetTypeSettings = function (typeName, settings) {
                if (!typeName) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("typeName"));
                }
                if (!settings) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("settings"));
                }
                this.setObject(this._typeSettingsKey + typeName, settings);
            };
            Storage.prototype.DeleteTypeSettings = function (typeName) {
                if (!typeName) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("typeName"));
                }
                localStorage.removeItem(this._typeSettingsKey + typeName);
            };
            // private
            Storage.prototype.getObject = function (key) {
                if (!key) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("key"));
                }
                var str = localStorage.getItem(key);
                if (!str) {
                    return null;
                }
                var obj = JSON.parse(str);
                return obj;
            };
            Storage.prototype.setObject = function (key, obj) {
                if (!key) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("key"));
                }
                var str;
                if (obj) {
                    str = JSON.stringify(obj);
                }
                localStorage.setItem(key, str);
            };
            return Storage;
        }());
        Data.storage = new Storage();
    })(Data = DynamicData.Data || (DynamicData.Data = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Data;
    (function (Data) {
        "use strict";
        var TemplateRepository = (function () {
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

var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var BaseViewModel = (function () {
            function BaseViewModel(settings) {
                this.Settings = settings || DynamicData.Data.storage.Settings;
            }
            return BaseViewModel;
        }());
        ViewModels.BaseViewModel = BaseViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var DashboardPivotItemViewModel = (function (_super) {
            __extends(DashboardPivotItemViewModel, _super);
            function DashboardPivotItemViewModel(scope, location, mdDialog, entityRepository, entityTypeSettingsRepository, type) {
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!location) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("location"));
                }
                if (!mdDialog) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("mdDialog"));
                }
                if (!entityRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("repository"));
                }
                if (!entityTypeSettingsRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entityTypeSettingsRepository"));
                }
                if (!type) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("type"));
                }
                _super.call(this);
                scope.$on("AppBarScope::delete", this.PromptDelete.bind(this));
                this._scope = scope;
                this._location = location;
                this._mdDialog = mdDialog;
                this._entityRepository = entityRepository;
                this._entityTypeSettingsRepository = entityTypeSettingsRepository;
                this.Type = type;
                this.Init();
                scope.$watch("vm.TypeSettings.SortBy", this.Sort.bind(this));
                scope.$watch("vm.TypeSettings.SortByDescending", this.Sort.bind(this));
            }
            DashboardPivotItemViewModel.prototype.Init = function () {
                this.Selected = {};
                this.SortByOptions = this.Type.Attributes.sort(function (a, b) {
                    if (a.Name < b.Name) {
                        return -1;
                    }
                    if (a.Name > b.Name) {
                        return 1;
                    }
                    return 0;
                });
                this.TypeSettings = { SortBy: "", SortByDescending: false };
                this._entityTypeSettingsRepository
                    .GetByName(this.Type.Name)
                    .then(this.SetSettings.bind(this))
                    .then(this.Sort.bind(this));
            };
            DashboardPivotItemViewModel.prototype.Add = function () {
                DynamicData.Core.Trace.Message(ViewModels.dashboardViewModelName + ".Add");
                this._location.url(DynamicData.Config.Routes.entityCreate(this.Type.Name));
            };
            DashboardPivotItemViewModel.prototype.Open = function (index) {
                this._location.url(DynamicData.Config.Routes.entity(this.Type.Name, index.toString()));
            };
            DashboardPivotItemViewModel.prototype.PromptDelete = function () {
                var _this = this;
                DynamicData.Core.Trace.Message(ViewModels.dashboardPivotItemViewModelName + ".PromptDelete");
                var keys = Object
                    .keys(this.Selected)
                    .filter(function (k) { return !!_this.Selected[k]; });
                if (keys.length === 0) {
                    return;
                }
                var confirm = this._mdDialog.confirm()
                    .title("Confirmation")
                    .textContent("Are you sure you want to delete the selected " + this.Type.DisplayPluralName + "? This action cannot be undone.")
                    .ariaLabel("Delete Confirmation")
                    .ok("Yes")
                    .cancel("No");
                this._mdDialog
                    .show(confirm)
                    .then(this.Delete.bind(this))
                    .catch(function () { });
            };
            DashboardPivotItemViewModel.prototype.Delete = function () {
                var _this = this;
                DynamicData.Core.Trace.Message(ViewModels.dashboardPivotItemViewModelName + ".Delete");
                var indexes = Object
                    .keys(this.Selected)
                    .filter(function (k) { return !!_this.Selected[k]; })
                    .map(function (k) { return parseInt(k); });
                this._entityRepository.BulkDelete(this.Type, indexes);
                this.Init();
            };
            DashboardPivotItemViewModel.prototype.Sort = function () {
                var _this = this;
                var array = this._entityRepository.GetByType(this.Type);
                var sortBy = this.TypeSettings.SortBy;
                var asc = this.TypeSettings.SortByDescending ? -1 : 1;
                if (!!sortBy) {
                    array = array.sort(function (e1, e2) {
                        var v1 = _this.DefaultIfNotDefined(e1, sortBy);
                        var v2 = _this.DefaultIfNotDefined(e2, sortBy);
                        if (v1 < v2) {
                            return -1 * asc;
                        }
                        if (v1 > v2) {
                            return 1 * asc;
                        }
                        return 0;
                    });
                }
                this.Entities = array;
                this._entityTypeSettingsRepository.Save(this.Type.Name, this.TypeSettings);
            };
            DashboardPivotItemViewModel.prototype.SetSettings = function (value) {
                this.TypeSettings = value;
            };
            DashboardPivotItemViewModel.prototype.DefaultIfNotDefined = function (entity, fieldName) {
                var attribute = this.Type
                    .Attributes
                    .filter(function (o) { return o.Name === fieldName; });
                var isString = attribute[0].TypeCode === DynamicData.Core.AttributeTypeCode.Email
                    || attribute[0].TypeCode === DynamicData.Core.AttributeTypeCode.Phone
                    || attribute[0].TypeCode === DynamicData.Core.AttributeTypeCode.String
                    || attribute[0].TypeCode === DynamicData.Core.AttributeTypeCode.Text
                    || attribute[0].TypeCode === DynamicData.Core.AttributeTypeCode.Url;
                var value = entity.Fields[fieldName];
                var dfault = isString ? "" : null;
                return angular.isDefined(value) ? value : dfault;
            };
            return DashboardPivotItemViewModel;
        }(ViewModels.BaseViewModel));
        ViewModels.DashboardPivotItemViewModel = DashboardPivotItemViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var DashboardViewModel = (function (_super) {
            __extends(DashboardViewModel, _super);
            function DashboardViewModel(scope, location, repository, sampleData, entityTypeName) {
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!location) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("location"));
                }
                if (!repository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("repository"));
                }
                if (!sampleData) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("sampleData"));
                }
                _super.call(this);
                this._scope = scope;
                this._location = location;
                this._repository = repository;
                this._sampleData = sampleData;
                scope.$on("AppBarScope::add", this.Add.bind(this));
                scope.$watch("vm.SelectedIndex", this.SelectedIndexChanged.bind(this));
                this.Init(entityTypeName);
            }
            DashboardViewModel.prototype.Init = function (entityTypeName) {
                this.Types = this._repository.GetAll();
                if (!entityTypeName && this.Settings.CurrentEntityType) {
                    this._location.url(DynamicData.Config.Routes.homeWithType(this.Settings.CurrentEntityType));
                }
                else if (entityTypeName) {
                    var filter = this.Types.filter(function (t) { return t.Name === entityTypeName; });
                    if (!filter.length) {
                        this._location.url(DynamicData.Config.Routes.home());
                    }
                    else {
                        this.SelectedIndex = this.Types.indexOf(filter[0]);
                    }
                }
                else {
                    this.SelectedIndex = 0;
                }
            };
            DashboardViewModel.prototype.Add = function () {
                DynamicData.Core.Trace.Message(ViewModels.dashboardViewModelName + ".Add");
                var type = this.Types[this.SelectedIndex];
                this._location.url(DynamicData.Config.Routes.entityCreate(type.Name));
            };
            DashboardViewModel.prototype.InstallSampleData = function () {
                var settings = DynamicData.Data.storage.Settings;
                this._sampleData.Install();
                if (!settings.IsSampleDataInstalled) {
                    settings.IsSampleDataInstalled = true;
                    DynamicData.Data.storage.Settings = settings;
                }
                this.Init();
            };
            DashboardViewModel.prototype.SelectedIndexChanged = function (newValue, oldValue) {
                DynamicData.Core.Trace.Message(ViewModels.dashboardViewModelName + ".SelectionChanged(" + newValue + ", " + oldValue + ")");
                if (newValue === oldValue) {
                    return;
                }
                if (newValue >= 0 && newValue < this.Types.length) {
                    var currentEntityType = this.Types[newValue].Name;
                    this.Settings.CurrentEntityType = currentEntityType;
                    DynamicData.Data.storage.Settings = this.Settings;
                    this._location.url(DynamicData.Config.Routes.homeWithType(currentEntityType));
                }
            };
            return DashboardViewModel;
        }(ViewModels.BaseViewModel));
        ViewModels.DashboardViewModel = DashboardViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var EditTypeViewModel = (function (_super) {
            __extends(EditTypeViewModel, _super);
            function EditTypeViewModel(scope, location, mdToast, appBarStatus, entityTypeRepository, entityTypeName) {
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!location) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("location"));
                }
                if (!mdToast) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("mdToast"));
                }
                if (!appBarStatus) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("appBarStatus"));
                }
                if (!entityTypeRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entityTypeRepository"));
                }
                _super.call(this);
                this._scope = scope;
                this._location = location;
                this._mdToast = mdToast;
                this._appBarStatus = appBarStatus;
                this._entityTypeRepository = entityTypeRepository;
                this._entityTypeName = entityTypeName;
                this.Init();
                scope.$on("AppBarScope::add", this.Add.bind(this));
                scope.$on("AppBarScope::delete", this.Delete.bind(this));
                scope.$on("AppBarScope::save", this.Save.bind(this));
                scope.$on("AppBarScope::cancel", this.Cancel.bind(this));
                scope.$on("AppBarScope::refresh", this.Refresh.bind(this));
            }
            Object.defineProperty(EditTypeViewModel.prototype, "Model", {
                get: function () {
                    if (!this._model) {
                        this._model = !this.EntityType ? {
                            Attributes: [{
                                    TypeCode: DynamicData.Core.AttributeTypeCode.String
                                }]
                        } : DynamicData.Core.EntityTypeSerialization.ToPOCO(this.EntityType);
                    }
                    return this._model;
                },
                enumerable: true,
                configurable: true
            });
            EditTypeViewModel.prototype.Init = function () {
                this._model = null;
                this.IsNew = !this._entityTypeName;
                this.EntityType = this.IsNew ? null : this._entityTypeRepository.GetByName(this._entityTypeName);
                this.SelectedAttributes = {};
                this.ValidationDialogIsHidden = true;
                if (!this.IsNew && !this.EntityType) {
                    this._location.url(DynamicData.Config.Routes.manage());
                    return;
                }
                this._appBarStatus.Detail();
                this.TypeCodeOptions = [
                    DynamicData.Core.AttributeTypeCode.Boolean,
                    DynamicData.Core.AttributeTypeCode.Date,
                    DynamicData.Core.AttributeTypeCode.DateTime,
                    DynamicData.Core.AttributeTypeCode.Decimal,
                    DynamicData.Core.AttributeTypeCode.Email,
                    DynamicData.Core.AttributeTypeCode.Int,
                    DynamicData.Core.AttributeTypeCode.Phone,
                    DynamicData.Core.AttributeTypeCode.String,
                    DynamicData.Core.AttributeTypeCode.Text,
                    DynamicData.Core.AttributeTypeCode.Url,
                    DynamicData.Core.AttributeTypeCode.Currency,
                    DynamicData.Core.AttributeTypeCode.Time
                ].map(function (value) {
                    return {
                        name: DynamicData.Core.AttributeTypeCode[value],
                        value: value
                    };
                });
                if (this._scope.TypeForm && this._scope.TypeForm.$dirty) {
                    this._scope.TypeForm.$setPristine();
                }
            };
            EditTypeViewModel.prototype.Add = function () {
                DynamicData.Core.Trace.Message(ViewModels.editTypeViewModelName + ".Add");
                this.Model.Attributes.push({
                    TypeCode: DynamicData.Core.AttributeTypeCode.String
                });
            };
            EditTypeViewModel.prototype.Delete = function () {
                DynamicData.Core.Trace.Message(ViewModels.editTypeViewModelName + ".Delete");
                var attributes = this.Model.Attributes;
                for (var i = attributes.length - 1; i >= 0; i--) {
                    if (!!this.SelectedAttributes[i.toString()]) {
                        attributes.splice(i, 1);
                    }
                }
                if (attributes.length === 0) {
                    this.Add();
                }
                this.SelectedAttributes = {};
            };
            EditTypeViewModel.prototype.Save = function () {
                DynamicData.Core.Trace.Message(ViewModels.editTypeViewModelName + ".Save");
                var exit = true;
                if (this._scope.TypeForm.$valid) {
                    var type;
                    try {
                        type = DynamicData.Core.EntityTypeSerialization.FromPOCO(this.Model);
                    }
                    catch (e) {
                        DynamicData.Core.Trace.Warning(e);
                    }
                    var result;
                    if (this.IsNew && !!type) {
                        result = this._entityTypeRepository.Create(type);
                    }
                    else if (!!type) {
                        result = this._entityTypeRepository.Update(type);
                    }
                }
                else {
                    exit = false;
                    this.SetFormDirty();
                    this._mdToast.show(this._mdToast.simple()
                        .textContent("Please enter all required data.")
                        .position("top right")
                        .hideDelay(5000));
                }
                if (exit) {
                    this._location.url(DynamicData.Config.Routes.manage());
                }
            };
            EditTypeViewModel.prototype.Cancel = function () {
                DynamicData.Core.Trace.Message(ViewModels.editTypeViewModelName + ".Cancel");
                this._location.url(DynamicData.Config.Routes.manage());
            };
            EditTypeViewModel.prototype.Refresh = function () {
                DynamicData.Core.Trace.Message(ViewModels.editTypeViewModelName + ".Refresh");
                this.Init();
            };
            EditTypeViewModel.prototype.SetFormDirty = function () {
                var _this = this;
                var keys = Object
                    .keys(this._scope.TypeForm)
                    .filter(function (k) { return k.indexOf("$") !== 0; });
                keys.forEach(function (key) {
                    var field = _this._scope.TypeForm[key];
                    if (field.$valid) {
                        return;
                    }
                    if (!field.$dirty) {
                        field.$setDirty();
                    }
                    if (field.$untouched) {
                        field.$setTouched();
                    }
                });
            };
            return EditTypeViewModel;
        }(ViewModels.BaseViewModel));
        ViewModels.EditTypeViewModel = EditTypeViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var EntityViewModel = (function (_super) {
            __extends(EntityViewModel, _super);
            function EntityViewModel(scope, location, appBarStatus, entityTypeRepository, entityRepository, entityTypeName, entityId) {
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!location) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("location"));
                }
                if (!appBarStatus) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("appBarStatus"));
                }
                if (!entityTypeRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entityTypeRepository"));
                }
                if (!entityRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entityRepository"));
                }
                if (!entityTypeName) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entityTypeName"));
                }
                _super.call(this);
                this._location = location;
                this._appBarStatus = appBarStatus;
                this._entityTypeRepository = entityTypeRepository;
                this._entityRepository = entityRepository;
                this._entityTypeName = entityTypeName;
                this._entityId = entityId;
                this.Init();
                scope.$on("AppBarScope::add", this.Add.bind(this));
                scope.$on("AppBarScope::delete", this.Delete.bind(this));
                scope.$on("AppBarScope::save", this.Save.bind(this));
                scope.$on("AppBarScope::cancel", this.Cancel.bind(this));
                scope.$on("AppBarScope::refresh", this.Refresh.bind(this));
            }
            EntityViewModel.prototype.Init = function () {
                this.EntityType = this._entityTypeRepository.GetByName(this._entityTypeName);
                if (!this.EntityType) {
                    this._location.url(DynamicData.Config.Routes.home());
                    return;
                }
                this.Entity = this._entityId || this._entityId === 0 ?
                    this._entityRepository.GetById(this.EntityType, this._entityId) :
                    new DynamicData.Core.Entity(this.EntityType);
                if (!this.Entity) {
                    this._location.url(DynamicData.Config.Routes.home());
                    return;
                }
                this.Model = this.Model || {};
                this._appBarStatus.Detail();
                this._appBarStatus.IsDeleteDisabled = !this.Entity.HasValidId;
                angular.copy(this.Entity.Fields, this.Model);
            };
            EntityViewModel.prototype.Add = function () {
                DynamicData.Core.Trace.Message(ViewModels.entityViewModelName + ".Add");
                this._location.url(DynamicData.Config.Routes.entity(this.EntityType.Name));
            };
            EntityViewModel.prototype.Delete = function () {
                DynamicData.Core.Trace.Message(ViewModels.entityViewModelName + ".Delete");
                var entity = this.Entity;
                if (entity) {
                    this._entityRepository.BulkDelete(entity.Type, [entity.Id]);
                }
                this._location.url(DynamicData.Config.Routes.homeWithType(this.EntityType.Name));
            };
            EntityViewModel.prototype.Save = function () {
                DynamicData.Core.Trace.Message(ViewModels.entityViewModelName + ".Save");
                angular.copy(this.Model, this.Entity.Fields);
                this._entityRepository.CreateOrUpdate(this.Entity);
                this._location.url(DynamicData.Config.Routes.homeWithType(this.EntityType.Name));
            };
            EntityViewModel.prototype.Cancel = function () {
                DynamicData.Core.Trace.Message(ViewModels.entityViewModelName + ".Cancel");
                this._location.url(DynamicData.Config.Routes.homeWithType(this.EntityType.Name));
            };
            EntityViewModel.prototype.Refresh = function () {
                DynamicData.Core.Trace.Message(ViewModels.entityViewModelName + ".Refresh");
                this.Init();
            };
            return EntityViewModel;
        }(ViewModels.BaseViewModel));
        ViewModels.EntityViewModel = EntityViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var FieldEditorViewModel = (function (_super) {
            __extends(FieldEditorViewModel, _super);
            function FieldEditorViewModel(scope) {
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                _super.call(this);
                this._scope = scope;
                scope.$watch("value", this.UpdateUI.bind(this));
                scope.$watch("vm.Checked", this.UpdateValue.bind(this));
                scope.$watch("vm.Text", this.UpdateValue.bind(this));
                scope.$watch("vm.Date", this.UpdateDateValue.bind(this));
                scope.$watch("vm.Time", this.UpdateTimeValue.bind(this));
                scope.$watch("vm.Value", this.UpdateValue.bind(this));
            }
            Object.defineProperty(FieldEditorViewModel.prototype, "RenderAsInputText", {
                get: function () {
                    return [
                        DynamicData.Core.AttributeTypeCode.Email,
                        DynamicData.Core.AttributeTypeCode.Phone,
                        DynamicData.Core.AttributeTypeCode.String,
                        DynamicData.Core.AttributeTypeCode.Url,
                        DynamicData.Core.AttributeTypeCode.Decimal,
                        DynamicData.Core.AttributeTypeCode.Int,
                        DynamicData.Core.AttributeTypeCode.Currency,
                    ].indexOf(this._scope.attribute.TypeCode) >= 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldEditorViewModel.prototype, "RenderAsDatePicker", {
                get: function () {
                    return [
                        DynamicData.Core.AttributeTypeCode.Date,
                        DynamicData.Core.AttributeTypeCode.DateTime
                    ].indexOf(this._scope.attribute.TypeCode) >= 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldEditorViewModel.prototype, "RenderAsToggleSwitch", {
                get: function () {
                    return this._scope.attribute.TypeCode === DynamicData.Core.AttributeTypeCode.Boolean;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldEditorViewModel.prototype, "RenderAsTextArea", {
                get: function () {
                    return this._scope.attribute.TypeCode === DynamicData.Core.AttributeTypeCode.Text;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldEditorViewModel.prototype, "RenderAsTimePicker", {
                get: function () {
                    return [
                        DynamicData.Core.AttributeTypeCode.DateTime,
                        DynamicData.Core.AttributeTypeCode.Time
                    ].indexOf(this._scope.attribute.TypeCode) >= 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldEditorViewModel.prototype, "DisplayName", {
                get: function () {
                    return this._scope.attribute.DisplayName;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FieldEditorViewModel.prototype, "InputType", {
                get: function () {
                    if (this._scope.attribute.TypeCode === DynamicData.Core.AttributeTypeCode.Email) {
                        return "email";
                    }
                    if (this._scope.attribute.TypeCode === DynamicData.Core.AttributeTypeCode.Phone) {
                        return "tel";
                    }
                    if (this._scope.attribute.TypeCode === DynamicData.Core.AttributeTypeCode.String) {
                        return "text";
                    }
                    if (this._scope.attribute.TypeCode === DynamicData.Core.AttributeTypeCode.Url) {
                        return "url";
                    }
                    if (this._scope.attribute.TypeCode === DynamicData.Core.AttributeTypeCode.Decimal) {
                        return "number";
                    }
                    if (this._scope.attribute.TypeCode === DynamicData.Core.AttributeTypeCode.Int) {
                        return "number";
                    }
                    if (this._scope.attribute.TypeCode === DynamicData.Core.AttributeTypeCode.Currency) {
                        return "number";
                    }
                },
                enumerable: true,
                configurable: true
            });
            FieldEditorViewModel.prototype.UpdateUI = function (newValue, oldValue) {
                if (this.RenderAsInputText && newValue !== this.Text) {
                    this.Text = newValue;
                }
                if (this.RenderAsTextArea && newValue !== this.Text) {
                    this.Text = newValue;
                }
                if (this.RenderAsToggleSwitch && newValue !== this.Checked) {
                    this.Checked = !!newValue;
                }
                if (this.RenderAsDatePicker && !moment(newValue).isSame(this.Date)) {
                    this.Date = newValue;
                }
                if (this.RenderAsTimePicker && !moment(newValue).isSame(this.Time)) {
                    this.Time = newValue;
                }
            };
            FieldEditorViewModel.prototype.UpdateValue = function (newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }
                if (this.RenderAsInputText) {
                    this._scope.value = newValue;
                }
                else if (this.RenderAsTextArea) {
                    this._scope.value = newValue;
                }
                else if (this.RenderAsToggleSwitch) {
                    this._scope.value = !!newValue;
                }
            };
            FieldEditorViewModel.prototype.UpdateDateValue = function (newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }
                if (this.RenderAsDatePicker && this.RenderAsTimePicker) {
                    this._scope.value = this.CombineDateAndTime(newValue, this._scope.value);
                }
                else if (this.RenderAsDatePicker) {
                    this._scope.value = newValue;
                }
            };
            FieldEditorViewModel.prototype.UpdateTimeValue = function (newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }
                if (this.RenderAsDatePicker && this.RenderAsTimePicker) {
                    this._scope.value = this.CombineDateAndTime(this._scope.value, newValue);
                }
                else if (this.RenderAsTimePicker) {
                    this._scope.value = newValue;
                }
            };
            FieldEditorViewModel.prototype.CombineDateAndTime = function (date, time) {
                if (!!date && !!time) {
                    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());
                }
                return date || time;
            };
            return FieldEditorViewModel;
        }(ViewModels.BaseViewModel));
        ViewModels.FieldEditorViewModel = FieldEditorViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var ManageViewModel = (function (_super) {
            __extends(ManageViewModel, _super);
            function ManageViewModel(scope, location, mdDialog, repository) {
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!location) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("location"));
                }
                if (!mdDialog) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("mdDialog"));
                }
                if (!repository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("repository"));
                }
                _super.call(this);
                this._scope = scope;
                this._location = location;
                this._mdDialog = mdDialog;
                this._repository = repository;
                this.LoadTypes();
                scope.$on("AppBarScope::add", this.Add.bind(this));
                scope.$on("AppBarScope::delete", this.PromptDelete.bind(this));
                scope.$on("AppBarScope::refresh", this.Refresh.bind(this));
            }
            ManageViewModel.prototype.Add = function () {
                DynamicData.Core.Trace.Message(ViewModels.manageViewModelName + ".Add");
                this._location.url(DynamicData.Config.Routes.typeCreate());
            };
            ManageViewModel.prototype.PromptDelete = function () {
                var _this = this;
                DynamicData.Core.Trace.Message(ViewModels.manageViewModelName + ".PromptDelete");
                var keys = Object
                    .keys(this.Selected)
                    .filter(function (k) { return !!_this.Selected[k]; });
                if (keys.length === 0) {
                    return;
                }
                var confirm = this._mdDialog.confirm()
                    .title("Confirmation")
                    .textContent("Would you like to delete the selected types?")
                    .ariaLabel("Delete Confirmation")
                    .ok("Yes")
                    .cancel("No");
                this._mdDialog
                    .show(confirm)
                    .then(this.Delete.bind(this))
                    .catch(function () { });
            };
            ManageViewModel.prototype.Delete = function (e) {
                var _this = this;
                DynamicData.Core.Trace.Message(ViewModels.manageViewModelName + ".Delete");
                var keys = Object
                    .keys(this.Selected)
                    .filter(function (k) { return !!_this.Selected[k]; });
                this._repository.BulkDelete(keys);
                this.LoadTypes();
            };
            ManageViewModel.prototype.Refresh = function () {
                DynamicData.Core.Trace.Message(ViewModels.manageViewModelName + ".Refresh");
                this.LoadTypes();
            };
            ManageViewModel.prototype.Open = function (index) {
                DynamicData.Core.Trace.Message(ViewModels.manageViewModelName + ".Open");
                var path = DynamicData.Config.Routes.type(this.Types[index].Name);
                this._location.url(path);
            };
            ManageViewModel.prototype.LoadTypes = function () {
                this.Types = this._repository.GetAll();
                this.Selected = {};
            };
            return ManageViewModel;
        }(ViewModels.BaseViewModel));
        ViewModels.ManageViewModel = ManageViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var SettingsViewModel = (function (_super) {
            __extends(SettingsViewModel, _super);
            function SettingsViewModel(scope, repository, sampleData) {
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!repository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("repository"));
                }
                if (!sampleData) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("sampleData"));
                }
                _super.call(this);
                if (!repository.GetAll().length && this.Settings.IsSampleDataInstalled) {
                    this.Settings.IsSampleDataInstalled = false;
                }
                this._scope = scope;
                this._sampleData = sampleData;
                scope.$on("AppBarScope::cancel", this.Cancel.bind(this));
                scope.$on("AppBarScope::save", this.Save.bind(this));
                scope.$watch("vm.Settings.IsSampleDataInstalled", this.IsSampleDataInstalledChanged.bind(this));
            }
            SettingsViewModel.prototype.Cancel = function () {
                DynamicData.Core.Trace.Message(ViewModels.settingsViewModelName + ".Cancel");
            };
            SettingsViewModel.prototype.IsSampleDataInstalledChanged = function (newValue, oldValue) {
                if (newValue === true && oldValue === false) {
                    this._installSampleData = true;
                }
            };
            SettingsViewModel.prototype.Save = function () {
                DynamicData.Core.Trace.Message(ViewModels.settingsViewModelName + ".Save");
                DynamicData.Data.storage.Settings = this.Settings;
                if (this._installSampleData) {
                    this._sampleData.Install();
                }
            };
            return SettingsViewModel;
        }(ViewModels.BaseViewModel));
        ViewModels.SettingsViewModel = SettingsViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var TemplatesViewModel = (function (_super) {
            __extends(TemplatesViewModel, _super);
            function TemplatesViewModel(scope, location, mdDialog, entityTypeRepository, templateRepository) {
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!location) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("location"));
                }
                if (!mdDialog) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("mdDialog"));
                }
                if (!entityTypeRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entityTypeRepository"));
                }
                if (!templateRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("templateRepository"));
                }
                _super.call(this);
                this._location = location;
                this._mdDialog = mdDialog;
                this._entityTypeRepository = entityTypeRepository;
                this._templateRepository = templateRepository;
                scope.$on("AppBarScope::cancel", this.Cancel.bind(this));
                scope.$on("AppBarScope::delete", this.PromptDelete.bind(this));
                scope.$on("AppBarScope::refresh", this.Refresh.bind(this));
                scope.$on("AppBarScope::save", this.Save.bind(this));
                this.Init();
            }
            TemplatesViewModel.prototype.Init = function () {
                this.Types = this._entityTypeRepository
                    .GetAll()
                    .sort(function (t1, t2) { return t1.Name > t2.Name ? 1 : t1.Name < t2.Name ? -1 : 0; });
            };
            TemplatesViewModel.prototype.Add = function () {
                DynamicData.Core.Trace.Message(ViewModels.templatesViewModelName + ".Add");
                this._location.url(DynamicData.Config.Routes.typeCreate());
            };
            TemplatesViewModel.prototype.SelectType = function (type) {
                this.SelectedType = !type ? null : type;
                this.LoadSelectedType();
            };
            TemplatesViewModel.prototype.Cancel = function () {
                DynamicData.Core.Trace.Message(ViewModels.templatesViewModelName + ".Cancel");
                this._location.url(DynamicData.Config.Routes.home());
            };
            TemplatesViewModel.prototype.PromptDelete = function () {
                DynamicData.Core.Trace.Message(ViewModels.templatesViewModelName + ".PromptDelete");
                if (!this.SelectedType) {
                    return;
                }
                var confirm = this._mdDialog.confirm()
                    .title("Confirmation")
                    .textContent("Are you sure you want to reset templates for " + this.SelectedType.Name + ". This action cannot be undone.")
                    .ariaLabel("Delete Confirmation")
                    .ok("Yes")
                    .cancel("No");
                this._mdDialog
                    .show(confirm)
                    .then(this.Delete.bind(this))
                    .catch(function () { });
            };
            TemplatesViewModel.prototype.Delete = function (e) {
                DynamicData.Core.Trace.Message(ViewModels.templatesViewModelName + ".Delete");
                this._templateRepository.Delete(this.SelectedType.Name);
                this.LoadSelectedType();
            };
            TemplatesViewModel.prototype.Refresh = function () {
                DynamicData.Core.Trace.Message(ViewModels.templatesViewModelName + ".Refresh");
                this.SelectedType = null;
                this.Init();
            };
            TemplatesViewModel.prototype.Save = function () {
                DynamicData.Core.Trace.Message(ViewModels.templatesViewModelName + ".Save");
                this._templateRepository.Save(this.SelectedType.Name, {
                    edit: this.EditTemplate,
                    quickView: this.QuickViewTemplate
                });
                this.Init();
            };
            TemplatesViewModel.prototype.LoadSelectedType = function () {
                var _this = this;
                if (!this.SelectedType) {
                    this.QuickViewTemplate = "";
                    this.EditTemplate = "";
                }
                this._templateRepository
                    .GetByName(this.SelectedType.Name)
                    .then((function (template) {
                    _this.EditTemplate = template.edit;
                    _this.QuickViewTemplate = template.quickView;
                }).bind(this))
                    .catch((function () {
                    _this.EditTemplate = "Unable to retrieve template";
                    _this.QuickViewTemplate = "Unable to retrieve template";
                }).bind(this));
            };
            return TemplatesViewModel;
        }(ViewModels.BaseViewModel));
        ViewModels.TemplatesViewModel = TemplatesViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Directives;
        (function (Directives) {
            "use strict";
            var EntityQuickViewForm = (function () {
                function EntityQuickViewForm(scope) {
                    DynamicData.Core.Trace.Message(Directives.entityQuickViewFormName + ".constructor");
                    scope.format = this.Format.bind(this);
                }
                EntityQuickViewForm.prototype.Format = function (value, typeCode) {
                    if (typeCode === DynamicData.Core.AttributeTypeCode.Boolean || typeof value === "boolean") {
                        return !value ? DynamicData.Resources.Strings.No : DynamicData.Resources.Strings.Yes;
                    }
                    if (!angular.isDefined(value)) {
                        return "";
                    }
                    if (value === null) {
                        return "";
                    }
                    if (typeCode === DynamicData.Core.AttributeTypeCode.Date) {
                        return moment(value).format("MMM DD YYYY");
                    }
                    if (typeCode === DynamicData.Core.AttributeTypeCode.DateTime) {
                        return moment(value).format("MMM DD YYYY hh:mm A");
                    }
                    if (typeCode === DynamicData.Core.AttributeTypeCode.Time) {
                        return moment(value).format("hh:mm A");
                    }
                    if (moment.isDate(value)) {
                        return moment(value).format("MMM DD YYYY");
                    }
                    return value.toString();
                };
                EntityQuickViewForm.$inject = ["$scope"];
                return EntityQuickViewForm;
            }());
            angular.module(DynamicData.Config.appName)
                .directive("entityQuickViewForm", [
                "$compile",
                DynamicData.Data.templateRepositoryName,
                function ($compile, templateRepository) {
                    return {
                        compile: function EntityQuickViewFormResolver(tElement, tAttrs) {
                            return function (scope, element) {
                                templateRepository
                                    .GetByName(scope.entity.Type.Name)
                                    .then(function GetByNameCompleted(template) {
                                    tElement.html(template.quickView);
                                    var compiled = $compile(tElement.html())(scope);
                                    element.html(compiled);
                                });
                            };
                        },
                        restrict: "E",
                        controller: EntityQuickViewForm,
                        scope: {
                            entity: "=",
                            open: "&"
                        }
                    };
                }]);
        })(Directives = UI.Directives || (UI.Directives = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Directives;
        (function (Directives) {
            "use strict";
            var FieldEditor = (function () {
                function FieldEditor(scope) {
                    DynamicData.Core.Trace.Message(Directives.fieldEditorName + ".constructor");
                    scope.vm = new DynamicData.ViewModels.FieldEditorViewModel(scope);
                }
                FieldEditor.$inject = ["$scope"];
                return FieldEditor;
            }());
            angular.module(DynamicData.Config.appName)
                .directive("editor", function () {
                return {
                    restrict: "E",
                    controller: FieldEditor,
                    templateUrl: "html/FieldEditor.html",
                    scope: {
                        attribute: "=",
                        value: "="
                    }
                };
            });
        })(Directives = UI.Directives || (UI.Directives = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Directives;
        (function (Directives) {
            "use strict";
            var TypeQuickViewForm = (function () {
                function TypeQuickViewForm(scope) {
                    DynamicData.Core.Trace.Message(Directives.typeQuickViewFormName + ".constructor");
                }
                TypeQuickViewForm.$inject = ["$scope"];
                return TypeQuickViewForm;
            }());
            angular.module("DynamicData.App")
                .directive("typeQuickViewForm", function () {
                return {
                    restrict: "E",
                    controller: TypeQuickViewForm,
                    templateUrl: "html/TypeQuickViewForm.html",
                    scope: {
                        type: "=",
                        open: "&"
                    }
                };
            });
        })(Directives = UI.Directives || (UI.Directives = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var AppBarController = (function () {
                function AppBarController(scope, rootScope, location, status) {
                    scope.fire = this.Fire.bind(this);
                    scope.goTo = this.GoTo.bind(this);
                    scope.status = status;
                    this._rootScope = rootScope;
                    this._location = location;
                }
                AppBarController.prototype.Fire = function (cmdName) {
                    DynamicData.Core.Trace.Message(Controllers.appBarControllerName + ".Fire(" + cmdName + ")");
                    this._rootScope.$broadcast("AppBarScope::" + cmdName);
                };
                AppBarController.prototype.GoTo = function (url) {
                    DynamicData.Core.Trace.Message(Controllers.appBarControllerName + ".GoTo(" + url + ")");
                    var event = this._rootScope.$broadcast("AppBarScope::goTo");
                    if (event.defaultPrevented) {
                        return;
                    }
                    this._location.url(url);
                };
                AppBarController.$inject = [
                    "$scope",
                    "$rootScope",
                    "$location",
                    DynamicData.Core.appBarStatusName
                ];
                return AppBarController;
            }());
            angular.module(DynamicData.Config.appName)
                .controller(Controllers.appBarControllerName, AppBarController);
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var ConfirmDialogController = (function () {
                function ConfirmDialogController(scope, mdPanelRef) {
                    scope.title = "Abc";
                    scope.message = "Xyz";
                    this._mdPanelRef = mdPanelRef;
                }
                ConfirmDialogController.$inject = [
                    "$scope"
                ];
                return ConfirmDialogController;
            }());
            Controllers.ConfirmDialogController = ConfirmDialogController;
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var DashboardController = (function () {
                function DashboardController(scope, routeParams, location, appBarStatus, repository, sampleData) {
                    var entityType = routeParams.entityType;
                    DynamicData.Core.Trace.Message(Controllers.dashboardControllerName + ".constructor " + entityType);
                    scope.vm = new DynamicData.ViewModels.DashboardViewModel(scope, location, repository, sampleData, entityType);
                    appBarStatus.Master();
                }
                DashboardController.$inject = [
                    "$scope",
                    "$routeParams",
                    "$location",
                    DynamicData.Core.appBarStatusName,
                    DynamicData.Data.entityTypeRepositoryName,
                    DynamicData.Data.sampleDataName
                ];
                return DashboardController;
            }());
            angular.module(DynamicData.Config.appName)
                .controller(Controllers.dashboardControllerName, DashboardController);
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var DashboardPivotItemController = (function () {
                function DashboardPivotItemController(scope, location, mdDialog, entityRepository, entityTypeSettingsRepository) {
                    DynamicData.Core.Trace.Message(Controllers.dashboardPivotItemControllerName + ".constructor");
                    scope.vm = new DynamicData.ViewModels.DashboardPivotItemViewModel(scope, location, mdDialog, entityRepository, entityTypeSettingsRepository, scope.type);
                }
                DashboardPivotItemController.$inject = [
                    "$scope",
                    "$location",
                    "$mdDialog",
                    DynamicData.Data.entityRepositoryName,
                    DynamicData.Data.entityTypeSettingsRepositoryName
                ];
                return DashboardPivotItemController;
            }());
            angular.module(DynamicData.Config.appName)
                .controller(Controllers.dashboardPivotItemControllerName, DashboardPivotItemController);
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var EditTypeController = (function () {
                function EditTypeController(scope, routeParams, location, mdToast, appBarStatus, repository) {
                    DynamicData.Core.Trace.Message(Controllers.editTypeControllerName + ".constructor");
                    var type = routeParams.entityType;
                    scope.vm = new DynamicData.ViewModels.EditTypeViewModel(scope, location, mdToast, appBarStatus, repository, type);
                }
                EditTypeController.$inject = [
                    "$scope",
                    "$routeParams",
                    "$location",
                    "$mdToast",
                    DynamicData.Core.appBarStatusName,
                    DynamicData.Data.entityTypeRepositoryName
                ];
                return EditTypeController;
            }());
            angular.module(DynamicData.Config.appName)
                .controller(Controllers.editTypeControllerName, EditTypeController);
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var EntityController = (function () {
                function EntityController(scope, routeParams, location, appBarStatus, entityTypeRepository, entityRepository) {
                    DynamicData.Core.Trace.Message(Controllers.entityControllerName + ".constructor");
                    var type = routeParams.entityType;
                    var id = routeParams.entityId ? parseInt(routeParams.entityId) : null;
                    scope.vm = new DynamicData.ViewModels.EntityViewModel(scope, location, appBarStatus, entityTypeRepository, entityRepository, type, id);
                }
                EntityController.$inject = [
                    "$scope",
                    "$routeParams",
                    "$location",
                    DynamicData.Core.appBarStatusName,
                    DynamicData.Data.entityTypeRepositoryName,
                    DynamicData.Data.entityRepositoryName
                ];
                return EntityController;
            }());
            angular.module(DynamicData.Config.appName)
                .controller(Controllers.entityControllerName, EntityController);
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var ManageController = (function () {
                function ManageController(scope, location, mdDialog, appBarStatus, repository) {
                    DynamicData.Core.Trace.Message(Controllers.manageControllerName + ".constructor");
                    scope.vm = new DynamicData.ViewModels.ManageViewModel(scope, location, mdDialog, repository);
                    appBarStatus.Master();
                }
                ManageController.$inject = [
                    "$scope",
                    "$location",
                    "$mdDialog",
                    DynamicData.Core.appBarStatusName,
                    DynamicData.Data.entityTypeRepositoryName
                ];
                return ManageController;
            }());
            angular.module(DynamicData.Config.appName)
                .controller(Controllers.manageControllerName, ManageController);
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var ProfileController = (function () {
                function ProfileController(scope, appBarStatus) {
                    DynamicData.Core.Trace.Message(Controllers.profileControllerName + ".constructor");
                }
                ProfileController.$inject = [
                    "$scope",
                    DynamicData.Core.appBarStatusName
                ];
                return ProfileController;
            }());
            angular.module(DynamicData.Config.appName)
                .controller(Controllers.profileControllerName, ProfileController);
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var SettingsController = (function () {
                function SettingsController(scope, appBarStatus, repository, sampleData) {
                    DynamicData.Core.Trace.Message(Controllers.settingsControllerName + ".constructor");
                    scope.vm = new DynamicData.ViewModels.SettingsViewModel(scope, repository, sampleData);
                    this.AppBar(appBarStatus);
                }
                SettingsController.prototype.AppBar = function (appBar) {
                    appBar.IsNewDisabled = true;
                    appBar.IsRefreshDisabled = false;
                    appBar.IsDeleteDisabled = true;
                    appBar.IsSaveDisabled = false;
                    appBar.IsCancelDisabled = false;
                };
                SettingsController.$inject = [
                    "$scope",
                    DynamicData.Core.appBarStatusName,
                    DynamicData.Data.entityTypeRepositoryName,
                    DynamicData.Data.sampleDataName
                ];
                return SettingsController;
            }());
            angular.module(DynamicData.Config.appName)
                .controller(Controllers.settingsControllerName, SettingsController);
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var TemplatesController = (function () {
                function TemplatesController(scope, location, mdDialog, appBarStatus, entityTypeRepository, templateRepository) {
                    scope.vm = new DynamicData.ViewModels.TemplatesViewModel(scope, location, mdDialog, entityTypeRepository, templateRepository);
                    appBarStatus.Detail();
                    appBarStatus.IsNewDisabled = true;
                }
                TemplatesController.$inject = [
                    "$scope",
                    "$location",
                    "$mdDialog",
                    DynamicData.Core.appBarStatusName,
                    DynamicData.Data.entityTypeRepositoryName,
                    DynamicData.Data.templateRepositoryName
                ];
                return TemplatesController;
            }());
            angular.module(DynamicData.Config.appName)
                .controller(Controllers.templatesControllerName, TemplatesController);
        })(Controllers = UI.Controllers || (UI.Controllers = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));