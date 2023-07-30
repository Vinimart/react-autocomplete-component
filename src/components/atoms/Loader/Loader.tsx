import style from './loader.module.css';

export default function Loader({ isLoading }: { isLoading: boolean }) {
  return isLoading ? (
    <div className={style["loader"]}>
      <i className="fa-solid fa-spinner" />
    </div>
  ) : null;
}
