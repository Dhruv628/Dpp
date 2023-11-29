import connectToDB from './api/Db' 
import HomePage from "@/app/components/Home/page" 
import NavBar from './components/Navbar/page';
// import '../app/glocals.css' // Import your global styles
import 'react-typist/dist/Typist.css';
export default function Home() {
  connectToDB();
  return (
<div className='bg-white h-[100vh]'>
  <NavBar/>
  <HomePage/>
</div>
  )
}
