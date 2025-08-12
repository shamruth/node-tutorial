const {parentPort}=require('worker_threads');
for(i=0;i<1000000000000;i++)
{
    
}
parentPort.postMessage(i);