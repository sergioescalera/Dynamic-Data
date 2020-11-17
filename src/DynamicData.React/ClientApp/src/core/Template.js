export class TemplateWrapper {

    _edit = "";
    _quickView = "";
    _defaultEdit = "";
    _defaultQuickView = "";

    constructor(template, defaultEdit, defaultQuickView) {

        if (template) {
            this._edit = template.edit;
            this._quickView = template.quickView;
        }

        this._defaultEdit = defaultEdit;
        this._defaultQuickView = defaultQuickView;
    }

    get edit() {
        return this._edit || this._defaultEdit;
    }
    set edit(value) {
        this._edit = value;
    }

    get quickView() {
        return this._quickView || this._defaultQuickView;
    }
    set quickView(value) {
        this._quickView = value;
    }
}