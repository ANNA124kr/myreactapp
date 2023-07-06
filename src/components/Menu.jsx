import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
        <Link to={'/'} > <button>Home </button> </Link>
        <Link to={'/about'}> <button>About </button> </Link>
        <Link to={'/signIn'}> <button>Sign in </button> </Link>
    </div>
  )
}

