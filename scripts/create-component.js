const fs = require('fs').promises;
const path = require('path');
const enquirer = require('enquirer');
const toPascalCase = require('../src/utils/toPascalCase');
const toSnakeCase = require('../src/utils/toSnakeCase');

const COMPONENT_TEMPLATE_PATH = 'templates/component';

function createComponentFolder(componentPath) {
  return fs.mkdir(componentPath, { recursive: true });
}

function readComponentFile(componentTemplate) {
  return fs.readFile(
    path.join(__dirname, `../${COMPONENT_TEMPLATE_PATH}/${componentTemplate}`),
    'utf8'
  );
}

function replaceComponentFile(componentFile, componentName) {
  return componentFile
    .replace(/component/g, toSnakeCase(componentName))
    .replace(/Component/g, componentName);
}

function createComponentFile(componentPath, replacedComponentFile) {
  return fs.writeFile(componentPath, replacedComponentFile, 'utf8');
}

async function createComponent(componentTemplates, type, componentName) {
  const mappedType =
    type === 'common' ? 'src/common/components' : `src/features/${type}/components`;
  const componentPath = path.join(__dirname, `../${mappedType}/${componentName}`);

  try {
    await createComponentFolder(componentPath);
    console.log('🔧 component folder created!');

    for (const componentTemplate of componentTemplates) {
      const componentTemplateRenamed = componentTemplate.replace(
        /Component/g,
        toPascalCase(componentName)
      );

      const componentFile = await readComponentFile(componentTemplate);
      const replacedComponentFile = await replaceComponentFile(componentFile, componentName);
      await createComponentFile(
        path.join(componentPath, componentTemplateRenamed),
        replacedComponentFile
      );
      console.log(`🔧 component file ${componentTemplateRenamed} created!`);
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

async function getPromptParams() {
  let { type } = await enquirer.prompt({
    type: 'select',
    name: 'type',
    message: 'What scope will your component have?',
    choices: ['common', 'specific'],
    initial: 'common'
  });

  if (type !== 'common') {
    let { specificType } = await enquirer.prompt({
      type: 'input',
      name: 'specificType',
      message: 'Please, write the name of the feature where you will create this component?',
      validate(input) {
        if (!this.skipped && input.trim().length === 0 && input.trim() !== ',') {
          return 'Please, tell us what is the name of the feature. Try again!';
        }
        return true;
      }
    });
    type = specificType;
  }

  let { componentName } = await enquirer.prompt({
    type: 'input',
    name: 'componentName',
    message: 'What is the name of the new component?',
    validate(input) {
      if (!this.skipped && input.trim().length === 0 && input.trim() !== ',') {
        return 'Please, tell us what is the name of the new component. Try again!';
      }
      return true;
    }
  });

  try {
    const componentTemplates = await fs.readdir(
      path.join(__dirname, `../${COMPONENT_TEMPLATE_PATH}`)
    );

    if (componentTemplates.length !== 0) {
      createComponent(componentTemplates, type.toLowerCase(), toPascalCase(componentName));
    } else {
      throw new Error(
        `There are not template files to create the component: ${toPascalCase(componentName)}`
      );
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

getPromptParams();
