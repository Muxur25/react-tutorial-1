// import logo from './logo.svg';
import './App.css';
// import Input from '../input/Input';
// import Bytton from '../button/buttons';
// // import { Salom } from '../salom/Salom'; exportni ozini ishlatganda shunday import qilamiza
// import Salom from '../salom/Salom';


// function salom(text){
//   return (
//     <div>
//       <h1>Salom {text}</h1>
//     </div>
//   )
// }





// let Salom = ()=>{
//   return  <h1>{salom("Muxriddin")}</h1>
  
// }

// let Input = ()=> {
//   let turi = 'text'
//   return <input type="{turi}" name="" id="" />
// }
// Componentlarni yaratishda Doimo katta harflarda yozish shart

// let Bytton = ()=>{
//   const login = 'login'
//   return <button type="submit">{login}</button>
// }



// function App() {
//   return (
//   <div>
//     <Salom/>
//     <Input/>
//     <Bytton/>
//   </div>
// )}
// Componentlarni Yopish esdan chiqmaslik zarur </>



const User = (props) => { //Disturbatsiya qilish tashqarida
  return (
    <div>
    <h1>Mening ismim {props.ism} Familiyam: {props.familiya}</h1>
    <a href={props.link}>Youtube kanalim</a></div>
  )
}



const UserInfo = ({login, parol, email}) => {  //tashqarida disturbatsiya qilish
  return (
    <div>
      <p>Mening loginim {login.name}</p>
      <p>Parolim {parol()}</p>
      <p>Emailim {email}</p>
    </div>
  )
}






function App() {
  return (
  <div>
    <User ism='Muxriddin' familiya="Umarov" link='youtube.com'/>
    <UserInfo login={{name: 'jinni'}} parol={()=> 'muxur5567'} email="muxurga1@gnail.com"/>
  </div>
)} //yuqoridagi calbackk funksiya bolgani uchun biz uni yuqorida chaqirdik
export default App;
