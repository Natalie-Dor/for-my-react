import OfficerProfile from './OfficerProfile';
export default function OfficerList({ officers }) {
  return (
    <>
      <ul>
        {officers.map(data => (
          <li key={data.id}>
            <OfficerProfile officer={data} />
          </li>
        ))}
      </ul>
    </>
  );
}
// officer=data=>props
// react - расист - key передаеться на верхній елемент який ми повертаємо з  map, якби не було б li, то на компонент
// <OfficerProfile officer={data} key={data.id}/>
// чому на верхній елемент - тому що це id дітей
