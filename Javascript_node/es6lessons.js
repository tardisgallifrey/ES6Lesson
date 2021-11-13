import { Section1lessons } from "./lesson_modules/section1.js";
import { Section2Lessons } from "./lesson_modules/section2.js";
import { Section3Lessons } from './lesson_modules/section3.js';
import { Section4Lessons} from './lesson_modules/section4.js';
import { Section5Lessons } from './lesson_modules/section5.js';
import { Section6Lessons } from './lesson_modules/section6.js';

//For this type of structure to work,
// npm init must be run on the root of the project, and 
// "type": "module" added to package.json

Section1lessons();
Section2Lessons();
Section3Lessons();
Section4Lessons();
Section5Lessons();
Section6Lessons();