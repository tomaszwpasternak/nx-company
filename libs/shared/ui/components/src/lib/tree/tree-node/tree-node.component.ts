import {Component, Input} from '@angular/core';
import { TreeNode } from '../tree-node';
import {TreeService} from '../tree.service';

@Component({
  selector: 'ui-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent {
  @Input() node!: TreeNode;

  public showChildren = this.treeService.shouldBeExpanded;

  constructor(private treeService: TreeService) {
    this.treeService.expandAll$.subscribe(() => this.showChildren = true);
    this.treeService.collapseAll$.subscribe(() => this.showChildren = false);
  }
}