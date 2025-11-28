import LabeledField from "./LabeledField.jsx";

export default {
  argTypes: {
    label: {
      control: { type: "text" },
      defaultValue: "My Label",
    },
    value: {
      control: { type: "text" },
      defaultValue: "My Value",
    },
    placeholder: {
      control: { type: "text" },
      defaultValue: "My Placeholder",
    },
  },
};

export const LabeledFieldStory = ({ label, value, placeholder }) => (
  <LabeledField label={label} value={value} placeholder={placeholder} />
);
