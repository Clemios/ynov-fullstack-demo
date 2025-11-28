import Button from "./Button.jsx";

export default {
  argTypes: {
    label: {
      control: { type: "text" },
      defaultValue: "Click Me",
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    small: {
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
};

export const AllButtons = ({ label, small, disabled }) => (
  <div className="flex flex-row gap-2">
    <Button small={small} disabled={disabled}>Default Button</Button>
   <Button primary small={small} disabled={disabled}>Primary Button</Button>
   </div>
);
export const DefaultButton = ({ label, disabled }) => (
    <Button disabled={disabled}>{label}</Button>
  );

export const PrimaryButton = ({ label, disabled }) => (
    <Button primary disabled={disabled}>{label}</Button>
  );