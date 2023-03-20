
const inquirer = require('inquirer');
const yargs = require('yargs');
require = require('esm')(module);
const chalk = require('chalk');




inquirer
    .prompt([
        {
            type: 'number',                   //taking input for number of players and groups
            name: 'players',
            message: 'How many players are there?',
        },

        {
            type: 'number',
            name: 'groups',
            message: 'How many groups do you want to create?',
        },
    ])
   .then((answers) => {
        const { players, groups } = answers;

        
        const playerNames = [];                   //adding players with their group number
        for(let i=0;i<groups;i++){
        for (let j = 0; j < players; j++) {
            playerNames.push(`group ${i+1}`+"-"+`Player ${j + 1}`);
        }
    }


       
        for (let g = 0; g < groups; g++) {
            const group = g + 1;
            console.log(chalk.yellow(`\n<<------- Group ${group}------->>`));
                
            for (let i = 0; i < playerNames.length - 1; i++) {
                let fixtures = [];                            //generating fixtures for given teams members and groups
                //fixtures=chalk.yellow(fixtures)
                for (let j = 0; j < playerNames.length ; j++) {
                    
                    fixtures.push([playerNames[j] +" vs "+ playerNames[playerNames.length - j - 1]]);
                }
                //let res=chalk.yellow([fixtures]);
                console.log(chalk.grey(`Round ${i + 2}`));
                console.log(fixtures)
            }
        }
   }); 
   