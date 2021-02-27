import style from '../styles/components/MyFooter.module.css';

export function MyFooter() {
  return (
    <div className={style.containerMyFooter}>
      <footer>
        Criado com ❤
        <a href="https://github.com/antonionarcilio" target="_blank" rel="noreferrer">
          Antonio Narcilio
        </a>
          &ensp;ft.&ensp;
        <a href="https://rocketseat.com.br" target="_blank" rel="noreferrer">
          Rocketseat 🚀
        </a>
      </footer>
    </div>
  );
}
