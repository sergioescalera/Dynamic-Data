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
//# sourceMappingURL=Storage.js.map