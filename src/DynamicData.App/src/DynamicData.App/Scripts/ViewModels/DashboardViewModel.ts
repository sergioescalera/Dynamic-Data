module DynamicData.ViewModels {

    "use strict";

    export class DashboardViewModel extends BaseViewModel {

        private _scope: UI.Controllers.IDashboardScope;
        private _location: ng.ILocationService;
        private _repository: Data.IEntityTypeRepository;
        private _sampleData: Data.ISampleData;

        Types: Core.IEntityType[];
        SelectedIndex: number;

        constructor(
            scope: UI.Controllers.IDashboardScope,
            location: ng.ILocationService,
            repository: Data.IEntityTypeRepository,
            sampleData: Data.ISampleData,
            entityTypeName?: string) {

            if (!scope) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("scope"));
            }

            if (!location) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("location"));
            }

            if (!repository) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("repository"));
            }

            if (!sampleData) {
                throw new Error(Resources.Strings.RequiredArgumentMessageFormat("sampleData"));
            }

            super();

            this._scope = scope;
            this._location = location;
            this._repository = repository;
            this._sampleData = sampleData;

            scope.$on("AppBarScope::add", this.Add.bind(this));
            scope.$watch("vm.SelectedIndex", this.SelectedIndexChanged.bind(this));

            this.Init(entityTypeName);
        }

        private Init(entityTypeName?: string): void {

            this.Types = this._repository.GetAll();

            if (!entityTypeName && this.Settings.CurrentEntityType) {

                this._location.url(Config.Routes.homeWithType(this.Settings.CurrentEntityType));

            } else if (entityTypeName) {

                var filter: Core.IEntityType[] = this.Types.filter((t: Core.EntityType) => t.Name === entityTypeName);

                if (!filter.length) {

                    this._location.url(Config.Routes.home());

                } else {

                    this.SelectedIndex = this.Types.indexOf(filter[0]);
                }
            } else {

                this.SelectedIndex = 0;
            }
        }

        Add(): void {

            Core.Trace.Message(`${dashboardViewModelName}.Add`);

            var type: Core.IEntityType = this.Types[this.SelectedIndex];

            this._location.url(Config.Routes.entityCreate(type.Name));
        }

        InstallSampleData(): void {

            var settings: Core.ISettings = Data.storage.Settings;

            this._sampleData.Install();

            if (!settings.IsSampleDataInstalled) {

                settings.IsSampleDataInstalled = true;
                Data.storage.Settings = settings;
            }

            this.Init();
        }

        SelectedIndexChanged(newValue: number, oldValue: number): void {

            Core.Trace.Message(`${dashboardViewModelName}.SelectionChanged(${newValue}, ${oldValue})`);

            if (newValue === oldValue) {
                return;
            }

            if (newValue >= 0 && newValue < this.Types.length) {

                var currentEntityType: string = this.Types[newValue].Name;

                this.Settings.CurrentEntityType = currentEntityType;

                Data.storage.Settings = this.Settings;

                this._location.url(Config.Routes.homeWithType(currentEntityType));
            }
        }
    }
}