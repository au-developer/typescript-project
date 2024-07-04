function Lesson06() {
  // ----------------------------------------------------------String
  let userFullName: string = "John Johnson";
  // userFullName = 100; - error!
  userFullName = "Bibi King";
  let hello = `100 ${userFullName}`; // автоматически присвоит тип значения, зависимо от 1 присвоеного значения
  //hello = 100;- error!
  console.log(hello);

  //------------------------------------------------------- Number
  let number1: number = 100;
  // number1 = "200"; error!
  number1 = 35.784;
  let number2: number = 100 / 0;
  // console.log(number2); type Number value -> Infinity, notTYPE!!!!!!

  //---------------------------------------------------------Boolean
  let isAdmin: boolean = true;
  isAdmin = false;



  //--------------------------------------------------------Array
  const animals: string[] = ["Tiger", "Lion", "Dog"];
  animals.push("Cat");
  console.log(animals);
  //animals.push(100); error!
  const sum: number[] = [10, 20, 30];

  // --------------------------------------------------------Tupel
  // строго задаем тип, кол-во, порядок для значений массива
  const userArray: [string, string, number, number, string] = [
    "name",
    "John",
    178,
    34,
    "Koln",
  ];
  // const userArray:2 [string, string,number,number,string] = [1,2,3,4,5]; - error!

  // ---------------------------------------------------------Functions
  // типизация функций по : возвращает что то или нет по .............return!
  
  //В TypeScript (и JavaScript) void используется в нескольких контекстах, но чаще всего применяется для указания
  // типа возвращаемого значения функции. Когда функция объявляется с типом возвращаемого значения void,
  // это означает, что функция не возвращает никакого значения.
  
  // фун-я которая что то выполняет, но не возвращает ничего 1ТИП, void говорит что функция ничего не возвращает
  const sayHi = (personName: string, age: number): void => { // syntax 1 type
    console.log(`Hello brother, ${personName} is ${age}`);
  };
  sayHi("John", 100);
  // sayHi(100); error!

  const makeAlert: () => void = () => {  // syntax  2 type
    alert("Alllllleeert!");
  };
  // makeAlert();

  // фун-я которая что то возвращает 2ТИП, в данном случае вернет number
  const add = (a: number, b: number): number => {
    return a + b;
  };
  add(1, 2);
  console.log(add(1, 2));

  
// -----------------------------------------------------------Object-----------------------------------------------------------------------------
// для типизация обьекта используем слово interface,потом название с Большой буквы и типы для значений
// extends используем если нужно подключить к интерфейу еще интерфейсы 

  interface Admin{
    isAdnin: boolean;
  }
  
  interface Owner{
    isOwner?: boolean;
  }

  interface User extends Admin, Owner {
    firstName:string;
    lastName:string;
    age: number;
    job: string;
    // isAdnin: boolean;
    // isOwner: boolean;
  }
// интерфейсы могут добавлять свойства  
  interface User {
    money: number;
  }

  const user1: User = {
    firstName: "John",
      lastName: "Johnson",
      age: 30,
      job: "QA",
      isAdnin: true,
      isOwner:false,
      money:200
  }
 //  isOwner?:boolean; - прописывание в интерфейсе, аргументе функции ? перед :  -  делает прописывание свойства не обязательным
  const user2: User = {
    firstName: "John",
      lastName: "Johnson",
      age: 30,
      job: "QA",
      isAdnin: true,
      // isOwner:false,
      money:200
  }

  // ---------------------------------------------------undefined
  let isuserData: undefined = undefined;

  // ------------------------------------------------------null
  let emptyVar: null = null;


  // ------------------------------------------------------any
// если не понятно какой тип данных придет - воспринимает любой тип даных
  let someVariable: any = "Some string";
  someVariable = 1000;
  someVariable = true;
  someVariable = "NAME";
  someVariable = null;

 // ------------------------------------------------------type
  // позволяет создавать свой тип данных , | знак или или 
  type UserDataFromServer = User | undefined | null;
  let userDataFromServer: UserDataFromServer = user1;
  userDataFromServer= undefined;
  userDataFromServer= null;
  //userDataFromServer= 120; - error!

// Типизация обьектов with type
//так же как в interface
// type не делает extends!!! Animal не может наследовать GlobalAnimalProps
// нельзя дописать type  и дополнить 


type GlobalAnimalProps = {
  isAnimal: boolean;
};

type Animal  = {
  type: string;
  age: number;
  color: string;
  isWild: boolean;
  speed?: string;
}

// для обьединения Animal  и GlobalAnimalProps нужно создать промежуточный тип
type GlobalAnimal1  = GlobalAnimalProps | Animal; // что то одно должно наследоваться
type GlobalAnimal2  = GlobalAnimalProps & Animal; // 2 интерфейса должны наследоваться

const animal1: Animal = {
  type: "Tiger",
  age: 12,
  color: "orange",
  isWild: true,
}

const animal3: GlobalAnimal1 = {
  type: "Tiger",
  age: 12,
  color: "orange",
  isWild: true,
}
const animal2: GlobalAnimal2 = {
  type: "Tiger",
  age: 12,
  color: "orange",
  isWild: true,
  isAnimal: true,
  speed:"74"
}



// интерфейс может создавать обьекты и тайп может создавать обьекты
// интерфейс может делать наследования и дописывать по ходу, тайп не может
// тайп может брать значения в условиях или или, интерфейс не может




  return <div className="page-wrapper">Lesson06</div>;
}
export default Lesson06;
