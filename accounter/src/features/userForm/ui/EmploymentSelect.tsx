import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import type { InputProps } from "@shared/ui/ui-kit/inputs/types";
import type { FC } from "react";

type Props = InputProps & {
	defaultValue?: string | undefined;
	value: string;
	onChange?: (value: string) => void;
};

const options = [{id: "Manager", value: "Менеджер"}, {id: "Director", value: "Директор"}]

const EmploymentSelect: FC<Props> = ({
	sx,
	value,
	defaultValue,
	register,
	subContent,
}) => {
	return (
		<FormControl sx={sx}>
			<InputLabel id="employment-label-id">Должность</InputLabel>
			<Select
				label="employment"
				labelId="employment-label-id"
				value={value}
				defaultValue={defaultValue}
				{...register}
			>
				{options.map((employment) => <MenuItem id={employment.id}>{employment.value}</MenuItem>)}
			</Select>
			{subContent}
		</FormControl>
	);
};

export default EmploymentSelect;
