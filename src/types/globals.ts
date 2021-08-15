import { AppState } from '@/models/app';
import { History } from 'history';
import { Dispatch, DvaLoading } from './dva';

export interface UmiComponentProps {
  history: History;
  dispatch: Dispatch;
}

export interface GlobalState {
  app: AppState;
  loading: DvaLoading;
}
