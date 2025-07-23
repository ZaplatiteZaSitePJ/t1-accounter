import { FormControl, TextField } from "@mui/material";
import type { InputProps } from "../types";
import type { FC } from "react";

const Input: FC<InputProps> = ({
	register,
	label,
	fullWidth,
	sx,
	subContent,
	type = "text",
}) => {
	return (
		<FormControl>
			<TextField
				label={label}
				fullWidth={!!fullWidth}
				type={type}
				{...register}
				sx={{
					"& .MuiOutlinedInput-input": {
						color: "var(--light-grey-color)",
					},
					"& .MuiInputLabel-root": {
						color: "var(--grey-color)",
					},
					"& .MuiInputLabel-root:hover": {
						color: "var(--light-grey-color)",
					},
					"& .MuiInputLabel-root.Mui-focused": {
						color: "var(--light-grey-color)",
						marginLeft: "3px",
					},
					"& .MuiOutlinedInput-notchedOutline": {
						border: "3px solid",
						borderColor: "var(--light-grey-color)",
					},
					"& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
						{
							borderColor: "var(--light-grey-color)",
						},
					"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
						{
							border: "3px solid",
							borderColor: "var(--light-grey-color)",
						},

					"& .MuiOutlinedInput-root": {
						backgroundColor: "transparent",
						borderRadius: "8px",
					},
					...sx,
				}}
			/>
			{subContent}
		</FormControl>
	);
};

export default Input;
