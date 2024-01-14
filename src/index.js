import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const privet = "Hello world"
// React da class className orqali qilinadi
let input = (
  <div>
    <h1 className='qalay'>Salom dunyo</h1> 
    <input type="checkbox" name="" id="" />
    <button>Jonat</button>
    <p>{privet}</p>
  </div>
)
// html teglar ichida kodlar chinggalak qavs ichida yoziladi
// cingalak qavslar (jx) ichiga obyrktlar funksiyalar qoya olmaymiz lkn massiv qoya olamiz

root.render(
<StrictMode>
<App/>
</StrictMode>
)


