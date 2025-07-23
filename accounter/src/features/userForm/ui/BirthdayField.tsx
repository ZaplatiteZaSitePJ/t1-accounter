import type { InputProps } from "@shared/ui/ui-kit/inputs/types";
import Input from "@shared/ui/ui-kit/inputs/ui/Input";
import type { FC } from "react";

const BirthdayField: FC<InputProps> = ({
    register,
    sx,
    subContent,
}) => {
    return (
        <Input
            label="birthDate"
            variant="outlined"
            register={register}
            fullWidth
            type="date"
            sx={sx}
            subContent={subContent}
        />
    );
};

export default BirthdayField;
