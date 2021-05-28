import classes from './App.module.css';
import ReactLogo from './assets/react-logo.svg';
import TSLogo from './assets/ts-logo.svg';
import ReduxLogo from './assets/redux-logo.svg';

const App = () => {
  return (
    <div className={classes.App}>
      <header className={classes['App-header']}>
        <h1>React Boilerplate</h1>
        <div className={classes.Features}>
          <img src={ReactLogo} className={classes['React-logo']} alt="react" />
          <img
            src={TSLogo}
            className={classes['Tools-logo']}
            alt="typescript"
          />
          <img src={ReduxLogo} className={classes['Tools-logo']} alt="redux" />
        </div>
      </header>
    </div>
  );
};

export default App;
