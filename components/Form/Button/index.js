import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const BootstrapButton = styled(Button)({
    '&':{
        backgroundColor: '#E8253E !important',
        margin: '32px 0px'
    },
    boxShadow: 'none',
    color: 'white',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid #E8253E',
    lineHeight: 1.5,
    backgroundColor: '#E8253E',
    borderColor: '#E8253E',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '& .MuiButton-root':{
        backgroundColor: '#E8253E' ,
    },
    '&:hover': {
      backgroundColor: '#E8253E',
      borderColor: '#E8253E',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#E8253E',
      borderColor: '#E8253E',
    },
    '&:focus': {
      backgroundColor:"#E8253E",
      color:"white"
    },
  });

const ButtonForm = ({children}) => {
  return ( 
    <BootstrapButton type='submit' variant="contained" fullWidth>{children}</BootstrapButton>
  )
}

export default ButtonForm;