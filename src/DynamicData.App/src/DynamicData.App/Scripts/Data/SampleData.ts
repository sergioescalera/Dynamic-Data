module DynamicData.Data {

    "use strict";

    export interface ISampleData {

        Install(): void;
    }

    class SampleData {

        private _entityTypeRepository: IEntityTypeRepository;
        private _templateRepository: ITemplateRepository;

        constructor(
            entityTypeRepository: IEntityTypeRepository,
            templateRepository: ITemplateRepository) {

            if (!entityTypeRepository) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("entityTypeRepository"));
            }

            if (!templateRepository) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("templateRepository"));
            }

            this._entityTypeRepository = entityTypeRepository;
            this._templateRepository = templateRepository;
        }

        Install(): void {

            var types: Core.IEntityType[] = [
                this.CreateContacts(),
                this.CreateExpenses(),
                this.CreateNotes(),
                this.CreateTasks()];

            this._entityTypeRepository.BulkCreate(types);

            this.CreateTemplates();
        }

        private CreateContacts(): Core.IEntityType {

            var type: Core.IEntityType = new Core.EntityType("contacts", "Contact", "Contacts");

            type.Attributes.push(new Core.AttributeType("firstname", "First Name", Core.AttributeTypeCode.String));
            type.Attributes.push(new Core.AttributeType("lastname", "Last Name", Core.AttributeTypeCode.String));
            type.Attributes.push(new Core.AttributeType("email", "Email", Core.AttributeTypeCode.String));
            type.Attributes.push(new Core.AttributeType("phone", "Phone", Core.AttributeTypeCode.String));

            return type;
        }

        private CreateExpenses(): Core.IEntityType {

            var type: Core.IEntityType = new Core.EntityType("expenses", "Expense", "Expenses");

            type.Attributes.push(new Core.AttributeType("description", "Description", Core.AttributeTypeCode.String));
            type.Attributes.push(new Core.AttributeType("amount", "Amount", Core.AttributeTypeCode.Currency));
            type.Attributes.push(new Core.AttributeType("date", "Date", Core.AttributeTypeCode.Date));

            return type;
        }

        private CreateNotes(): Core.IEntityType {

            var type: Core.IEntityType = new Core.EntityType("notes", "Note", "Notes");

            type.Attributes.push(new Core.AttributeType("text", "Text", Core.AttributeTypeCode.Text));

            return type;
        }

        private CreateTasks(): Core.IEntityType {

            var type: Core.IEntityType = new Core.EntityType("tasks", "Task", "Tasks");

            type.Attributes.push(new Core.AttributeType("title", "Title", Core.AttributeTypeCode.String));
            type.Attributes.push(new Core.AttributeType("description", "Description", Core.AttributeTypeCode.Text));
            type.Attributes.push(new Core.AttributeType("completed", "Completed", Core.AttributeTypeCode.Boolean));

            return type;
        }

        private CreateTemplates(): void {

            var templates: any = {
                "contacts": this.CreateContactTemplate(),
                "expenses": this.CreateExpenseTemplate()
            };

            var keys: string[] = Object.keys(templates);

            for (var i: number = 0; i < keys.length; i++) {
                var key: string = keys[i];
                this._templateRepository.Save(key, templates[key]);
            }
        }

        private CreateContactTemplate(): Core.IEntityTemplate {

            return {
                quickView: `<md-card class="entity-view-form">
    <md-card-title>
        <md-card-title-text>
            <span class="entity-name" ng-bind="entity.Type.DisplayName" ng-click="open()"></span>
        </md-card-title-text>
    </md-card-title>
    <md-card-content>
        <div class="attribute-list">
            <div class="attribute">
                <span ng-bind="entity.Fields.firstname"></span>&nbsp;
                <span ng-bind="entity.Fields.lastname"></span>
            </div>
            <div class="attribute">
                Phone: <span ng-bind="entity.Fields.phone"></span>
            </div>
            <div class="attribute">
                Email: <span ng-bind="entity.Fields.email"></span>
            </div>
        </div>
    </md-card-content>
</md-card>`
            };
        }

        private CreateExpenseTemplate(): Core.IEntityTemplate {

            return {
                quickView: `<md-card class="entity-view-form">
    <md-card-title>
        <md-card-title-text>
            <span class="entity-name" ng-bind="entity.Type.DisplayName" ng-click="open()"></span>
        </md-card-title-text>
    </md-card-title>
    <md-card-content>
        <div class="attribute-list">
            <div class="attribute">
                <span ng-bind="format(entity.Fields.date)"></span>&nbsp;
                <span ng-bind="entity.Fields.description"></span>&nbsp;
                <span ng-bind="entity.Fields.amount"></span>
            </div>
        </div>
    </md-card-content>
</md-card>`
            };
        }
    }

    angular.module(Config.appName)
        .factory(sampleDataName, [
            entityTypeRepositoryName,
            templateRepositoryName,
            (
                entityTypeRepository: IEntityTypeRepository,
                templateRepository: ITemplateRepository
            ) => new SampleData(entityTypeRepository, templateRepository)
        ]);
}