function greeting () {
  console.log('Welcome to Holberton School, what is your name?');
  process.stdin.on('data', function (data) {
    const name = data.toString().trim();
    name ? console.log('Your name is:', name) : console.log('You did not type anything');
    if (!process.stdin.isTTY) {
      console.log('This important software is now closing');
    }
    process.exit();
  });
}

greeting();
