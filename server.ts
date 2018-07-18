import * as egg from 'egg';
import * as os from 'os';
const workers = Number(process.argv[2] || os.cpus().length);
egg.startCluster({
  workers,
  baseDir: __dirname,
},()=>{});
