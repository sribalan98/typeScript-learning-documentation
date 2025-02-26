/**
 * TypeScript Learning Documentation
 *
 *
 *   Topics Covered (2025, 02, 24):
 * - Basic TypeScript variable declarations
 * - Functions with default parameters
 * - Generics in TypeScript
 * - Type Aliases and Object Types
 * - Arrays of Objects
 *
 *   Topics Covered (2025, 02, 25):
 * - Type Inference in TypeScript
 * - Interfaces in TypeScript
 * - Union and Intersection Types
 * - Type Guards
 * - Enums in TypeScript
 *
 **/

// Basic TypeScript Variable Declarations
let fullname: string = "sribalan";
let age: number = 10;

/**
 * Function to create a new user
 * @param fullname - User's full name (string)
 * @param age - User's age (number, default: 23)
 */
function newUser(fullname: string, age: number = 23): void {
  console.log(fullname, age);
}

newUser(fullname);

/**
 * Generic function to check student attendance
 * @param todayPresent - Number of students present today
 * @param classMaxStudent - Maximum number of students allowed in class (default: 50)
 * @returns boolean - true if over limit, false otherwise
 */
function studentCheck<PresentNumber extends number>(
  todayPresent: PresentNumber,
  classMaxStudent = 50
): boolean {
  return todayPresent >= classMaxStudent;
}

let check: boolean = studentCheck(45);
console.log(check);

/**
 * Type alias for Mobile GPS data
 */
type MobileGps = {
  personName: string;
  ethernetOn: boolean;
  gpsPosition: {
    x: number;
    y: number;
    z: number;
  };
  chargePercentage?: number;
  simName: string[][]; // 2D array of strings
};

const Me: MobileGps = {
  personName: "Sribalan",
  ethernetOn: true,
  gpsPosition: { x: 10, y: 26, z: 5 },
  chargePercentage: 45,
  simName: [["airtel"], ["idea"]],
};

console.log(Me);

/**
 * Type alias for Player Data
 */
type PlayerData = {
  fullName: string;
  job: string;
  pos: {
    x: number;
    y: number;
    z: number;
  };
};

/**
 * Array of player data objects
 */
const FivemPlayerData: PlayerData[] = [
  { fullName: "player1", job: "unemp", pos: { x: 50, y: 20, z: 4 } },
  { fullName: "player2", job: "police", pos: { x: 89, y: 70, z: 44 } },
  { fullName: "player3", job: "doctor", pos: { x: 50, y: 25, z: 4 } },
];
FivemPlayerData.map((data) => console.log(data));

/**
 * Type Inference in TypeScript
 *
 *  normal like javascript but typescript can detect the types belong to the value of the variable
 *  - Basic Variable Type Inference
 *  - Array Type Inference
 *  - Object Type Inference
 *  - Function Parameter Type Inference
 *  - Type Inference with const
 */

let Inferencemessage = "this is a normal Inferencemessage from ts.index :"; // message : string
console.log("type is :string = string ", Inferencemessage);

let InferencerandomNums = 10;
console.log("type is :number = number :", InferencerandomNums); // randomNums : number

let InferenceArrayString = ["string", "this", "values"]; // InferenceArrayString : string[]
console.log("type is :string[] = ['stringArrays'] :", InferenceArrayString); // randomNums : number

let InferenceArrayNumbers = [5, 10, 15]; // InferenceArrayNumbers : number[]
console.log("type is :number[] = [number] :", InferenceArrayNumbers);

let InferenceObjectPerson = {
  fullName: "Sudalai",
  age: 31,
  isMarried: false,
};
console.log(
  "type is :{fullName : string , age : number , isMarried : boolean} = type Variable Name :",
  InferenceObjectPerson
);

function Inferencegreet(msg: string) {
  return msg; // Inferencegreet function return :string
}

let InferenceGreetMsg = Inferencegreet("hi greet you from Inferencegreet"); // InferenceGreetMsg calls Inferencegreet Function with string Message
console.log("return type is :string = function return :", InferenceGreetMsg);

const InferenceConst = false;
console.log(
  "InferenceConst :boolean holds the const value never change :",
  InferenceConst
);

/**
 * 1.Interfaces in TypeScript
 * - Interface with Methods (Basic)
 * - Interface with Optional Method Parameters
 * - Interface with Method Overloading
 * - Interface with Method Returning Void
 * - Interface with Methods and Call Signatures
 * - Interface with Methods Using Generic Types
 */

interface My1Interface {
  greet(message: string): string;
  calculateSum(numA: number, numB: number): number;
}

const My1InterfaceObject: My1Interface = {
  greet: (message) => message,
  calculateSum: (numberA, numberB) => numberA + numberB,
};

console.log(My1InterfaceObject.greet("Interface greet Message"));
console.log(My1InterfaceObject.calculateSum(5, 3));

interface My2Interface {
  greet(message?: string): string;
}

const My2InterfaceObject: My2Interface = {
  greet: (message = "no Message has been recevied") => message,
};

console.log(My2InterfaceObject.greet());
console.log(
  My2InterfaceObject.greet("i am here to send a message for My2InterfaceObject")
);

interface My3Interface {
  greet(name: string): string;
  greet(age: number): string;
}

const My3InterfaceObject: My3Interface = {
  greet: (input: string | number) => {
    if (typeof input === "string") {
      return `you typed a String Value : ${input}`;
    }
    return `you typed a Number Value : ${input}`;
  },
};

console.log(My3InterfaceObject.greet("hi"));
console.log(My3InterfaceObject.greet(10));

interface My4Interface {
  greet(message: string): void;
}

const My4InterfaceObject: My4Interface = {
  greet: (message: string) => {
    console.log(message);
  },
};

My4InterfaceObject.greet("no return on this My4InterfaceObject");

interface My5Interface {
  (a: number, b: number): number;
}

const My5InterfaceCallableFunction: My5Interface = (a: number, b: number) =>
  a + b;

console.log(My5InterfaceCallableFunction(10, 50));

interface My6Interface {
  <T extends My5Interface>(value: T): number;
}

const My6InterfaceObject: My6Interface = (value) => value(10, 5);

console.log(My6InterfaceObject(My5InterfaceCallableFunction));

/**
 * 1.Union and Intersection Types
 * - Union Type (Using |)
 * - Intersection Type (Using &)
 * - Union Type with Arrays
 * - Union Type with Literal Types
 * - Intersection Types with Optional Properties
 */

function printValue(value: string | number): void {
  console.log("the Printing Value is ", typeof value, " :", value);
}

printValue("Sudalai");
printValue(15);

interface Person {
  name: string;
  age: number;
}
interface CompanyWorker {
  position: string;
  salary: number;
}

type Employee = Person & CompanyWorker;

const employee: Employee = {
  name: "sudalai",
  age: 31,
  position: "teamleader",
  salary: 100000,
};

console.log(employee);

const UnionArray: (string | number)[] = [10, "string", 40, "sudalai"];

console.log("type of Array is Union type : (number | string) :", UnionArray);

function unionLiteralTypes(value: "Sriyogod" | "Banana" | "Sudalai"): string {
  return `UnionLiteralTypes : ${value}`;
}

//unionLiteralTypes("Groot") // it will give error on not assignable value to function
unionLiteralTypes("Sriyogod");

interface Address {
  street: string;
  city: string;
  zipcode: number;
}

interface Contact {
  phoneNumber: number;
  email?: string;
}

type FullInfo = Address & Contact;

const Person1: FullInfo = {
  // Person1  have email
  street: "bramin street",
  city: "chennai",
  zipcode: 600080,
  phoneNumber: 8450623578544,
  email: "bramin2022@gmail.com",
};
const Person2: FullInfo = {
  // Person2 does't have email
  street: "ramen street",
  city: "chennai",
  zipcode: 600040,
  phoneNumber: 8544845062357,
};

/**
 * Type Guards in TypeScript
 *
 * - typeof Type Guard
 */

function printLength(value: string | number): void {
  if (typeof value === "string") {
    console.log("the length of the value is : ", value.length);
  } else {
    console.log("printLength is not work on :", typeof value);
  }
}
printLength(10);
printLength("Sribalan");

/**
 * Enum in TypeScript
 * - Numeric Enums
 * - Manual Numeric Assignment
 */

enum Direction {
  up,
  down,
  right,
  left,
}

console.log(Direction.up, Direction.down, Direction.right, Direction.left);

enum StatusCode {
  OK = 200,
  NotFound = 404,
  Unauthorized = 401,
}

function SendingNetworkMsg(status: StatusCode): void {
  switch (status) {
    case StatusCode.OK:
      console.log("Request was successful.");
      break;
    case StatusCode.NotFound:
      console.log("Resource not found.");
      break;
    case StatusCode.Unauthorized:
      console.log("Server encountered an error.");
      break;
    default:
  }
}

SendingNetworkMsg(StatusCode.OK);
