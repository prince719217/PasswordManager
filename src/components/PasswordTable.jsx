import React from 'react'

const PasswordTable = () => {
    let passwords = localStorage.getItem('password')
    let passArray = JSON.parse(passwords) || []
      console.log(passArray)

      
}

export default PasswordTable