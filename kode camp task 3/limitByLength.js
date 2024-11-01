function limitByLength(inputString) {
  if (inputString.length <= 100) {
      return inputString;
  } else {
      return inputString.slice(0, 100) + "...";
  }
}

const longString = "ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat.";
const result = limitByLength(longString);
console.log(result);
