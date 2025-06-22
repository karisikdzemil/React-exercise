export enum Countries {
    Brazil = "Brazil",
    France = "France",
    India = "India",
    UnitedStates = "United States",
}

interface Props {
    name:string;
    age: number;
    isMarried: boolean;
    country: Countries;
}

export const User = (props: Props) => {
 

  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>This person {props.isMarried ? "is married" : "is single"}</p>
      <p>The Country is {props.country}</p>
    </div>
  );
};
