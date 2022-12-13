import { ButtonStyle, ButtonType } from '../../models/button';
import css from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonType;
  className?: string;
  buttonStyle: ButtonStyle;
  link?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  className,
  buttonStyle,
  link,
  onClick,
}) => {
  const finalButtonStyleClassName =
    buttonStyle === 'default' || !buttonStyle ? 'btn' : `btn--${buttonStyle}`;
  const finalButtonClassName = `${finalButtonStyleClassName} ${className ? className : ''}`.trim();

  if (link) {
    return (
      <a className={finalButtonClassName} href={link}>
        {children}
      </a>
    );
  }

  return (
    <button className={finalButtonClassName} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
