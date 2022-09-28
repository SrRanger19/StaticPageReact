import '../assets/style/index.css'

function Drama() {
    const attributes = [
        {
            id: 1,  
            points: "⭐ 4.7",
            img: "../public/img/p21.jpg",
            condition: "Finalizado ✔️",
            title: "Kobayashi-san Chi no Maid Dragon"
        },
        {
            id: 2,
            points: "⭐ 2.8",
            img: "../public/img/p22.jpg",
            condition: "En Emisión ❌",
            title: "Pokemon Journeys"
        },
        {
            id: 3,
            points: "⭐ 2.6",
            img: "../public/img/p23.jpg",
            condition: "Finalizado ✔️",
            title: "Nanatsu no Taizai"
        },
        {
            id: 4,
            points: "⭐ 3.9",
            img: "../public/img/p24.jpg",
            condition: "Finalizado ✔️",
            title: "Steins;Gate"
        },
        {   id: 5,
            points: "⭐ 1.8",
            img: "../public/img/p25.jpg",
            condition: "Finalizado ✔️",
            title: "One Punch Man"
        },
      ];

    return (
        <div className='Container'>
            <div className="novedad">
                <div className="texto">
                    <h2>⚡ Drama ⚡</h2>
                </div>
                <div className="contador">
                    <h4>🔥 "30,972" 🔥</h4>
                </div>
            </div>
            {attributes.map ((elemento, i) => {
                return(
                    <div key={i} className="col">
                        <div className="port">
                        <div className="image">
                            <div className="calificacion">
                                <h5>{elemento.points}</h5>
                            </div>
                            <div className="state">
                                <h5>{elemento.condition}</h5>
                            </div>
                            <img src={elemento.img} alt="" />
                        </div>
                        <div className="title">
                            <strong>{elemento.title}</strong>
                        </div>
                    </div>
                    </div>   
                )
                })}
        </div>
    );
}

export default Drama;