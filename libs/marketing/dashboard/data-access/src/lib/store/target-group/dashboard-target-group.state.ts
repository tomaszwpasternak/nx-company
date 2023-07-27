import { TargetGroup } from './target-group';

export interface DashboardTargetGroupState {
  targetGroups: TargetGroup[];
  isLoading: boolean;
}