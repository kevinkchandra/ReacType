import { Component } from '../interfaces/Interfaces';

const initFolders = (path: string, appName: string) => {
  let dir = path;
  dir = `${dir}/${appName}`;
  if (!window.api.existsSync(`${dir}/__tests__`)) {
    window.api.mkdirSync(`${dir}/__tests__`);
  }
};

const createJestConfigFile = (path: string, appName: string) => {
  const filePath: string = `${path}/${appName}/jest.config.js`;
  const data: String = `
module.exports = {
  snapshotSerializers: ["enzyme-to-json/serializer"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "<rootDir>/jest-preprocess.js",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["node_moules", ".cache"],
  globals: {
    __PATH_PREFIX__: "",
  }
} `;

  window.api.writeFile(filePath, data, (err) => {
    if (err) {
      console.log(
        'createTestSuiteClassic.util createJestConfigFile error:',
        err.message
      );
    } else {
      console.log(
        'createTestSuiteClassic.util createJestConfigFile written successfully'
      );
    }
  });
};

const createJestPreprocessFile = (path: string, appName: string) => {
  const filePath: string = `${path}/${appName}/jest-preprocess.js`;
  const data: string = `
  module.exports = require("babel-jest")`;

  window.api.writeFile(filePath, data, (err) => {
    if (err) {
      console.log(
        'createTestSuite.util createJestPreprocessFile error:',
        err.message
      );
    } else {
      console.log(
        'createTestSuit.util createJestPreprocessFile written successfully'
      );
    }
  });
};

async function createComponentTests(
  path: string,
  appName: string,
  components: Component[],
) {
  const filePath: string = `${path}/${appName}/__tests__/test.tsx`;
  let data: string = `
    import { shallow } from 'enzyme'
    import React from 'react';

    import * as Enzyme from 'enzyme'
    import Adapter from 'enzyme-adapter-react-16'

    Enzyme.configure({
        adapter: new Adapter(),
})
    `;

  components.forEach((page) => {
    let importString = `
    import ${capitalize(page.name)} from "../src/components/${page.name}";`;
    data = data + importString;
  });

  components.forEach((page) => {
    data =
      data +
      `
      
    describe("${capitalize(page.name)}", () => {`;

    data =
      data +
      `
    it('renders snapshots, too', () => {
        const wrapper = shallow(< ${capitalize(page.name)} />)
        expect(wrapper).toMatchSnapshot()
      })`;

    data =
      data +
      `
    });`;
  });

  window.api.writeFile(filePath, data, (err) => {
    if (err) {
      console.log(
        'createTestSuite.util createComponentTests error:',
        err.message
      );
    } else {
      console.log(
        'createTestSuit.util createComponentTests written successfully'
      );
    }
  });
}

const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

async function createTestSuiteClassic({
  path,
  appName,
  components,
  testchecked
}: {
  path: string;
  appName: string;
  components: Component[];
  testchecked: boolean;
}) {
  await initFolders(path, appName);
  await createJestConfigFile(path, appName);
  await createJestPreprocessFile(path, appName);
  await createComponentTests(path, appName, components);
}

export default createTestSuiteClassic;
