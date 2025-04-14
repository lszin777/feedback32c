import iconStar from "./assets/icon-star.svg"

export function App() {
  return(
    <div className="h-svh bg-very-dark-blue text-white flex justify-center items-center px-6">
      <div className="bg-radial-gradient max-w-103 px-6 pt-6 pb-8 rounded-2xl font-overpass">
        <div className="bg-dark-blue p-4 w-fit rounded-full mb-4">
          <img src={iconStar} alt="icone da estrela" />
        </div>
        <h1 className="font-bold text-2xl mb-2.5">Como foi o atendimento?</h1>
        <p className="text-light-grey text-sm leading-1 mb-6">Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>
      
        <div className="flex justify-between mb-6">
          <input type="button" value={1} className="bg-dark-blue w-10.5 h-10 rounded-full text-sm text-medium-grey font-bold"/>
          <input type="button" value={2} className="bg-dark-blue w-10.5 h-10 rounded-full text-sm text-medium-grey font-bold"/>
          <input type="button" value={3} className="bg-dark-blue w-10.5 h-10 rounded-full text-sm text-medium-grey font-bold"/>
          <input type="button" value={4} className="bg-dark-blue w-10.5 h-10 rounded-full text-sm text-medium-grey font-bold"/>
          <input type="button" value={5} className="bg-dark-blue w-10.5 h-10 rounded-full text-sm text-medium-grey font-bold"/>
        </div>
        <button className="bg-orange">Prosseguir</button>
      </div>
    </div>
  )
}