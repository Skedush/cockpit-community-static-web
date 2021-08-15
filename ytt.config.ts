import { ChangeCase, defineConfig, Interface } from 'yapi-to-typescript';

export default defineConfig([
  {
    serverUrl: 'http://192.168.70.10:40001',
    typesOnly: false,
    target: 'typescript',
    reactHooks: {
      enabled: false,
    },
    prodEnvName: 'production',
    dataKey: 'data',
    projects: [
      {
        token:
          '19e4f79cb5f309735f3d4ed744bd7feadf01c8bd572114229cc7ec2a39cc365e',
        typesOnly: true,
        getRequestFunctionName(
          interfaceInfo: Interface,
          changeCase: ChangeCase,
        ) {
          // replace是为了去除restful风格接口携带的参数
          return changeCase.camelCase(
            interfaceInfo.path
              .replace(/\{.*\}\//, '')
              .split('/')
              .join(),
          );
        },
        categories: [
          {
            id: 1350,
            outputFilePath: 'src/api-types/user.ts',
          },
          {
            id: 1315,
            outputFilePath: 'src/api-types/company.ts',
          },
          {
            id: 1357,
            outputFilePath: 'src/api-types/role.ts',
          },
          {
            id: 1532,
            outputFilePath: 'src/api-types/device.ts',
          },
          {
            id: 1413,
            outputFilePath: 'src/api-types/employee.ts',
          },
          {
            id: 1420,
            outputFilePath: 'src/api-types/workorder.ts',
          },
          {
            id: 1427,
            outputFilePath: 'src/api-types/menu.ts',
          },

          {
            id: 1525,
            outputFilePath: 'src/api-types/dictionary.ts',
          },

          {
            id: 1448,
            outputFilePath: 'src/api-types/loginAndOut.ts',
          },
          {
            id: 2603,
            outputFilePath: 'src/api-types/export.ts',
          },

          {
            id: 1518,
            outputFilePath: 'src/api-types/area.ts',
          },
        ],
      },
    ],
  },
]);
