import { AppState } from '@/models/app';
import { Action, AnyAction } from 'redux';
import { History, Location, Route } from 'umi';

export interface Dispatch<A extends Action = AnyAction> {
  <T extends A>(action: T): any;
}

export interface LoadingState {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    app?: boolean;
    login?: boolean;
  };
}

export interface GlobalState {
  app: AppState;
  loading: LoadingState;
}

export interface UmiComponentProps {
  history: History;
  location: Location;
  match: any;
  route: Route;
  routes: Route[];
  dispatch: any;
  children: any;
}

export enum DictionaryEnum {}
