import { EntitySerializer } from '../core/EntitySerializer';
import { EntityTypeSerializer } from '../core/EntityTypeSerializer';
import { Strings } from '../core/Resources';
import { Trace } from '../core/Trace';

export class Storage {

    _settingsKey = "settings";
    _typesKey = "types";
    _templateKey = "template_";
    _entitiesKey = "data_";
    _enumsKey = "enums";
    _typeSettingsKey = "type_settings_";

    _entitySerializer = new EntityTypeSerializer();

    // settings

    get Settings() {

        const obj = this.getObject(this._settingsKey);

        return obj || {
            IsTraceEnabled: true, IsDebugEnabled: false
        };
    }

    set Settings(value) {

        this.setObject(this._settingsKey, value);
    }

    // types

    get Types() {

        const array = this.getObject(this._typesKey) || [];

        const results = [];

        array.forEach((o) => {

            try {

                results.push(this._entitySerializer.FromPlainObject(o));

            } catch (e) {

                Trace.Warning(e);
            }
        });

        return results;
    }

    set Types(value) {

        this.setObject(this._typesKey, value.map((t) => this._entitySerializer.ToPlainObject(t)));
    }

    // enumerations

    get Enums() {

        const array = this.getObject(this._enumsKey) || [];

        return array;
    }

    set Enums(value) {

        this.setObject(this._enumsKey, value);
    }

    // entities

    GetEntities(type) {

        if (!type) {
            throw new Error(Strings.RequiredArgumentMessageFormat("type"));
        }

        const array = this.getObject(this._entitiesKey + type.Name);

        if (Array.isArray(array)) {
            return array.map((o, id) => new EntitySerializer().FromPlainObject(type, id, o));
        }

        return null;
    }

    SetEntities(type, value) {

        if (!type) {
            throw new Error(Strings.RequiredArgumentMessageFormat("type"));
        }

        const array = value.map((o) => o.Fields);

        this.setObject(this._entitiesKey + type.Name, array);
    }

    DeleteEntities(typeName) {

        localStorage.removeItem(this._templateKey + typeName);
    }

    // templates

    GetTemplate(typeName) {

        if (!typeName) {
            throw new Error(Strings.RequiredArgumentMessageFormat("typeName"));
        }

        const template = this.getObject(this._templateKey + typeName);

        return template;
    }

    SetTemplate(typeName, template) {

        if (!typeName) {
            throw new Error(Strings.RequiredArgumentMessageFormat("typeName"));
        }

        if (!template) {
            throw new Error(Strings.RequiredArgumentMessageFormat("template"));
        }

        this.setObject(this._templateKey + typeName, template);
    }

    DeleteTemplate(typeName) {

        if (!typeName) {
            throw new Error(Strings.RequiredArgumentMessageFormat("typeName"));
        }

        localStorage.removeItem(this._templateKey + typeName);
    }

    // type settings

    GetTypeSettings(typeName) {

        if (!typeName) {
            throw new Error(Strings.RequiredArgumentMessageFormat("typeName"));
        }

        const settings = this.getObject(this._typeSettingsKey + typeName);

        return settings;
    }

    SetTypeSettings(typeName, settings) {

        if (!typeName) {
            throw new Error(Strings.RequiredArgumentMessageFormat("typeName"));
        }

        if (!settings) {
            throw new Error(Strings.RequiredArgumentMessageFormat("settings"));
        }

        this.setObject(this._typeSettingsKey + typeName, settings);
    }

    DeleteTypeSettings(typeName) {

        if (!typeName) {
            throw new Error(Strings.RequiredArgumentMessageFormat("typeName"));
        }

        localStorage.removeItem(this._typeSettingsKey + typeName);
    }

    // private

    getObject(key) {

        if (!key) {
            throw new Error(Strings.RequiredArgumentMessageFormat("key"));
        }

        const str = localStorage.getItem(key);

        if (!str) {
            return null;
        }

        const obj = JSON.parse(str);

        return obj;
    }

    setObject(key, obj) {

        if (!key) {
            throw new Error(Strings.RequiredArgumentMessageFormat("key"));
        }

        const str = obj ? JSON.stringify(obj) : "";

        localStorage.setItem(key, str);
    }
}

export var storage = new Storage();