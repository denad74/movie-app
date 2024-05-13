import './styles.css';

function Spinner(): JSX.Element {
  return (
    <div className='spinnerContainer' data-testid='spinner'>
      <div className='spinner'></div>
    </div>
  );
}

export default Spinner;
