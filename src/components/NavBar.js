import { Container, Navbar, Nav } from 'react-bootstrap'
import {Button} from 'react-bootstrap';


const NavBar = (() =>{
return (
       
<Navbar className='navlink' bg="black" variant="dark" fixed="top" >
<Container fluid="lg">
      
<img className='logo' src={"./img/logo.webp"}  alt="Логотип Eurotile" />
        
<Nav className="ml-auto">
<a href="https://yandex.ru/maps/org/eurotile/174447890707/?ll=39.824760%2C47.301779&z=16" className='home'>посёлок Янтарный, ул.Магистральная, 1</a>

<div title="Позвоните нам!"><a  className='btn1' href="tel:+79281870747">
+7(928)-187-07-47
</a>
</div>
                
</Nav>
</Container>
</Navbar>
    
    );
});

export default NavBar;