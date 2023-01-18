

var data = '|/-\\|/-|'
function spinner(string) {
  let interval = 100
  for (let position of string) {
    interval += 200
    setTimeout(() => {
      process.stdout.write(`\r${position}   `)
    }, interval );
  }
}

spinner(data);

//   setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
// process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
// process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
// process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
// process.stdout.write('\r\\  ');
// }, 1500);

// setTimeout(() => {
// process.stdout.write('\r|   ');
// }, 1700);}
// }
