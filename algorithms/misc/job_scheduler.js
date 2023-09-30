class Job {
    constructor(id, arrTime, burstTime) {
        this.id = id;
        this.arrTime = arrTime;
        this.burstTime = burstTime;
    }
}

const fcfs = (jobQueue) => {
    let currTime = 0;
    let waitingTime = 0;

    jobQueue.sort((a, b) => a.arrTime - b.arrTime);

    // returns the index of the jobs in the queue.
    for (const job of jobQueue) {
        if (currTime < job.arrTime) {
            currTime = job.arrTime;
        }

        console.log(`Job ${job.id} started at time ${currTime}`);
        waitingTime += job.arrTime;
        currTime = job.burstTime;
        console.log(`Job ${job.id} finsihed at time ${currTime}`);
    }

    const avgWaitingTime = waitingTime / jobQueue.length;
    console.log(`Average waiting time: ${avgWaitingTime.toFixed(2)} seconds`);
};

const jobs = [
    new Job(1, 0, 5), //[0]
    new Job(2, 1, 3), //[1]
    new Job(3, 2, 5), //[2]
    new Job(4, 3, 6)  //[3]
];

console.log("Job scheduling using fcfs:");
fcfs(jobs);