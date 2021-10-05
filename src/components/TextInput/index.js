export default function TextInput({ label, onChange, value, inputProps }) {
    return (
        <label>
            {label}
            <input
                {...inputProps}
                onChange={onChange}
                value={value}

            />
        </label>
    )

}