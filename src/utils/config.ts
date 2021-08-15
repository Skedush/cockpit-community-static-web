export interface LayoutConfig {
  name: string;
  include: RegExp[];
  exlude: RegExp[];
}

export interface RouteList {
  id: number;
  parentId: number;
  level: number;
  name: string;
  icon: string;
  route: string;
  children: RouteList[];
}

export default {
  siteName: '社会治安防控体系平台v1.0.0',
  copyright: 'LD Umi  © 2020',
  logoPath: '/logo.svg',
  defaultTheme: 'light',
  // eslint-disable-next-line no-undef
  apiPrefix: API_PREFIX,
  // eslint-disable-next-line no-undef
  onlineMock: MOCK_CONFIG,
  fixedHeader: true, // sticky primary layout header
  /* Layout configuration, specify which layout to use for route. */
  // login页不使用primary的layout

  routeList: [],
};
