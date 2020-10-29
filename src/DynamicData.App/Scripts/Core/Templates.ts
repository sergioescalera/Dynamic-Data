module DynamicData.Core {

    "use strict";

    export interface IEntityTemplate {
        edit?: string;
        quickView?: string;
    }

    export class TemplateWrapper implements IEntityTemplate {

        _edit: string;
        _quickView: string;
        _defaultEdit: string;
        _defaultQuickView: string;

        constructor(template: IEntityTemplate, defaultEdit: string, defaultQuickView: string) {

            if (template) {
                this._edit = template.edit;
                this._quickView = template.quickView;
            }
            this._defaultEdit = defaultEdit;
            this._defaultQuickView = defaultQuickView;
        }

        get edit(): string {
            return this._edit || this._defaultEdit;
        }
        set edit(value: string) {
            this._edit = value;
        }

        get quickView(): string {
            return this._quickView || this._defaultQuickView;
        }
        set quickView(value: string) {
            this._quickView = value;
        }
    }
}