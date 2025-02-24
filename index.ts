/**
 * TypeScript Learning Documentation
 *
 *
 * Topics Covered:
 * - Basic TypeScript variable declarations
 * - Functions with default parameters
 * - Generics in TypeScript
 * - Type Aliases and Object Types
 * - Arrays of Objects
 *
 */

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
  simName: string[][];
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

console.log(FivemPlayerData);
