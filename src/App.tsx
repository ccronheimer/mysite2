import './App.css'
import { FaArrowRight } from 'react-icons/fa'

interface ProjectProps {
  title: string
  description: string
  link: string
}

function Project({ title, description, link }: ProjectProps) {
  return (
    <div className='text-start relative group py-4'>
      <a href={link} className='flex items-center py-2'>
        <span className='font-semibold text-2xl'>{title}</span>
        <span className='transition-all duration-200 ml-3 transform translate-x-0 group-hover:translate-x-2'>
          <FaArrowRight className='text-blue-600 text-lg' />
        </span>
      </a>

    <p className='text-stone-600'>{description}</p>
  </div>
  )
}
function App() {
  return (
    <div className="max-w-2xl mx-auto">
      <Project title='Codemates' description='A free live collabrative code editor friends can share and edit code together.' link='https://github.com/ccronheimer/codemates' />
      <Project title='Canada Summer Game Chat Bot' description='A chat bot for the 2022 canada summer games.' link='https://github.com/ccronheimer/BrockChatbot' />
      <Project title='Coin Hawk' description='Cryptocurrency tracker project developed with react native.' link='https://github.com/ccronheimer/CoinHawkNative' />
      <Project title='Particle Cannon' description='A simulated physics environment for a particle cannon developed with OpenGL and C++' link='https://github.com/ccronheimer/ParticleCannon' />
      <Project title='Neural Network' description='Designed a feed-forward neural network in Java that uses backpropagation to detect parity bits in a set of 4 bit strings.' link='https://github.com/ccronheimer/NeuralNetwork' />
      <Project title='Unity iOS and Android Rating Request' description='Universal C# script to request a rating from your users on Android and iOS.' link='https://github.com/ccronheimer/UnityiOSAndroidRatingRequest' />
      <Project title='Unity iOS Leaderboard' description='Unity iOS leaderboard reusable asset.' link='https://github.com/ccronheimer/UnityiOSLeaderboard' />
      <Project title='Event planner app' description='Event planner app developed with Java and Android Studio.' link='https://github.com/ccronheimer/SimpleEventApp' />
      <Project title='Genetic Algorithm' description='Genetic algorithm in Java to sort shredded text to its original text.' link='https://github.com/ccronheimer/SentenceSolverGA' />
      <Project title='Coloring ASMR' description='A coloring simulation app currently live on the AppStore and Google PlayStore.' link='https://apps.apple.com/sr/app/coloring-asmr/id1522171988?platform=iphone' />
      <Project title='Bullet City' description='Shooter puzzle game developed for Galactic Thumb' link='https://apps.apple.com/us/app/bullet-city/id1460269119' />
      <Project title='Board Life' description='A physics balance board game.' link='https://apps.apple.com/sr/app/board-life/id1444221598?platform=iphone' />
      <Project title='MySiteV2' description='Second design of personal site.' link='https://github.com/ccronheimer/mysite2' />
      <Project title='MySiteV1' description='First design of personal site.' link='https://github.com/ccronheimer/mysite' />
      <Project title='Elementary Cellular Automata' description='Designed an elementary cellular automaton in OpenGL with C.' link='https://github.com/ccronheimer/ElementaryCellularAutomaton' />
      <Project title='Unity 3D Map Generator' description='C# script used to generate any 2d texture into 3D cubes.' link='https://github.com/ccronheimer/2Dto3DMapUnity' />
    </div>
  )
}

export default App
