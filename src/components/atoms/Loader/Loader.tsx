import style from './loader.module.css';

export default function Loader({ isLoading }: { isLoading: boolean }) {
  return isLoading ? (
    <div className={style["loader"]} data-testid="loader">
      <i className="fa-solid fa-spinner fa-3x" />
    </div>
  ) : null;
}
