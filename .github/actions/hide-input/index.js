const core = require('@actions/core');

try {
  const inputsToHide = core.getInput('inputs-to-hide');
  const inputs = inputsToHide.split(',');

  // Hide the specified inputs
  for (const input of inputs) {
    core.exportVariable(input, '');
  }

  console.log('Inputs hidden successfully!');
} catch (error) {
  core.setFailed(`Action failed with error: ${error}`);
}
