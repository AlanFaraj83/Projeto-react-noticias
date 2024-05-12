import React from "react";
import ReactDOM from 'react-dom/client';
import News from "./components/News";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
    const newsData = [
        {
            imgUrl: "https://s2-g1.glbimg.com/me35XxuB9vQOG8vT0qPez_LWxo4=/0x520:5000x3333/1080x608/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/r/f/K9mocPSSSq2HBKu1RNPg/2024-05-11t215117z-1052290683-rc2io7a7ybp4-rtrmadp-3-brazil-rains.jpg",
            specTheme: "Impacto Economico",
            generalTheme: "Tragédia",
            headline: "Inmet alerta para 'grande perigo' no RS com acumulado de chuva;",
            relatedNews: ["Cemaden alerta para riscos de inundações e deslizamentos", "Região Norte do estado tem tornado; veja vídeo"],
            timePublisher: " 44 minutos"
        },

        {
            imgUrl: "https://s2-g1.glbimg.com/6y_KewOlCXU7mBtn459fEecKVPQ=/0x0:1920x1080/1080x608/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/M/Z/VuYGurTzqFcIck949PSQ/starlink-fake-1920-1980.jpg",
            specTheme: "Não caia em mentiras",
            generalTheme: "Fato ou Fake",
            headline: "É #FAKE que Starlink é a única internet que está funcionando no RS",
            relatedNews: ["É #FAKE que o Ibama tenha impedido moradores de abrir estrada", "Veja o que é #FATO ou #FAKE sobre as enchentes no RS"],
            timePublisher: " 1 hora"
        },

        {
            imgUrl: "https://s2-g1.glbimg.com/pTfOgmgfNW_SF0w2uRtZDc1SZ8Q=/0x0:1920x1080/1080x608/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/G/1/6yoXJcQ0Aey2pBWBMBEw/snapshot-440.png",
            specTheme: "Globo Repórter",
            generalTheme: "Globo Repórter",
            headline: "O que é ansiedade climática, que pode causar perturbações psicológicas",
            relatedNews: ["Conheça a cidade que foi inundada pela 3ª vez em menos de um ano"],
            timePublisher: " 5 minutos"
        },
    ];

    

    return (
        <div className="container">
            <News newsDataList={newsData}/>
        </div>
    )
}


root.render(<App/>)