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
