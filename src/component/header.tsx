import Link from "next/link"

export default function Header() {
    return(
      
       <div className="header">
        <ul className="header-button">
          <div className="navbar-name">Noor-us-Sabah</div>
          <Link href={"/"}>
          <li>Home</li>
          </Link>
          <Link href= {"/project"}>
          <li>Projects</li>
          </Link>
          <Link href={"/skill"}>
          <li>Skills</li>
          </Link>
          <Link href={"/resume"}>
          <li>My Resume</li>
          </Link>
        </ul>
       </div> 
    )
}