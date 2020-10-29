module DynamicData.Data {

    "use strict";

    export interface IStorage {

        Settings: Core.ISettings;

        Types: Core.IEntityType[];

        Enums: Core.IEnum[];

        GetEntities(type: Core.IEntityType): Core.IEntity[];
        SetEntities(type: Core.IEntityType, value: Core.IEntity[]): void;
        DeleteEntities(typeName: string): void;

        GetTemplate(typeName: string): Core.IEntityTemplate;
        SetTemplate(typeName: string, template: Core.IEntityTemplate): void;
        DeleteTemplate(typeName: string): void;

        GetTypeSettings(typeName: string): Core.IEntityTypeSettings;
        SetTypeSettings(typeName: string, settings: Core.IEntityTypeSettings): void;
        DeleteTypeSettings(typeName: string): void;
    }

    class Storage implements IStorage {

        private _settingsKey = "settings";
        private _typesKey = "types";
        private _templateKey = "template_";
        private _entitiesKey = "data_";
        private _enumsKey = "enums";
        private _typeSettingsKey = "type_settings_";

        // settings

        get Settings(): Core.ISettings {

            var obj: Core.ISettings = this.getObject(this._settingsKey);

            return obj || {
                IsTraceEnabled: true, IsDebugEnabled: false
            };
        }

        set Settings(value: Core.ISettings) {

            console.log("Set settings", value);

            this.setObject(this._settingsKey, value);
        }

        // types

        get Types(): Core.IEntityType[] {

            var array: any[] = this.getObject(this._typesKey) || [];

            var results: Core.IEntityType[] = [];

            array.forEach((o: any) => {

                try {

                    results.push(Core.EntityTypeSerialization.FromPOCO(o));

                } catch (e) {

                    Core.Trace.Warning(e);
                }
            });

            return results;
        }

        set Types(value: Core.IEntityType[]) {

            this.setObject(this._typesKey, value.map((t: Core.IEntityType) => Core.EntityTypeSerialization.ToPOCO(t)));
        }

        // enumerations

        get Enums(): Core.IEnum[] {

            var array: Core.IEnum[] = this.getObject(this._enumsKey) || [];

            return array;
        }

        set Enums(value: Core.IEnum[]) {

            this.setObject(this._enumsKey, value);
        }

        // entities

        GetEntities(type: Core.IEntityType): Core.IEntity[] {

            if (!type) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("type"));
            }

            var array: any[] = this.getObject(this._entitiesKey + type.Name);

            if (angular.isArray(array)) {
                return array.map((o: any, id: number) => Core.EntitySerialization.FromPOCO(type, id, o));
            }

            return null;
        }

        SetEntities(type: Core.IEntityType, value: Core.IEntity[]): void {

            if (!type) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("type"));
            }

            var array: any[] = value.map((o: Core.IEntity) => o.Fields);

            this.setObject(this._entitiesKey + type.Name, array);
        }

        DeleteEntities(typeName: string): void {

            localStorage.removeItem(this._templateKey + typeName);
        }

        // templates

        GetTemplate(typeName: string): Core.IEntityTemplate {

            if (!typeName) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("typeName"));
            }

            var template: Core.IEntityTemplate = this.getObject(this._templateKey + typeName);

            return template;
        }

        SetTemplate(typeName: string, template: Core.IEntityTemplate): void {

            if (!typeName) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("typeName"));
            }

            if (!template) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("template"));
            }

            this.setObject(this._templateKey + typeName, template);
        }

        DeleteTemplate(typeName: string): void {

            if (!typeName) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("typeName"));
            }

            localStorage.removeItem(this._templateKey + typeName);
        }

        // type settings

        GetTypeSettings(typeName: string): Core.IEntityTypeSettings {

            if (!typeName) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("typeName"));
            }

            var settings: Core.IEntityTypeSettings = this.getObject(this._typeSettingsKey + typeName);

            return settings;
        }

        SetTypeSettings(typeName: string, settings: Core.IEntityTypeSettings): void {

            if (!typeName) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("typeName"));
            }

            if (!settings) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("settings"));
            }

            this.setObject(this._typeSettingsKey + typeName, settings);
        }

        DeleteTypeSettings(typeName: string): void {

            if (!typeName) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("typeName"));
            }

            localStorage.removeItem(this._typeSettingsKey + typeName);
        }

        // private

        private getObject(key: string): any {

            if (!key) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("key"));
            }

            var str: string = localStorage.getItem(key);

            if (!str) {
                return null;
            }

            var obj: any = JSON.parse(str);

            return obj;
        }

        private setObject(key: string, obj: any): void {

            if (!key) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("key"));
            }

            var str: string;

            if (obj) {
                str = JSON.stringify(obj);
            }

            localStorage.setItem(key, str);
        }
    }

    export var storage: IStorage = new Storage();
}