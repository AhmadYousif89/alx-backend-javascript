/// <reference path="./crud.d.ts" />

import * as CRUD from './crud';
import { RowId, RowElement } from './interface';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowId = CRUD.insertRow(row);
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
