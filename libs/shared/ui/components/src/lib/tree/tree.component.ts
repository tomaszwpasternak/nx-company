import {Component, Input} from '@angular/core';
import {TreeNode} from './tree-node';
import {TreeService} from './tree.service';

@Component({
  selector: 'ui-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  providers: [TreeService]
})
export class TreeComponent {
  @Input() data: TreeNode[] = [];

  constructor(private treeService: TreeService) {
  }

  expandAll() {
    this.treeService.expandAll();
  }

  collapseAll() {
    this.treeService.collapseAll();
  }
}