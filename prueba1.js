const readline = require('readline');
const readl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const namelist = [];

function addPersonToNamelist() {
  readl.question('Enter name: ', (name) => {
    readl.question('Enter lastname: ', (lastname) => {
      namelist.push({ name, lastname });
      readl.question('Do you want to add another person? (yes/no): ', (answer) => {
        if (answer.toLowerCase() === 'yes') {
          addPersonToNamelist();
        } else {
          readl.close();
          const fullnames = namelist.map(person => `${person.name} ${person.lastname}`);
          console.log(fullnames);
        }
      });
    });
  });
}

addPersonToNamelist();