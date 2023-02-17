import styled from "styled-components";
import { Tiny } from "ui/texts";
import { BodyBold } from "ui/texts";

type textFieldProps = {
  label?: string;
  placeholder?: string;
  className?: any;
  field?: any;
};

export const Input = styled(BodyBold).attrs({
  as: "input",
})`
  padding: 5px 20px;
  width: 100%;
  height: 37px;
  border: 3px solid var(--negro);
  border-radius: var(--border-radius);
`;

export function TextField(props: textFieldProps) {
  return (
    <label>
      <Tiny>{props.label}</Tiny>
      <Input
        placeholder={props.placeholder}
        className={props.className}
        {...props.field}
      />
    </label>
  );
}
