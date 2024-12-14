// crud.d.ts

/// <reference path="interface.ts" />

// Declare the CRUD functions
declare module "crud" {
    export function insertRow(row: RowElement): RowID;
    export function deleteRow(rowId: RowID): void;
    export function updateRow(rowId: RowID, row: RowElement): RowID;
  }
  