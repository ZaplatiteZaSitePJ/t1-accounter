import { FormControl, TextField } from "@mui/material";
import type { InputProps } from "../types";
import type { FC } from "react";

const Input: FC<InputProps> = ({
	register,
	label,
	fullWidth,
	sx,
	subContent,
	type = "text"
}) => {
	return (
		<FormControl>
			<TextField
				label={label}
				fullWidth={!!fullWidth}
				sx={sx}
				type={type}
				{...register}
			/>
			{subContent}
		</FormControl>
	);
};

export default Input;
