import {Component, OnInit} from '@angular/core';
import {StructureStore, Structure} from '@hr/structure/data-access';
import {Store} from '@ngrx/store';
import {Company, selectCurrentCompany} from '@shared/company/data-access';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'hr-structure-tree',
  templateUrl: './structure-tree.component.html',
  styleUrls: ['./structure-tree.component.scss'],
  providers: [StructureStore]
})
export class StructureTreeComponent implements OnInit {
  public structure$: Observable<Structure[]> = this.structureStore.structure$;
  public isLoading$: Observable<boolean> = this.structureStore.isLoading$;

  constructor(private structureStore: StructureStore,
              private store: Store) {
  }

  public ngOnInit() {
    this.store.select(selectCurrentCompany).pipe(
      filter((company: Company | null) => !!company),
      tap((company: Company | null) => this.structureStore.fetchStructure(company!.id))
    ).subscribe()
  }
}