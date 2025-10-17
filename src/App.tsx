import "./App.css";
import Hello from "./components/Hello/Hello";
import Goodbye from "./components/Goodbye/Goodbey";
import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
import ProductCard from "./components/ProductCard/ProductCard";
import Tool from "./components/Tool/Tool";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import WeightCalculator from "./components/WeightCalculator/WeightCalculator";
import { Counter } from "./components/Counter/Counter";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";



function App() {
   return (
    <>
      <p>Hello!</p>
      <Counter/> 
      <WeightCalculator/>
      <SpaceMissionForm/>
      <Hello />
      <Tool/>
      <ProfileCard avatar="/IMG_20250716_093451.jpg" name={"Olha"} description={"junior-programmer"}/>
      <Goodbye />
      <Goodbye />
      <PersonalGreeting name="Olha" />
      <PersonalGreeting name="Dmytro" />
      <ProductCard
        title="Opaeroo Paarungsspielzeug für Hunde"
        image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT6dCWJhg_NWxlD6zuYn_a0CDMkebqD3IWtGcPHu6ZOhKs5KmI9eb9c6W41D6RlFy1PzLVs8pTI-JJDLThOPMEAbQ99Pg6ve69oNvUt2q6acOtAv5sXHBjIKvCMBLNNfxjN5sNTGIm3NQ&usqp=CAc"
        price={86.99}
      />
      
    </>
  );
}

export default App;

// const user = {
//   name:"Bobby",
//   age: 18,
// };

// const name = user.name;
// const age = user.age;

//const {name, age} = user;
