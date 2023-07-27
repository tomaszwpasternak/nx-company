import { Company } from './company';
import {createActionGroup, emptyProps, props} from '@ngrx/store';

export const CompanyActions = createActionGroup({
  source: 'Company',
  events: {
    'Fetch Companies': emptyProps(),
    'Set Companies': props<{companies: Company[]}>(),
    'Fetch Current Company': emptyProps(),
    'Set Current Company': props<{company: Company}>(),
  }
})
