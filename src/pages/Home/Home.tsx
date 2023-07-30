import { Autocomplete } from '../../components/organisms';
import { AutocompleteProvider } from '../../contexts/AutocompleteContext';
import style from './home.module.css';

function Home() {
  return (
    <main className={style["home"]}>
      <AutocompleteProvider>
        <Autocomplete />
      </AutocompleteProvider>
    </main>
  );
}

export default Home;