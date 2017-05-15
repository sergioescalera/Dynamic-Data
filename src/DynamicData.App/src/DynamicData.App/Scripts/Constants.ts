var undefinedstr: string = void 0;

module DynamicData {

    "use strict";

    export var namespace: string = "DynamicData";
}

module DynamicData.Config {

    "use strict";

    export var namespace: string = `${DynamicData.namespace}.Config`;
}

module DynamicData.Core {

    "use strict";

    export var namespace: string = `${DynamicData.namespace}.Core`;
    export var appBarStatusName: string = `${namespace}.AppBarStatus`;
}

module DynamicData.Data {

    "use strict";

    export var namespace: string = `${DynamicData.namespace}.Data`;
    export var entityRepositoryName: string = `${namespace}.EntityRepository`;
    export var entityTypeRepositoryName: string = `${namespace}.EntityTypeRepository`;
    export var entityTypeSettingsRepositoryName: string = `${namespace}.EntityTypeSettingsRepository`;
    export var templateRepositoryName: string = `${namespace}.TemplateRepository`;
    export var sampleDataName: string = `${namespace}.SampleData`;
}

module DynamicData.ViewModels {

    "use strict";

    export var namespace: string = `${DynamicData.namespace}.ViewModels`;
    export var dashboardViewModelName: string = `${namespace}.DashboardViewModel`;
    export var dashboardPivotItemViewModelName: string = `${namespace}.DashboardPivotItemViewModel`;
    export var entityViewModelName: string = `${DynamicData.namespace}.EntityViewModel`;
    export var editTypeViewModelName: string = `${DynamicData.namespace}.EditTypeViewModel`;
    export var fieldEditorViewModelName: string = `${namespace}.FieldEditorViewModel`;
    export var manageViewModelName: string = `${namespace}.ManageViewModel`;
    export var settingsViewModelName: string = `${namespace}.SettingsViewModel`;
    export var templatesViewModelName: string = `${namespace}.TemplatesViewModel`;
}

module DynamicData.UI {

    "use strict";

    export var namespace: string = `${DynamicData.namespace}.UI`;
}

module DynamicData.Resources {

    "use strict";

    export var namespace: string = `${DynamicData.namespace}.Resources`;
}

module DynamicData.UI.Controllers {

    "use strict";

    export var namespace: string = `${DynamicData.UI.namespace}.Controllers`;
    export var appBarControllerName: string = `${namespace}.AppBarController`;
    export var dashboardControllerName: string = `${namespace}.DashboardController`;
    export var dashboardPivotItemControllerName: string = `${namespace}.DashboardPivotItemController`;
    export var editTypeControllerName: string = `${namespace}.EditTypeController`;
    export var entityControllerName: string = `${namespace}.EntityController`;
    export var manageControllerName: string = `${namespace}.ManageController`;
    export var profileControllerName: string = `${namespace}.ProfileController`;
    export var settingsControllerName: string = `${namespace}.SettingsController`;
    export var templatesControllerName: string = `${namespace}.TemplatesController`;
}

module DynamicData.UI.Directives {

    "use strict";

    export var namespace: string = `${DynamicData.UI.namespace}.Directives`;
    export var entityQuickViewFormName: string = `${namespace}.EntityQuickViewForm`;
    export var fieldEditorName: string = `${namespace}.FieldEditor`;
    export var timePickerName: string = `${namespace}.TimePicker`;
    export var typeQuickViewFormName: string = `${namespace}.TypeQuickViewForm`;
}