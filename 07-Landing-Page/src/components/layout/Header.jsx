import Container from '../ui/Container';
import Button1 from '../ui/Button1';
import Button2 from '../ui/Button2';
import HeaderLogo from '../ui/HeaderLogo';


const Header = () => {
  return (
    <div className=' py-5'>
      <Container>
        <div className='flex items-center justify-between'>
          <div className="min-w-52">
            <HeaderLogo />
          </div>

          <nav className='flex gap-4'>
            <a href="#">Copilot</a>
            <a href="#">Docs</a>
            <a href="#">Pricing</a>
          </nav>
          <div className="flex gap-3">
            <Button1 />
            <Button2 />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header   
