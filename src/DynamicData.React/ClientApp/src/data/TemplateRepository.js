import { Strings } from '../core/Resources';
import { TemplateWrapper } from '../core/Template';

export class TemplateRepository {

    _edit;
    _quickView;

    _storage;

    constructor(storage) {

        if (!storage) {
            throw new Error(Strings.RequiredArgumentMessageFormat("storage"));
        }

        this._storage = storage;
    }

    Delete(name) {

        this._storage.DeleteTemplate(name);
    }

    GetByName(name) {

        const template = this._storage.GetTemplate(name);

        return new Promise((resolve) => {

            resolve(new TemplateWrapper(template, this._edit, this._quickView));
        });
    }

    Save(name, template) {

        this._storage.SetTemplate(name, {
            edit: template ? template.edit : null,
            quickView: template ? template.quickView : null
        });
    }
}