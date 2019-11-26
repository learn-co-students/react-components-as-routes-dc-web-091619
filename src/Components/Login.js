import React from 'react'

const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username"></input>
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password"></input>
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  )
}

export default Login