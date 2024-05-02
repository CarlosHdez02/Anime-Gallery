import NavBar from "./NavBar";
import classes from './Header.module.css'
const Header: React.FC = ()=>{
    return(
        <>
        <header className={classes.myHeader}>
            <NavBar/>
        </header>
        </>
    )
}
export default Header;