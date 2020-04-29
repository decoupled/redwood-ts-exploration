import MyComp from "src/components/MyComp"
import MyComp2 from "src/components/MyComp2"
import logo from "./redwoodjs_logo.png"
import { Link, routes } from "@redwoodjs/router"

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to my Website</h1>
      <img src={logo} />
      <MyComp />
      <MyComp2 />
      <Link to={routes.about()} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>
  )
}

export default HomePage
