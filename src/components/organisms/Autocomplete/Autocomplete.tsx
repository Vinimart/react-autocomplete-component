import { memo } from 'react';

import { Input } from '../../molecules';
import style from './autocomplete.module.css';

function Autocomplete() {
  return (
    <div className={style["autocomplete"]}>
      <div className={style["header"]}>
        <Input icon={<i className="fa-solid fa-magnifying-glass" />} />
      </div>

      <div className={style["content"]}></div>
    </div>
  );
}

export default memo(Autocomplete);
