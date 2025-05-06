import iconStar from "./assets/icon-star.svg";
import illustrationThankYou from "./assets/illustration-thank-you.svg"
import { useState } from "react";

export function App() {
  const [submited, setSubmited] = useState(false);
  const [rateNote, setRateNote] = useState(0); // Correção feita aqui

  function handleSubmit() {
    if (rateNote !== 0) {
      setSubmited(true);
      return;
    }

    alert("Por favor, escolha um botão de classificação!");
  }

  function handleChangeRateNote(value) {
    setRateNote(value);
  }

  return (
      submited === false ? (
        <div className="bg-radial-gradient max-w-103 px-6 pt-6 pb-8 rounded-2xl font-overpass">
          <div className="bg-dark-blue p-4 w-fit rounded-full mb-4">
            <img src={iconStar} alt="icone da estrela" />
          </div>
          <h1 className="font-bold text-2xl mb-2.5">Como foi o atendimento?</h1>
          <p className="text-light-grey text-sm leading-1 mb-6">
            Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito
            seu feedback para podermos melhorar nosso atendimento!
          </p>

          <div className="flex justify-between mb-6">
            <input
              type="button"
              value={1}
              className="bg-dark-blue w-10.5 h-10 rounded-full text-sm text-medium-grey font-bold focus:bg-medium-grey focus:text-white hover:bg-orange hover:text-white cursor-pointer sm:w-13 sm:h-13 transition duration-400"
              onClick={() => handleChangeRateNote(1)}
            />
            
            <input
              type="button"
              value={2}
              className="bg-dark-blue w-10.5 h-10 rounded-full text-sm text-medium-grey font-bold focus:bg-medium-grey focus:text-white hover:bg-orange hover:text-white cursor-pointer sm:w-13 sm:h-13 transition duration-400"
              onClick={() => handleChangeRateNote(2)}
            />
            
            <input
              type="button"
              value={3}
              className="bg-dark-blue w-10.5 h-10 rounded-full text-sm text-medium-grey font-bold focus:bg-medium-grey focus:text-white hover:bg-orange hover:text-white cursor-pointer sm:w-13 sm:h-13 transition duration-400"
              onClick={() => handleChangeRateNote(3)}
            />
            
            <input
              type="button"
              value={4}
              className="bg-dark-blue w-10.5 h-10 rounded-full text-sm text-medium-grey font-bold focus:bg-medium-grey focus:text-white hover:bg-orange hover:text-white cursor-pointer sm:w-13 sm:h-13 transition duration-400"
              onClick={() => handleChangeRateNote(4)}
            />
            
            <input
              type="button"
              value={5}
              className="bg-dark-blue w-10.5 h-10 rounded-full text-sm text-medium-grey font-bold focus:bg-medium-grey focus:text-white hover:bg-orange hover:text-white cursor-pointer sm:w-13 sm:h-13 transition duration-400"
              onClick={() => handleChangeRateNote(5)}
            />
            
          </div>
          <button
            className="bg-orange w-full py-3 rounded-3xl uppercase font-bold tracking-1 hover:bg-white hover:text-orange cursor-pointer  transition duration-400"
            onClick={handleSubmit} 
          >
            Prosseguir
          </button>
        </div>
      ) : (
        <div className="bg-radial-gradient max-w-103 px-6 pt-6 pb-8 rounded-2xl font-overpass text-center">
          <img  className ="mx-auto" mb-6 src={illustrationThankYou} alt="illustration thank you" />

          <p className="mb-6 text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl">Voçê selecionou {rateNote} de 5!</p>

          <h1 className="font-bold text-2xl mb-2.5">Muito Obrigado!</h1>
          <p className="text-light-grey text-sm leading-1 hover:bg">
          Agradecemos por dedicar seu tempo para avaliar. Se precisar de mais suporte, não hesite em entrar em contato!
          </p>

        </div>
      )
  );
}
