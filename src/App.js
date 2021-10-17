import './App.css';
import "tailwindcss/tailwind.css"
import {ReactComponent as GivingBack} from './assets/givingback/GivingBack.svg';
import {ReactComponent as EatingHealthy} from './assets/healthyeating/healthyeating.svg';
import {ReactComponent as JogginColour} from './assets/joggincolour/jogging.svg';
import {ReactComponent as OnlineShopping} from './assets/onlineshopping/onlineshopping.svg';
import {ReactComponent as SpecialDeals} from './assets/specialdeals/specialdeals.svg';
import {ReactComponent as TakeaBreak} from './assets/takeabreak/takeabreak.svg';
import {ReactComponent as Testimonial} from './assets/testimonial/testimonial.svg';
import {ReactComponent as WorkLifeBalance} from './assets/worklifebalance/worklifebalance.svg';
import {ReactComponent as Vision} from './assets/VisionColour/vision.svg'
import {ReactComponent as Success} from './assets/Success/success.svg';
import {ReactComponent as SettingsColour} from './assets/SettingsColour/settings.svg';



import { useState } from 'react';

const texto = 'Adriana Mainetti, mi mama'
const texto1 = 'Quiero dejar constancia, en el ciberespacio y por la eternidad de los tiempos, de la maravillosa madre que tengo'
const texto3 = 'No necesita causa para dar un presente, por eso es querida por extraños y conocidos'
const texto4 = 'Una profesora que pone su maximo empeño y amor en el trabajo'
const texto5 = 'Equilibrista profesional de problemas cotidianos'
const texto6 = 'Exploradora y estudiante eterna de la vida'
const texto7 = 'Chef cotidiana, Capaz de preparar una rica y sana comida sin importar los ingredientes'
const texto8 = 'Ningun dolor es impedimento, siempre hara un esfuerzo por mejorar'
const texto9 = 'Siempre tiene el remedio para hacerte sentir bien'
const texto10 = 'Gracias ma, sos la mejor :)'

const Card = ({cardIndex}) => {
  let selectedCard
  let selectedText 

  switch(cardIndex){
    case 0:
      selectedCard = <TakeaBreak />
      selectedText = texto
      break
    case 1:
      selectedCard = <GivingBack />
      selectedText = texto1
      break
    case 2:
      selectedCard = <JogginColour />
      selectedText = texto8
      break
    case 3:
      selectedCard = <SpecialDeals />
      selectedText = texto3
      break
    case 4:
      selectedCard = <Testimonial />
      selectedText = texto4
      break
    case 5:
      selectedCard = <EatingHealthy />
      selectedText = texto7
      break
    case 6:
      selectedCard = <Vision />
      selectedText = texto6
      break
    case 7:
      selectedCard = <SettingsColour />
      selectedText = texto9
    break
    case 8:
      selectedCard = <Success />
      selectedText = texto10
      break
    default:
      selectedCard = <GivingBack />
  }

  return (
    <div className='h-full w-full font-fontCard flex flex-col mx-auto gap-3'>
      <h1 className='font-card text-center text-2xl md:text-4xl lg:text-4xl text-indigo-500 p-2'>{selectedText}</h1>
      <div className='card flex justify-center align-middle'>
        {selectedCard}
      </div>
    </div>
  )
}

function App() {
  const [cardIndex, setCardIndex] = useState(0)

  const swapCard = () => {
    console.log('yup')
    setCardIndex((prevIndex) => {
      if(prevIndex === 9) {
        return 0 
      }
      return prevIndex + 1
    })
  }

  return (
    <div onClick={swapCard} className="App">
      <Card className='h' cardIndex={cardIndex}/>
    </div>
  );
}

export default App;
