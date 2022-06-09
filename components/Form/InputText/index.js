import React from 'react'
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { PropaneSharp } from '@mui/icons-material';
import styles from './inpuText.module.css';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#21211F',
    },
    '&:hover fieldset': {
      borderColor: '#21211F',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#EB445F',
    },
  },
});

const InputText = ({label,icon,value, onChange, error, onBlur,type}) => {
  return (
    <>
    <InputLabel htmlFor={label} sx={{paddingTop:"16px",paddingBottom:"5px"}}>{label}</InputLabel>
    <CssTextField
        size="small"
        onChange={onChange}
        onBlur={onBlur}
        placeholder={label}
        fullWidth
        value={value}
        type={type}
        InputProps={{
        startAdornment: (
            <InputAdornment position="start">
                {icon}
            </InputAdornment>
            ),
        }}
        >
    </CssTextField>
    {error && <p className={styles.error}>{error}</p>}
    </>
  )
}

export default InputText;