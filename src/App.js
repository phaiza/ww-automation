import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sheet from './Sheet';
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [sheetId, setSheetId] = useState('');
  const [formSubmitted, setformSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSheetId(data.spreadsheetId);
    setformSubmitted(true);
  };
  if (formSubmitted) return <Sheet sheetId={sheetId} />;
  return (
    <div className="App">
      <h1>Woolworths Automation</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Spreadsheet ID</label>
        <input {...register('spreadsheetId', { required: true })} />

        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
