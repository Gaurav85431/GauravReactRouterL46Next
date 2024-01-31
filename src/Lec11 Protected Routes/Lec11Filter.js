import { useSearchParams } from "react-router-dom";

function Filter() {

  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get('age'));
  console.log(searchParams.get('name'));


  // Isko print karne ke liye hm pehle isko kisi varibale me store karenge aur fir us variable ko print kar denge.

  const age = searchParams.get('age');
  const name = searchParams.get('name');


  return (<>

    <h1>Filter  using setParams</h1>

    <h3>Age is :-{age}</h3>
    <h3>Name is :- {name}</h3>


    <input type="text" onChange={(e) => setSearchParams({ name: e.target.value })} placeholder="Set Name in Query Parameter" />


    <button onClick={() => setSearchParams({ age: 40 })}>Set Age in Query Parameter</button>


  </>)


}
export default Filter;