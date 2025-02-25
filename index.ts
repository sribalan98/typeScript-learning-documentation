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
