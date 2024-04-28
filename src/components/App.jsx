/* eslint-disable react/jsx-key */
// export default function App() {
//   const titleText = 'React is amazing!';
//   const linkHref = 'goit.global';

//   return (
//     <div>
//       <h1>Page title {titleText}</h1>
//       <a href={linkHref}>GoIT</a>
//       <p>
//         Lorem ipsum dolor sit amet {2 + 2 + 2} consectetur adipisicing elit.
//         Unde asperiores illo earum harum soluta quasi, ab incidunt. At, magnam
//         expedita!
//       </p>
//       <button>Click me</button>
//     </div>
//   );
// }
// jsx вираз можна додати в будь якому місці синтаксис - {}

// =================================================
// import OfficerProfile from './OfficerProfile';

// export default function App() {
//   return (
//     <>
//       <h1>Available officers</h1>
//       <OfficerProfile name="Jacob Merser" spec="pilot" />
//       <OfficerProfile />
//       <OfficerProfile />
//     </>
//   );
// }
// ===========================================
// import OfficerProfile from './OfficerProfile';
// export default function App() {
//   const firstOfficer = {
//     id: 1,
//     name: 'Jacob Mercer',
//     rank: 'Commander',
//     age: 42,
//     yearsOfService: 10,
//     specialization: 'Fighter Pilot',
//     awards: ['Starfleet Medal of Honor', 'Distinguished Service Cross'],
//     skills: ['Combat Maneuvers', 'Navigation', 'Strategic Planning'],
//     status: 'Active',
//     missionHistory: [
//       'Operation Red Comet - Battle of Orion Nebula',
//       'Operation Blackout - Stealth Reconnaissance',
//       'Operation Phoenix - Search and Rescue',
//     ],
//   };
//   const secondOfficer = {
//     id: 2,
//     name: 'Adrian Cross',
//     rank: 'Lieutenant',
//     age: 35,
//     yearsOfService: 7,
//     specialization: 'Reconnaissance',
//     awards: ['Silver Star', 'Meritorious Service Medal'],
//     skills: ['Stealth Operations', 'Surveillance', 'Data Analysis'],
//     status: 'Retired',
//     missionHistory: [
//       'Operation Deep Space - Exploration Mission',
//       'Operation Shadowfall - Covert Surveillance',
//       'Operation Stardust - Intelligence Gathering',
//     ],
//   };

//   return (
//     <>
//       <h1>Available officers</h1>
//       <OfficerProfile officer={firstOfficer} />
//       <OfficerProfile officer={secondOfficer} />
//     </>
//   );
// }
// ==========================================================
// import OfficerProfile from './OfficerProfile';
// export default function App() {
//   return (
//     <>
//       <h1>Available officers</h1>

//       {/* <ul>{[<li>1</li>, <li>2</li>, <li>3</li>]}</ul> */}
//       <ul>
//         {[1, 2, 3, 4, 5, 6].map(value => (
//           <li>{value}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
//
// =====================================================================
// import OfficerProfile from './OfficerProfile';
// import officers from '../officers.json';
// export default function App() {
//   return (
//     <>
//       <h1>Available officers</h1>

//       <ul>
//         {officers.map(data => (
//           <li key={data.id}>
//             <OfficerProfile officer={data} />
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
// officer=data=>props
// react - расист - key передаеться на верхній елемент який ми повертаємо з  map, якби не було б li, то на компонент
// <OfficerProfile officer={data} key={data.id}/>
// чому на верхній елемент - тому що це id дітей
// список це компонент - виносимо!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ======================================================

import OfficerList from './OfficerList';
import data from '../officers.json';

export default function App() {
  return (
    <>
      <h1>Available officers</h1>
      <OfficerList officers={data} />
    </>
  );
}
