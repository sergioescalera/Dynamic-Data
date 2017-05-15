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
