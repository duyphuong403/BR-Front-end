import { FormMessage, TextField } from '@react-md/form'

const renderField = ({ input, label, type, meta: { touched, error }, disable, hidden, customStyle }) => {
  return (
    (
      <div>
        <div>
          <TextField
            {...input}
            placeholder={label}
            type={type}
            id={`${label}-field-message`}
            key={label}
            label={label}
            disabled={disable}
            hidden={hidden}
            inputStyle={customStyle}
          />
          <FormMessage id={`${label}-field-message`} error>
            {touched &&
              ((error && <span>{error}</span>))}
          </FormMessage>
        </div>
      </div>
    )
  )
}

export default renderField