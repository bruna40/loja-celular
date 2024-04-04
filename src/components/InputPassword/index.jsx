import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { PasswordContainer } from './style'

export function InputPassword({
  value,
  onChange,
  label,
  htmlFor,
  id,
  placeholder,
}) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <PasswordContainer htmlFor={htmlFor}>
      {label}
      <div>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          id={id}
          required
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
        </button>
      </div>
    </PasswordContainer>
  )
}
