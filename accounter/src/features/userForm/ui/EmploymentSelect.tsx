import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import type { InputProps } from "@shared/ui/ui-kit/inputs/types";
import type { FC } from "react";

type Props = InputProps & {
	defaultValue?: string | undefined;
	value?: string;
	onChange?: (value: string) => void;
};

const options = [
	{ value: "Engineer", ru: "Инженер" },
	{ value: "Developer", ru: "Разработчик" },
	{ value: "Designer", ru: "Дизайнер" },
	{ value: "Analyst", ru: "Аналитик" },
	{ value: "Administrator", ru: "Администратор" },
	{ value: "Consultant", ru: "Консультант" },
	{ value: "Accountant", ru: "Бухгалтер" },
	{ value: "Marketer", ru: "Маркетолог" },
	{ value: "HR", ru: "HR-специалист" },
	{ value: "Support", ru: "Саппорт" }
];

const EmploymentSelect: FC<Props> = ({
	sx,
	value,
	defaultValue,
	register,
	subContent,
}) => {
	return (
		<FormControl sx={sx}>
			<InputLabel
				id="employment-label-id"
				sx={{
					color: "var(--light-grey-color)",
					"&.Mui-focused": {
						color: "var(--light-grey-color)",
					},
				}}
			>
				Должность
			</InputLabel>
			<Select
				label="employment"
				labelId="employment-label-id"
				value={value}
				defaultValue={defaultValue}
				{...register}
				sx={{
					width: "300px",
					backgroundColor: "transparent",
					color: "var(--light-grey-color)",
					"& .MuiOutlinedInput-notchedOutline": {
						border: "3px solid",
						borderRadius: "6px",
						borderColor: "var(--light-grey-color)",
					},
					"&:hover .MuiOutlinedInput-notchedOutline": {
						borderColor: "var(--light-grey-color)",
						transform: "scale(1.02)",
						transition: "transform 0.3s ease",
					},
					"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
						border: "3px solid",
						borderColor: "var(--light-grey-color)",
					},
				}}
			>
				{options.map((employment) => (
					<MenuItem value={employment.value}>
						{employment.ru}
					</MenuItem>
				))}
			</Select>
			{subContent}
		</FormControl>
	);
};

export default EmploymentSelect;
