export const btnStyle = {
  backgroundColor: 'none',
  outline: '1px solid orange',
  color: 'orange',
  fontSize: '20px',
  height: '56px',
  ':hover': {
    backgroundColor: 'orange',
    color: 'white',
  },
};

export const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
