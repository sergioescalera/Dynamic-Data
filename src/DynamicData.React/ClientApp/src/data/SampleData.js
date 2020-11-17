import { AttributeType } from './core/AttributeType';
import { AttributeTypeCode } from './core/AttributeTypeCode';
import { EntityType } from './core/EntityType';
import { Strings } from './core/Resources';

export class SampleData {

    _entityTypeRepository;
    _templateRepository;

    constructor(
        entityTypeRepository,
        templateRepository) {

        if (!entityTypeRepository) {
            throw new Error(Strings.RequiredArgumentMessageFormat("entityTypeRepository"));
        }

        if (!templateRepository) {
            throw new Error(Strings.RequiredArgumentMessageFormat("templateRepository"));
        }

        this._entityTypeRepository = entityTypeRepository;
        this._templateRepository = templateRepository;
    }

    Install() {

        const types = [
            this.CreateContacts(),
            this.CreateExpenses(),
            this.CreateNotes(),
            this.CreateTasks()];

        const result = this._entityTypeRepository.BulkCreate(types);

        this.CreateTemplates();

        return result;
    }

    CreateContacts() {

        const type = new EntityType("contacts", "Contact", "Contacts");

        type.Attributes.push(new AttributeType("firstname", "First Name", AttributeTypeCode.String));
        type.Attributes.push(new AttributeType("lastname", "Last Name", AttributeTypeCode.String));
        type.Attributes.push(new AttributeType("email", "Email", AttributeTypeCode.String));
        type.Attributes.push(new AttributeType("phone", "Phone", AttributeTypeCode.String));

        return type;
    }

    CreateExpenses() {

        const type = new EntityType("expenses", "Expense", "Expenses");

        type.Attributes.push(new AttributeType("description", "Description", AttributeTypeCode.String));
        type.Attributes.push(new AttributeType("amount", "Amount", AttributeTypeCode.Currency));
        type.Attributes.push(new AttributeType("date", "Date", AttributeTypeCode.Date));

        return type;
    }

    CreateNotes() {

        const type = new EntityType("notes", "Note", "Notes");

        type.Attributes.push(new AttributeType("text", "Text", AttributeTypeCode.Text));

        return type;
    }

    CreateTasks() {

        const type = new EntityType("tasks", "Task", "Tasks");

        type.Attributes.push(new AttributeType("title", "Title", AttributeTypeCode.String));
        type.Attributes.push(new AttributeType("description", "Description", AttributeTypeCode.Text));
        type.Attributes.push(new AttributeType("completed", "Completed", AttributeTypeCode.Boolean));

        return type;
    }

    CreateTemplates() {

        const templates = {
            "contacts": this.CreateContactTemplate(),
            "expenses": this.CreateExpenseTemplate()
        };

        const keys = Object.keys(templates);

        for (let i = 0; i < keys.length; i++) {

            const key = keys[i];

            this._templateRepository.Save(key, templates[key]);
        }
    }

    CreateContactTemplate() {

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

    CreateExpenseTemplate() {

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
                <span ng-bind="entity.Fields.date|format"></span>&nbsp;
                <span ng-bind="entity.Fields.description"></span>&nbsp;
                <span ng-bind="entity.Fields.amount"></span>
            </div>
        </div>
    </md-card-content>
</md-card>`
        };
    }
}