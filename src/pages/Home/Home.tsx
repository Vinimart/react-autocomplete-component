import { Autocomplete } from '../../components/organisms';
import style from './home.module.css';

function Home() {
  return (
    <main className={style["home"]}>
      <Autocomplete />
    </main>
  );
}

export default Home;
