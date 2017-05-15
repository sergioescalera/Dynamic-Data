module DynamicData.Core {

    "use strict";
    
    export interface IEntity {
        Fields: Object;
        HasValidId: boolean;
        Id: number;
        Type: IEntityType;
    }
}