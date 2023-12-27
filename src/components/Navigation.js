import {Link} from 'react-router-dom';

const Navigation = () => {
  const cartstyle = {
    background: "blue",
    display:'flex',
    padding : '6px 12px',
    borderRadius: '50px'
  } 
  return (
    <>
        <nav className ="container mx-auto flex items-center justify-between py-4">
               
               <Link to ="/" className='flex'>
                  <img style ={{height: 45}} src ="/images/pizza_logo.webp" alt ="logo" />
                  <p className='font-bold py-2'>pizza</p>
               </Link>
               
             <ul className = "flex items-center">
                 <li><Link to ="/">Home</Link></li>
                 <li className = "ml-6"><Link to ="/products">Product</Link></li>
                 <li className = "ml-6">
                  <Link to ="/cart">
                    <div style = {cartstyle}>
                      <span>10</span>
                      <img className="ml-2" style = {{ height: 45}} src ="/images/cart_logo.webp" alt ="cartlogo"/>
                    </div>
                  </Link>
                 </li> 
             </ul>
        </nav>
    </>
  )
}

export default Navigation;
