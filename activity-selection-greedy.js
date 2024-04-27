function activitySelector(startTimes, finishTimes) {

  let taskTimes = [];
  let lastFinish = finishTimes[0];
  let i = 1;


  while (i < finishTimes.length) {
    let nextStart = startTimes[i];

    if(lastFinish <= nextStart) {
      taskTimes.push(i-1);
      taskTimes.push(i);
    } 

    i++;
    lastFinish = finishTimes[i-1];
  }

  return taskTimes;
}

activitySelector([1, 3, 0, 8, 8, 5],[2, 4, 6, 7, 9, 9]);
