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
