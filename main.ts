
import inquirer  from "inquirer";
import chalk from "chalk";

console.log
(chalk.grey(`

 ██████   ██████  ██████  
██    ██ ██    ██ ██   ██ 
██    ██ ██    ██ ██████  
██    ██ ██    ██ ██      
 ██████   ██████  ██      `))

 // ================================================================================= //
class Person 
{
    personality:string = 'Mystery';

    constructor(personality:string){
       this.personality = personality;
    }     
    printPerson(){ 
      if      (ans == 1){this.personality = "Extavert"}
      else if (ans == 2){this.personality = "Introvert"}
      else              {this.personality = "You are still a Mystery"; false} 
 
      console.log(chalk.bgCyanBright(`\n     You are: ${this.personality}     `));           
    }    
}

class Student extends Person
{  
   myStudent:string = 'No Name';   

   constructor(myStudent:string, personality:string = 'Mystery'){
   super(personality)
   this.myStudent = myStudent,this.personality = personality;
   }  
   PrintWStud(){
    console.log(chalk.yellow(`\nYour name is : ${Stu} and your personality type is ${this.personality}`));
   }     
}

// OOP_Introduction_Explained

// Asking Type //
  let Quest = await inquirer.prompt
        ({
          name: "AskQuestion",
          type: "input",
          message:chalk.bgGreen("\nType 1 if you like to talk to others and type 2 if you would rather keep to yourself :")
        });

let ans = (Quest.AskQuestion);
let Print = new Person(ans); 

Print.printPerson();     


// Asking Name //
  let Name = await inquirer.prompt
        ({
          name: "AskName",
          type: "input",
          message:chalk.bgBlue("\nWhat is your name :")
        });

let Stu = (Name.AskName);
let prnStudent = new Student(Stu,);
prnStudent.PrintWStud();