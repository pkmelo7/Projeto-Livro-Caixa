// components/Spinner.tsx
import './Spinner.css';

type SpinnerProps = {
  readonly type?: 'rodando' | 'empoleia' | 'corredor';
  readonly size?: 'pequeno' | 'medio' | 'grande';
  readonly colorClass?: 'azul' | 'verde' | 'laranja';
  readonly blockScreen?: boolean;
};

export function Spinner({
  type = 'rodando',
  size = 'grande',
  colorClass = 'azul',
  blockScreen = false,
}: SpinnerProps) {
  const spinnerElement = (
    <div
      className={`spinner spinner-${type} spinner-${size} spinner-color-${colorClass}`}
      aria-label="Carregando..."
    />
  );

  if (blockScreen) {
    return (
      <div className="spinner-overlay">
        {spinnerElement}
      </div>
    );
  }

  return spinnerElement;
}

