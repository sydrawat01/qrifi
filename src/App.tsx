import classes from './App.module.css';
import ReactLogo from './assets/react-logo.svg';
import TSLogo from './assets/ts-logo.svg';
import ReduxLogo from './assets/redux-logo.svg';

const App = () => {
  return (
    <div className={classes.App}>
      <header className={classes['App-header']}>
        <h1>{process.env.APP_TITLE}</h1>
        <div className={classes.Features}>
          <a href={process.env.APP_REACT} target="_blank">
            <img
              src={ReactLogo}
              className={classes['React-logo']}
              alt="react"
            />
          </a>
          <a href={process.env.APP_TS} target="_blank">
            <img
              src={TSLogo}
              className={classes['Tools-logo']}
              alt="typescript"
            />
          </a>
          <a href={process.env.APP_REDUX} target="_blank">
            <img
              src={ReduxLogo}
              className={classes['Tools-logo']}
              alt="redux"
            />
          </a>
        </div>
      </header>
    </div>
  );
};

export default App;
