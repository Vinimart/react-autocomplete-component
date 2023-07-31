import { Autocomplete } from '../../components/organisms';
import { AutocompleteProvider } from '../../contexts/AutocompleteContext';
import style from './home.module.css';

function Home() {
  return (
    <main className={style["home"]}>
      <h1 className={style["header"]}>Find your favorite movie!</h1>

      <AutocompleteProvider>
        <Autocomplete />
      </AutocompleteProvider>

      <div className={style["footer"]} />
    </main>
  );
}

export default Home;
