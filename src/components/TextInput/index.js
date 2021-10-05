<<<<<<< HEAD
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
=======
export default function TextInput({
  label, onChange, value, inputProps
}) {
  return (
    <div className="TextInput">
      <label> {label}
        <input {...inputProps}
          type="text"
          onChange={onChange}
          value={value}
        />
      </label>
    </div>
  )
}
>>>>>>> 092e15ab7fb33f9bc609c87ccfb2474db6c3ddad
