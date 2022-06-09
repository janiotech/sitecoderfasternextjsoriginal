import React from 'react'

const types = {
    email:{
        regex: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        message: 'Preencha um email válido exemplo: teste@gmail.com',
    },
    telefone:{
        regex: /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/,
        message: 'Preencha um telefone válido exemplo: (DDD) 9 0000-0000',
    },
    password:{
      regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: 'Mínimo de oito caracteres, pelo menos uma letra e um número',
  }
}

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function onChange({target}){
    if(error) validate(target.value);
    setValue(target.value)
  }

  function validate(value){
    if(type === false) return true;
    if(value.length === 0){
        setError("Preencha um valor.")
        return false;
    }else if(types[type] && !types[type].regex.test(value)){
        setError(types[type].message)
        return false;
    }else{
        setError(null);
        return true;
    }
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: ()=> validate(value),
    onBlur: ()=> validate(value),
  }
}

export default useForm