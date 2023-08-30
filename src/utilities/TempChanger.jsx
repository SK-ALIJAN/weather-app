export function ToCalsious(kelvinTemp) {
  let Celsius = kelvinTemp - 273.15;
  return (
    <span>
      {`${Math.ceil(Celsius)}`} <sup>°</sup>C
    </span>
  );
}

export function ToFarenhide(kelvinTemp) {
  let Farenhide = ((kelvinTemp - 273.15) * 9) / 5 + 32;
  return (
    <span>
      {`${Math.ceil(Farenhide)}`} <sup>°</sup>F
    </span>
  );
}

export function ToKelvin(kelvinTemp) {
  return <span>{kelvinTemp} K</span>;
}
