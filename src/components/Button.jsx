// import PropTypes from 'prop-types'
import classnames from "classnames";

function Button({
  children,
  className,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  ...rest
}) {
  //'children' is a automatically passed props which occurs
  // due to write a text between Custom component tags
  //<Button>Click me!</Button>

  const classes = classnames(
    "flex items-center px-3 py-1.5 shadow-lg",
    {
      "border-2 border-blue-600 bg-blue-500 text-black hover:bg-blue-600 active:bg-blue-800 shadow-blue-500/50":
        primary,
      "border-2 border-[#c8c8c8] px-2 py-1 text-[#c8c8c8] rounded-md hover:bg-[#32363a] duration-75 transition-all":
        secondary,
      "border-2 border-yellow-600 bg-yellow-500 text-black hover:bg-yellow-600 active:bg-yellow-800 shadow-yellow-500/50":
        warning,
      "border-2 border-red-600 bg-red-500 text-black hover:bg-red-600 active:bg-red-800 shadow-red-500/50":
        danger,
      "border-2 border-green-600 bg-[#00c46a] text-black hover:bg-green-600 active:bg-green-800 shadow-green-500/50":
        success,
      "rounded-full": rounded,
      "bg-white": outline,
      "hover:text-white text-blue-500": outline && primary,
      "hover:text-white text-black": outline && secondary,
      "hover:text-white text-red-500": outline && danger,
      "hover:text-white text-yellow-600": outline && warning,
      "hover:text-white text-[#00c46a]": outline && success,
    },
    className
  );

  // console.log(rest) //rest of the object collected by rest

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

//read prop-types doc
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, danger, warning, success }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!danger) +
      Number(!!warning) +
      Number(!!success);

    if (count > 1) {
      return new Error(
        "only one is allowed among primary,secondary,danger,warning and success"
      );
    }
  },
};

export default Button;
