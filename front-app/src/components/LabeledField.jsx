const LabeledField = ({ value, label, placeholder }) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">{label}</label>
            <input value={value} type="text" placeholder={placeholder} />
        </div>
    );
};

export default LabeledField;