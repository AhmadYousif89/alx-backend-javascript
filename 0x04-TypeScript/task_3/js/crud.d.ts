import { RowId, RowElement } from './interface';

export function insertRow(row: RowElement): number;
export function updateRow(id: RowId, row: RowElement): RowId;
export function deleteRow(id: RowId): void;
