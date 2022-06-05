import classNames from "classnames";
import { Button } from "@mui/material";

// Import Own Components
import styles from "./TextIconButton.module.scss";

const TextIconButton = ({
    icon,
    label,
    variant   = "contained",
    className = "",
    ...rest
}) => (
    <Button
        type="button"
        variant={variant}
        className={classNames(styles.roundedButton, {
            [className]             : className,
            [styles.outlinedButton] : variant === "outlined",
        })}
        {...rest}
    >
        { icon }

        <span className="text">{label}</span>
    </Button>
);

export default TextIconButton;
