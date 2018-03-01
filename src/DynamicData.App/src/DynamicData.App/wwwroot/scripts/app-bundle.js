var undefinedstr = void 0;
var DynamicData;
(function (DynamicData) {
    "use strict";
    DynamicData.namespace = "DynamicData";
})(DynamicData || (DynamicData = {}));
(function (DynamicData) {
    var Config;
    (function (Config) {
        "use strict";
        Config.namespace = DynamicData.namespace + ".Config";
    })(Config = DynamicData.Config || (DynamicData.Config = {}));
})(DynamicData || (DynamicData = {}));
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        Core.namespace = DynamicData.namespace + ".Core";
        Core.appBarStatusName = Core.namespace + ".AppBarStatus";
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));
(function (DynamicData) {
    var Data;
    (function (Data) {
        "use strict";
        Data.namespace = DynamicData.namespace + ".Data";
        Data.entityRepositoryName = Data.namespace + ".EntityRepository";
        Data.entityTypeRepositoryName = Data.namespace + ".EntityTypeRepository";
        Data.entityTypeSettingsRepositoryName = Data.namespace + ".EntityTypeSettingsRepository";
        Data.enumRepositoryName = Data.namespace + ".EnumRepository";
        Data.templateRepositoryName = Data.namespace + ".TemplateRepository";
        Data.sampleDataName = Data.namespace + ".SampleData";
    })(Data = DynamicData.Data || (DynamicData.Data = {}));
})(DynamicData || (DynamicData = {}));
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
(function (DynamicData) {
    var UI;
    (function (UI) {
        "use strict";
        UI.namespace = DynamicData.namespace + ".UI";
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));
(function (DynamicData) {
    var Resources;
    (function (Resources) {
        "use strict";
        Resources.namespace = DynamicData.namespace + ".Resources";
    })(Resources = DynamicData.Resources || (DynamicData.Resources = {}));
})(DynamicData || (DynamicData = {}));
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
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Directives;
        (function (Directives) {
            "use strict";
            Directives.namespace = DynamicData.UI.namespace + ".Directives";
            Directives.entityQuickViewFormName = Directives.namespace + ".EntityQuickViewForm";
            Directives.fieldEditorName = Directives.namespace + ".FieldEditor";
            Directives.timePickerName = Directives.namespace + ".TimePicker";
            Directives.typeQuickViewFormName = Directives.namespace + ".TypeQuickViewForm";
        })(Directives = UI.Directives || (UI.Directives = {}));
    })(UI = DynamicData.UI || (DynamicData.UI = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Resources;
    (function (Resources) {
        "use strict";
        var Strings = /** @class */ (function () {
            function Strings() {
            }
            Strings.RequiredFieldMessageFormat = function (paramName) { return "'" + paramName + "' cannot be null or empty."; };
            Strings.RequiredArgumentMessageFormat = function (paramName) { return "Argument cannot be null or empty '" + paramName + "'."; };
            Strings.DuplicatedEntityTypeMessageFormat = function (type) { return "Duplicated entity type '" + type + "'."; };
            Strings.MissingEntityTypeMessageFormat = function (type) { return "Entity type '" + type + "' is missing."; };
            Strings.NotSupportedMessage = "Not supported.";
            Strings.SystemAttributeSerializationMessageFormat = function (name) { return "Unable to serialize a System Attribute " + name + "."; };
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
        var RouteParameters = /** @class */ (function () {
            function RouteParameters() {
            }
            RouteParameters.entityType = ":entityType";
            RouteParameters.entityId = ":entityId";
            return RouteParameters;
        }());
        Config.RouteParameters = RouteParameters;
        var Routes = /** @class */ (function () {
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
        function init($routeProvider, $compileProvider) {
            DynamicData.Core.Trace.Message(Config.namespace + ".init");
            $compileProvider.preAssignBindingsEnabled(true);
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
        }
        module.config(init);
    })(Config = DynamicData.Config || (DynamicData.Config = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var AppBarStatus = /** @class */ (function () {
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
                this.IsDeleteDisabled = true;
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
        var AttributeType = /** @class */ (function () {
            function AttributeType(name, displayName, typeCode, enumName) {
                this.Name = name;
                this.DisplayName = displayName;
                this.TypeCode = typeCode;
                this.EnumName = enumName;
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
            Object.defineProperty(AttributeType.prototype, "EnumName", {
                get: function () {
                    return this._enumName;
                },
                set: function (value) {
                    this._enumName = value;
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
            Object.defineProperty(AttributeType.prototype, "IsSystemAttribute", {
                get: function () {
                    var _this = this;
                    return systemAttributes()
                        .filter(function (o) { return o.Name === _this.Name; })
                        .length > 0;
                },
                enumerable: true,
                configurable: true
            });
            return AttributeType;
        }());
        Core.AttributeType = AttributeType;
        function systemAttributes() {
            return [
                new AttributeType("CreatedOn", "Created On", Core.AttributeTypeCode.DateTime),
                new AttributeType("ModifiedOn", "Modified On", Core.AttributeTypeCode.DateTime)
            ];
        }
        Core.systemAttributes = systemAttributes;
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var AttributeTypeCode;
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
            AttributeTypeCode[AttributeTypeCode["Enum"] = 13] = "Enum";
        })(AttributeTypeCode = Core.AttributeTypeCode || (Core.AttributeTypeCode = {}));
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var AttributeTypeSerialization = /** @class */ (function () {
            function AttributeTypeSerialization() {
            }
            AttributeTypeSerialization.FromPOCO = function (poco) {
                return new Core.AttributeType(poco.Name, poco.DisplayName, poco.TypeCode, poco.EnumName || null);
            };
            AttributeTypeSerialization.ToPOCO = function (attribute) {
                if (attribute.IsSystemAttribute) {
                    throw new Error(DynamicData.Resources.Strings.SystemAttributeSerializationMessageFormat(attribute.Name));
                }
                return {
                    Name: attribute.Name,
                    DisplayName: attribute.DisplayName,
                    TypeCode: attribute.TypeCode,
                    EnumName: attribute.EnumName
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
        var Entity = /** @class */ (function () {
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
        var EntitySerialization = /** @class */ (function () {
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
                    case Core.AttributeTypeCode.Enum:
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
        var EntityType = /** @class */ (function () {
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
                        this._attributes = Core.systemAttributes();
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
        var EntityTypeSerialization = /** @class */ (function () {
            function EntityTypeSerialization() {
            }
            EntityTypeSerialization.ToPOCO = function (type) {
                return {
                    Name: type.Name,
                    DisplayName: type.DisplayName,
                    DisplayPluralName: type.DisplayPluralName,
                    Icon: type.Icon,
                    Attributes: type.Attributes
                        .filter(function (a) { return !a.IsSystemAttribute; })
                        .map(function (a) { return Core.AttributeTypeSerialization.ToPOCO(a); })
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
    })(Core = DynamicData.Core || (DynamicData.Core = {}));
})(DynamicData || (DynamicData = {}));

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

var DynamicData;
(function (DynamicData) {
    var Core;
    (function (Core) {
        "use strict";
        var Trace = /** @class */ (function () {
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
        var Validation = /** @class */ (function () {
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
        var DataActionError;
        (function (DataActionError) {
            DataActionError[DataActionError["Unknown"] = -1] = "Unknown";
            DataActionError[DataActionError["None"] = 0] = "None";
            DataActionError[DataActionError["NotFound"] = 1] = "NotFound";
            DataActionError[DataActionError["Duplicate"] = 2] = "Duplicate";
        })(DataActionError = Data.DataActionError || (Data.DataActionError = {}));
        var DataActionResult = /** @class */ (function () {
            function DataActionResult(error) {
                this.Success = !error;
                this.Error = error || DataActionError.None;
            }
            return DataActionResult;
        }());
        var DataActionResults = /** @class */ (function () {
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
        var EntityRepository = /** @class */ (function () {
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
                var now = moment().toDate();
                entity.Fields.CreatedOn = now;
                entity.Fields.ModifiedOn = now;
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
                var now = moment().toDate();
                entity.Fields.ModifiedOn = now;
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
            function (entityTypeRepository) { return new EntityRepository(entityTypeRepository); }
        ]);
    })(Data = DynamicData.Data || (DynamicData.Data = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Data;
    (function (Data) {
        "use strict";
        var EntityTypeRepository = /** @class */ (function () {
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
                var _loop_1 = function (i) {
                    var type = types[i];
                    if (storedTypes.filter(function (t) { return t.Name === type.Name; }).length > 0) {
                        DynamicData.Core.Trace.Warning(DynamicData.Resources.Strings.DuplicatedEntityTypeMessageFormat(type.Name));
                        results.push(Data.DataActionResults.duplicate);
                    }
                    else {
                        storedTypes.push(type);
                        results.push(Data.DataActionResults.success);
                    }
                };
                for (var i = 0; i < types.length; i++) {
                    _loop_1(i);
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
                else {
                    types.push(type);
                    Data.storage.Types = types;
                    return Data.DataActionResults.success;
                }
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
        var EntityTypeSettingsRepository = /** @class */ (function () {
            function EntityTypeSettingsRepository(q) {
                this._q = q;
            }
            EntityTypeSettingsRepository.prototype.GetByName = function (typeName) {
                var settings = Data.storage.GetTypeSettings(typeName);
                var deferred = this._q.defer();
                deferred.resolve(settings || {
                    SortBy: "CreatedOn",
                    SortByDescending: true
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
            function ($q) { return new EntityTypeSettingsRepository($q); }
        ]);
    })(Data = DynamicData.Data || (DynamicData.Data = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Data;
    (function (Data) {
        "use strict";
        var EnumRepository = /** @class */ (function () {
            function EnumRepository() {
            }
            EnumRepository.prototype.GetAll = function () {
                return Data.storage.Enums;
            };
            EnumRepository.prototype.GetByName = function (name) {
                var enums = this.GetAll();
                var filtered = enums.filter(function (t) { return t.Name === name; });
                return filtered.length ? filtered[0] : null;
            };
            EnumRepository.prototype.Save = function (name, displayName, values) {
                var enums = this.GetAll();
                var filtered = enums.filter(function (t) { return t.Name === name; });
                if (filtered.length > 0) {
                    filtered[0].DisplayName = displayName;
                    filtered[0].Name = name;
                    filtered[0].Values = values;
                }
                else {
                    enums.push({
                        DisplayName: displayName,
                        Name: name,
                        Values: values,
                    });
                }
                Data.storage.Enums = enums;
            };
            return EnumRepository;
        }());
        angular.module(DynamicData.Config.appName)
            .factory(Data.enumRepositoryName, function () { return new EnumRepository(); });
    })(Data = DynamicData.Data || (DynamicData.Data = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Data;
    (function (Data) {
        "use strict";
        var SampleData = /** @class */ (function () {
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
                    this.CreateTasks()
                ];
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
            function (entityTypeRepository, templateRepository) { return new SampleData(entityTypeRepository, templateRepository); }
        ]);
    })(Data = DynamicData.Data || (DynamicData.Data = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var Data;
    (function (Data) {
        "use strict";
        var Storage = /** @class */ (function () {
            function Storage() {
                this._settingsKey = "settings";
                this._typesKey = "types";
                this._templateKey = "template_";
                this._entitiesKey = "data_";
                this._enumsKey = "enums";
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
            Object.defineProperty(Storage.prototype, "Enums", {
                // enumerations
                get: function () {
                    var array = this.getObject(this._enumsKey) || [];
                    return array;
                },
                set: function (value) {
                    this.setObject(this._enumsKey, value);
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

var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var BaseViewModel = /** @class */ (function () {
            function BaseViewModel(settings) {
                this.Settings = settings || DynamicData.Data.storage.Settings;
            }
            return BaseViewModel;
        }());
        ViewModels.BaseViewModel = BaseViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var DashboardPivotItemViewModel = /** @class */ (function (_super) {
            __extends(DashboardPivotItemViewModel, _super);
            function DashboardPivotItemViewModel(scope, location, mdDialog, entityRepository, entityTypeSettingsRepository, type) {
                var _this = this;
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
                _this = _super.call(this) || this;
                scope.$on("AppBarScope::delete", _this.PromptDelete.bind(_this));
                _this._scope = scope;
                _this._location = location;
                _this._mdDialog = mdDialog;
                _this._entityRepository = entityRepository;
                _this._entityTypeSettingsRepository = entityTypeSettingsRepository;
                _this.Type = type;
                _this.Init();
                scope.$watch("vm.TypeSettings.SortBy", _this.Sort.bind(_this));
                scope.$watch("vm.TypeSettings.SortByDescending", _this.Sort.bind(_this));
                return _this;
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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var DashboardViewModel = /** @class */ (function (_super) {
            __extends(DashboardViewModel, _super);
            function DashboardViewModel(scope, location, repository, sampleData, entityTypeName) {
                var _this = this;
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
                _this = _super.call(this) || this;
                _this._scope = scope;
                _this._location = location;
                _this._repository = repository;
                _this._sampleData = sampleData;
                scope.$on("AppBarScope::add", _this.Add.bind(_this));
                scope.$watch("vm.SelectedIndex", _this.SelectedIndexChanged.bind(_this));
                _this.Init(entityTypeName);
                return _this;
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

var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var EditEnumViewModel = /** @class */ (function () {
            function EditEnumViewModel(scope, mdDialog, enumRepository, name) {
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!mdDialog) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("mdDialog"));
                }
                if (!enumRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("enumRepository"));
                }
                this._mdDialog = mdDialog;
                this._enumRepository = enumRepository;
                this.Enums = enumRepository.GetAll();
                this.Item = this.Enums.filter(function (o) { return o.Name === name; })[0] || null;
                scope.$watch("vm.Item", this.LoadEnum.bind(this));
            }
            EditEnumViewModel.prototype.Ok = function () {
                if (!this.Text) {
                    return;
                }
                this._enumRepository.Save(this.Text, this.DisplayName, this.Options);
                this._mdDialog.hide(this.Text);
            };
            EditEnumViewModel.prototype.Cancel = function () {
                this._mdDialog.cancel();
            };
            EditEnumViewModel.prototype.LoadEnum = function () {
                if (!this.Item) {
                    this.DisplayName = "";
                    this.Options = [];
                    this.Text = "";
                }
                else {
                    this.DisplayName = this.Item.DisplayName;
                    this.Options = this.Item.Values;
                }
            };
            return EditEnumViewModel;
        }());
        ViewModels.EditEnumViewModel = EditEnumViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var EditTypeViewModel = /** @class */ (function (_super) {
            __extends(EditTypeViewModel, _super);
            function EditTypeViewModel(scope, location, mdToast, mdDialog, appBarStatus, entityTypeRepository, entityTypeName) {
                var _this = this;
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!location) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("location"));
                }
                if (!mdToast) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("mdToast"));
                }
                if (!mdDialog) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("mdDialog"));
                }
                if (!appBarStatus) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("appBarStatus"));
                }
                if (!entityTypeRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entityTypeRepository"));
                }
                _this = _super.call(this) || this;
                _this._scope = scope;
                _this._location = location;
                _this._mdToast = mdToast;
                _this._mdDialog = mdDialog;
                _this._appBarStatus = appBarStatus;
                _this._entityTypeRepository = entityTypeRepository;
                _this._entityTypeName = entityTypeName;
                _this.Init();
                scope.$on("AppBarScope::add", _this.Add.bind(_this));
                scope.$on("AppBarScope::delete", _this.Delete.bind(_this));
                scope.$on("AppBarScope::save", _this.Save.bind(_this));
                scope.$on("AppBarScope::cancel", _this.Cancel.bind(_this));
                scope.$on("AppBarScope::refresh", _this.Refresh.bind(_this));
                return _this;
            }
            Object.defineProperty(EditTypeViewModel.prototype, "Model", {
                get: function () {
                    if (!this._model) {
                        if (!this.EntityType) {
                            this._model = {
                                Attributes: [
                                    {
                                        TypeCode: DynamicData.Core.AttributeTypeCode.String
                                    }
                                ]
                            };
                        }
                        else {
                            this._model = DynamicData.Core.EntityTypeSerialization.ToPOCO(this.EntityType);
                        }
                        this._model.Attributes.forEach(function (a) { return a.Options = []; });
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
                if (!this.IsNew && !this.EntityType) {
                    this._location.url(DynamicData.Config.Routes.manage());
                    return;
                }
                this._appBarStatus.Detail();
                this.TypeCodeOptions = Object
                    .keys(DynamicData.Core.AttributeTypeCode)
                    .filter(function (key) { return isNaN(parseInt(key)); })
                    .map(function (key) {
                    return {
                        name: key,
                        value: DynamicData.Core.AttributeTypeCode[key]
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
                    var type = void 0;
                    try {
                        type = DynamicData.Core.EntityTypeSerialization.FromPOCO(this.Model);
                    }
                    catch (e) {
                        DynamicData.Core.Trace.Warning(e);
                    }
                    var result = void 0;
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
            EditTypeViewModel.prototype.EditEnum = function (attribute) {
                var options = {
                    controller: DynamicData.UI.Controllers.EditEnumController,
                    templateUrl: "html/EditEnum.html",
                    parent: angular.element(document.body),
                    resolve: {
                        name: function () { return attribute.EnumName; }
                    }
                };
                this._mdDialog.show(options)
                    .then(function (name) {
                    debugger;
                    attribute.EnumName = name;
                }, function () {
                    console.log("Edit Enum was canceled.");
                });
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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var EntityViewModel = /** @class */ (function (_super) {
            __extends(EntityViewModel, _super);
            function EntityViewModel(scope, location, appBarStatus, entityTypeRepository, entityRepository, entityTypeName, entityId) {
                var _this = this;
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
                _this = _super.call(this) || this;
                _this._location = location;
                _this._appBarStatus = appBarStatus;
                _this._entityTypeRepository = entityTypeRepository;
                _this._entityRepository = entityRepository;
                _this._entityTypeName = entityTypeName;
                _this._entityId = entityId;
                _this.Init();
                scope.$on("AppBarScope::add", _this.Add.bind(_this));
                scope.$on("AppBarScope::delete", _this.Delete.bind(_this));
                scope.$on("AppBarScope::save", _this.Save.bind(_this));
                scope.$on("AppBarScope::cancel", _this.Cancel.bind(_this));
                scope.$on("AppBarScope::refresh", _this.Refresh.bind(_this));
                return _this;
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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var FieldEditorViewModel = /** @class */ (function (_super) {
            __extends(FieldEditorViewModel, _super);
            function FieldEditorViewModel(scope, enumRepository) {
                var _this = this;
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!enumRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("enumRepository"));
                }
                _this = _super.call(this) || this;
                _this._scope = scope;
                if (_this.RenderAsOptionSet) {
                    var enumeration = enumRepository.GetByName(_this._scope.attribute.EnumName);
                    _this.Values = enumeration ? enumeration.Values : [];
                }
                scope.$watch("value", _this.UpdateUI.bind(_this));
                scope.$watch("vm.Checked", _this.UpdateValue.bind(_this));
                scope.$watch("vm.Text", _this.UpdateValue.bind(_this));
                scope.$watch("vm.Date", _this.UpdateDateValue.bind(_this));
                scope.$watch("vm.Time", _this.UpdateTimeValue.bind(_this));
                return _this;
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
            Object.defineProperty(FieldEditorViewModel.prototype, "RenderAsOptionSet", {
                get: function () {
                    return this._scope.attribute.TypeCode === DynamicData.Core.AttributeTypeCode.Enum;
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
                if (this.RenderAsOptionSet && newValue !== this.Text) {
                    this.Text = newValue;
                }
                if (this.RenderAsToggleSwitch && newValue !== this.Checked) {
                    this.Checked = !!newValue;
                }
                if (this.RenderAsDatePicker && !moment(newValue).isSame(this.Date)) {
                    this.Date = newValue;
                }
                if (this.RenderAsTimePicker && moment(newValue).format("HH:mm") !== this.Time) {
                    this.Time = moment(newValue).format("HH:mm");
                }
            };
            FieldEditorViewModel.prototype.UpdateValue = function (newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }
                if (this.RenderAsToggleSwitch) {
                    this._scope.value = !!newValue;
                }
                else {
                    this._scope.value = newValue;
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
                var time = moment(moment().format("MM/DD/YYYY") + " " + (newValue || "00:00"), "MM/DD/YYYY HH:mm");
                if (this.RenderAsDatePicker && this.RenderAsTimePicker) {
                    this._scope.value = this.CombineDateAndTime(this._scope.value, time.toDate());
                }
                else if (this.RenderAsTimePicker) {
                    this._scope.value = time.toDate();
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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var ManageViewModel = /** @class */ (function (_super) {
            __extends(ManageViewModel, _super);
            function ManageViewModel(scope, location, mdDialog, appBarStatus, repository) {
                var _this = this;
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!location) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("location"));
                }
                if (!mdDialog) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("mdDialog"));
                }
                if (!appBarStatus) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("appBarStatus"));
                }
                if (!repository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("repository"));
                }
                _this = _super.call(this) || this;
                _this._scope = scope;
                _this._location = location;
                _this._mdDialog = mdDialog;
                _this._appBarStatus = appBarStatus;
                _this._repository = repository;
                _this.LoadTypes();
                scope.$on("AppBarScope::add", _this.Add.bind(_this));
                scope.$on("AppBarScope::delete", _this.PromptDelete.bind(_this));
                scope.$on("AppBarScope::refresh", _this.Refresh.bind(_this));
                return _this;
            }
            ManageViewModel.prototype.Add = function () {
                DynamicData.Core.Trace.Message(ViewModels.manageViewModelName + ".Add");
                this._location.url(DynamicData.Config.Routes.typeCreate());
            };
            ManageViewModel.prototype.PromptDelete = function () {
                DynamicData.Core.Trace.Message(ViewModels.manageViewModelName + ".PromptDelete");
                var confirm = this._mdDialog.confirm()
                    .title("Confirmation")
                    .textContent("Do you confirm that you want to delete the selected types?")
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
            ManageViewModel.prototype.EnableDeletion = function () {
                var _this = this;
                var keys = Object
                    .keys(this.Selected)
                    .filter(function (k) { return !!_this.Selected[k]; });
                this._appBarStatus.IsDeleteDisabled = keys.length === 0;
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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var SettingsViewModel = /** @class */ (function (_super) {
            __extends(SettingsViewModel, _super);
            function SettingsViewModel(scope, repository, sampleData) {
                var _this = this;
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!repository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("repository"));
                }
                if (!sampleData) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("sampleData"));
                }
                _this = _super.call(this) || this;
                if (!repository.GetAll().length && _this.Settings.IsSampleDataInstalled) {
                    _this.Settings.IsSampleDataInstalled = false;
                }
                _this._scope = scope;
                _this._sampleData = sampleData;
                scope.$on("AppBarScope::cancel", _this.Cancel.bind(_this));
                scope.$on("AppBarScope::save", _this.Save.bind(_this));
                scope.$watch("vm.Settings.IsSampleDataInstalled", _this.IsSampleDataInstalledChanged.bind(_this));
                return _this;
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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DynamicData;
(function (DynamicData) {
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var TemplatesViewModel = /** @class */ (function (_super) {
            __extends(TemplatesViewModel, _super);
            function TemplatesViewModel(scope, location, mdDialog, appBarStatus, entityTypeRepository, templateRepository) {
                var _this = this;
                if (!scope) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("scope"));
                }
                if (!location) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("location"));
                }
                if (!mdDialog) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("mdDialog"));
                }
                if (!appBarStatus) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("appBarStatus"));
                }
                if (!entityTypeRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("entityTypeRepository"));
                }
                if (!templateRepository) {
                    throw new Error(DynamicData.Resources.Strings.RequiredArgumentMessageFormat("templateRepository"));
                }
                _this = _super.call(this) || this;
                _this._location = location;
                _this._mdDialog = mdDialog;
                _this._appBarStatus = appBarStatus;
                _this._entityTypeRepository = entityTypeRepository;
                _this._templateRepository = templateRepository;
                scope.$on("AppBarScope::cancel", _this.Cancel.bind(_this));
                scope.$on("AppBarScope::delete", _this.PromptDelete.bind(_this));
                scope.$on("AppBarScope::refresh", _this.Refresh.bind(_this));
                scope.$on("AppBarScope::save", _this.Save.bind(_this));
                _this.Init();
                return _this;
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
                this._appBarStatus.IsDeleteDisabled = !type ? true : false;
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
    var ViewModels;
    (function (ViewModels) {
        "use strict";
        var TimePickerViewModel = /** @class */ (function () {
            function TimePickerViewModel(scope) {
                this.Options = [];
                var multiplier = 4;
                var count = 24 * multiplier;
                for (var i = 0; i < count; i++) {
                    var min = i * 60 / multiplier;
                    var m = moment("01/01/2000", "MM/DD/YYYY").add({ minutes: min });
                    this.Options.push(m.format("HH:mm"));
                }
            }
            return TimePickerViewModel;
        }());
        ViewModels.TimePickerViewModel = TimePickerViewModel;
    })(ViewModels = DynamicData.ViewModels || (DynamicData.ViewModels = {}));
})(DynamicData || (DynamicData = {}));

var DynamicData;
(function (DynamicData) {
    var UI;
    (function (UI) {
        var Directives;
        (function (Directives) {
            "use strict";
            var EntityQuickViewForm = /** @class */ (function () {
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
                }
            ]);
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
            var FieldEditor = /** @class */ (function () {
                function FieldEditor(scope, enumRepository) {
                    DynamicData.Core.Trace.Message(Directives.fieldEditorName + ".constructor");
                    scope.vm = new DynamicData.ViewModels.FieldEditorViewModel(scope, enumRepository);
                }
                FieldEditor.$inject = ["$scope", DynamicData.Data.enumRepositoryName];
                return FieldEditor;
            }());
            angular.module(DynamicData.Config.appName)
                .directive("ddEditor", function () {
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
            var TimePicker = /** @class */ (function () {
                function TimePicker(scope) {
                    DynamicData.Core.Trace.Message(Directives.timePickerName + ".constructor");
                    scope.vm = new DynamicData.ViewModels.TimePickerViewModel(scope);
                }
                TimePicker.$inject = ["$scope"];
                return TimePicker;
            }());
            angular.module(DynamicData.Config.appName)
                .directive("ddTimepicker", function () {
                return {
                    restrict: "E",
                    controller: TimePicker,
                    templateUrl: "html/TimePicker.html",
                    scope: {
                        value: "=ngModel"
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
            var TypeQuickViewForm = /** @class */ (function () {
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
            var AppBarController = /** @class */ (function () {
                function AppBarController(scope, rootScope, location, status) {
                    scope.fire = this.Fire.bind(this);
                    scope.goTo = this.GoTo.bind(this);
                    scope.status = status;
                    this._rootScope = rootScope;
                    this._location = location;
                }
                AppBarController.prototype.$onInit = function () {
                };
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
            var ConfirmDialogController = /** @class */ (function () {
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
            var DashboardController = /** @class */ (function () {
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
            var DashboardPivotItemController = /** @class */ (function () {
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
            var EditEnumController = /** @class */ (function () {
                function EditEnumController(scope, mdDialog, enumRepository, name) {
                    scope.vm = new DynamicData.ViewModels.EditEnumViewModel(scope, mdDialog, enumRepository, name);
                }
                EditEnumController.$inject = [
                    "$scope",
                    "$mdDialog",
                    DynamicData.Data.enumRepositoryName,
                    "name"
                ];
                return EditEnumController;
            }());
            Controllers.EditEnumController = EditEnumController;
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
            var EditTypeController = /** @class */ (function () {
                function EditTypeController(scope, routeParams, location, mdToast, mdDialog, appBarStatus, repository) {
                    DynamicData.Core.Trace.Message(Controllers.editTypeControllerName + ".constructor");
                    var type = routeParams.entityType;
                    scope.vm = new DynamicData.ViewModels.EditTypeViewModel(scope, location, mdToast, mdDialog, appBarStatus, repository, type);
                }
                EditTypeController.$inject = [
                    "$scope",
                    "$routeParams",
                    "$location",
                    "$mdToast",
                    "$mdDialog",
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
            var EntityController = /** @class */ (function () {
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
            var ManageController = /** @class */ (function () {
                function ManageController(scope, location, mdDialog, appBarStatus, repository) {
                    DynamicData.Core.Trace.Message(Controllers.manageControllerName + ".constructor");
                    scope.vm = new DynamicData.ViewModels.ManageViewModel(scope, location, mdDialog, appBarStatus, repository);
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
            var ProfileController = /** @class */ (function () {
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
            var SettingsController = /** @class */ (function () {
                function SettingsController(scope, appBarStatus, repository, sampleData) {
                    DynamicData.Core.Trace.Message(Controllers.settingsControllerName + ".constructor");
                    scope.vm = new DynamicData.ViewModels.SettingsViewModel(scope, repository, sampleData);
                    this.AppBar(appBarStatus);
                }
                SettingsController.prototype.$onInit = function () {
                };
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
            var TemplatesController = /** @class */ (function () {
                function TemplatesController(scope, location, mdDialog, appBarStatus, entityTypeRepository, templateRepository) {
                    scope.vm = new DynamicData.ViewModels.TemplatesViewModel(scope, location, mdDialog, appBarStatus, entityTypeRepository, templateRepository);
                    appBarStatus.Detail();
                    appBarStatus.IsNewDisabled = true;
                    appBarStatus.IsDeleteDisabled = true;
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