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
//# sourceMappingURL=SampleData.js.map