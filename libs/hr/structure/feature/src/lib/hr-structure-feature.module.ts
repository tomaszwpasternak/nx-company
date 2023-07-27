import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UiComponentsModule} from '@shared/ui/components';
import {PieChartModule} from '@swimlane/ngx-charts';
import {DepartmentComponent} from './department/department.component';
import {EmployeeTypeComponent} from './employee-type/employee-type.component';
import {EmployeeComponent} from './employee/employee.component';
import {StructureTreeComponent} from './structure-tree/structure-tree.component';
import {StructureComponent} from './structure.component';

@NgModule({
  declarations: [
    StructureComponent,
    DepartmentComponent,
    EmployeeComponent,
    EmployeeTypeComponent,
    StructureTreeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: StructureComponent
      }
    ]),
    UiComponentsModule,
    PieChartModule
  ],
})
export class HrStructureFeatureModule {
}
