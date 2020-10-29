module DynamicData.Core {

    "use strict";
    
    export interface IEntity {
        Fields: any;
        HasValidId: boolean;
        Id: number;
        Type: IEntityType;
    }
}