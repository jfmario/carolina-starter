
require('./initialize/app');

/* global Carolina */

const Terminal = Carolina.$("Terminal");

async function main() {
  
  let status = await Terminal.execute(process.argv);
  return status;

  // fire shutdown event  

}

main();
// main().then((s) => process.kill(process.pid, 'SIGTERM'));

// process.exit(s);