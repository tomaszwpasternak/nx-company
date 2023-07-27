import {Department} from './department';

export interface StructureDepartmentState {
  department: Department | null;
  isLoading: boolean;
}