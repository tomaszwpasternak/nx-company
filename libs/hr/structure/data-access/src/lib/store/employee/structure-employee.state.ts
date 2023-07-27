import {Employee} from './employee';

export interface StructureEmployeeState {
  employee: Employee | null;
  isLoading: boolean;
}