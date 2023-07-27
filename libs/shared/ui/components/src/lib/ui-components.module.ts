import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonComponent} from './button/button.component';
import {CardComponent} from './card/card.component';
import {ListItemComponent} from './list-item/list-item.component';
import {MenuComponent} from './menu/menu.component';
import {SelectComponent} from './select/select.component';
import {SkeletonComponent} from './skeleton/skeleton.component';
import {TreeNodeComponent} from './tree/tree-node/tree-node.component';
import {TreeComponent} from './tree/tree.component';
import {UserComponent} from './user/user.component';

const COMPONENTS = [
  ButtonComponent,
  CardComponent,
  ListItemComponent,
  MenuComponent,
  SelectComponent,
  SkeletonComponent,
  TreeComponent,
  TreeNodeComponent,
  UserComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [...COMPONENTS, ReactiveFormsModule]
})
export class UiComponentsModule {
}
