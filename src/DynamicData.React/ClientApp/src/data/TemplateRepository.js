import { TemplateWrapper } from '../core/Template';

export class TemplateRepository {

    _edit;
    //_editPromise;
    _quickView;
    //_quickViewPromise;

    //constructor() {

        //this._editPromise = http
        //    .get("html/Entity.html")
        //    .then((response: ng.IHttpPromiseCallbackArg<string>) => {

        //        this._edit = response.data;
        //    });

        //this._quickViewPromise = http
        //    .get("html/EntityQuickViewForm.html")
        //    .then((response: ng.IHttpPromiseCallbackArg<string>) => {

        //        this._quickView = response.data;
        //    });
    //}

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