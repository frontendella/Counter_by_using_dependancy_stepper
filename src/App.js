import { useState } from 'react';
import { NumericStepper } from '@anatoliygatt/numeric-stepper';
import './styles.css';

export function App() {
  const [, setValue] = useState(0);
  return (
    <div className="App">
      <NumericStepper
        size="lg"
        onChange={(value) => {
          setValue(value);
        }}
      />
    </div>
  );
}
