import { useState } from "react";

export default function WeightCalculator() {
  const [hight, setHight] = useState<string>("170");
  const [weight, setWeight] = useState<number>(0);
  const [gender, setGender] = useState<string>("female");

  function calculateIdealWeight() {
    const difference = gender === "female" ? 45.5:50;
    setWeight(Number(difference) +2.3*((Number(hight)/2.54 - 60)));
  }

  return (
    <div>
      <h2>Weight Calculator</h2>
       {/* controlled input */}
      <label htmlFor="hight-input">Hight</label>
      <input
        id="hight-input"
        type="text"
        value={hight}
        onChange={(e) => setHight(e.target.value)}
      />

      <select
        name="gender"
        id="gender-input"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <button type="button" onClick={calculateIdealWeight}>
        Calculate ideal weight
      </button>
      {weight ? <p>Your ideal weight is {weight}</p> : null}
    </div>
  );
}
