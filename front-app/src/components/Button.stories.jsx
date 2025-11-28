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
  },
};

export const ButtonStory = ({ label, disabled }) => (
  <Button disabled={disabled}>{label}</Button>
);
