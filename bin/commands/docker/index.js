const { spawn } = require('child_process');

export default async function(context) {
  context.print('hello!');
  context.print('the stuff is ', context.argv);
  await spawn('echo hello');
}
