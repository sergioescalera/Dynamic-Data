module DynamicData.Data {

    "use strict";

    export interface IEnumRepository {
        GetAll(): Core.IEnum[];
        GetByName(name: string): Core.IEnum;
        Save(name: string, displayName: string, values: string[]): void;
    }

    class EnumRepository implements IEnumRepository {

        GetAll(): Core.IEnum[] {

            return Data.storage.Enums;
        }

        GetByName(name: string): Core.IEnum {

            var enums: Core.IEnum[] = this.GetAll();

            var filtered: Core.IEnum[] = enums.filter((t: Core.IEnum) => t.Name === name);

            return filtered.length ? filtered[0] : null;
        }

        Save(name: string, displayName: string, values: string[]): void {
            
            var enums: Core.IEnum[] = this.GetAll();

            var filtered: Core.IEnum[] = enums.filter((t: Core.IEnum) => t.Name === name);

            if (filtered.length > 0) {
                filtered[0].DisplayName = displayName;
                filtered[0].Name = name;
                filtered[0].Values = values;
            } else {
                enums.push({
                    DisplayName: displayName,
                    Name: name,
                    Values: values,
                });
            }

            Data.storage.Enums = enums;
        }
    }

    angular.module(Config.appName)
        .factory(enumRepositoryName, () => new EnumRepository());
}