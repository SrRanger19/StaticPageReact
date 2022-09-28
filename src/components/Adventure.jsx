import '../assets/style/index.css'

function Adventure() {
    const attributes = [
        {
            id: 1,  
            points: "⭐ 4.9",
            img: "../public/img/p11.jpg",
            condition: "Finalizado ✔️",
            title: "Dragon Ball Super"
        },
        {
            id: 2,
            points: "⭐ 5",
            img: "../public/img/p12.png",
            condition: "Finalizado ✔️",
            title: "FullMetal Alchemist"
        },
        {
            id: 3,
            points: "⭐ 4",
            img: "../public/img/p13.jpg",
            condition: "Finalizado ✔️",
            title: "Komi-San"
        },
        {
            id: 4,
            points: "⭐ 1.5",
            img: "../public/img/p14.jpg",
            condition: "Finalizado ✔️",
            title: "karakai jouzu no takagi san"
        },
        {   id: 5,
            points: "⭐ 0.7",
            img: "../public/img/p15.jpg",
            condition: "En Emisión ❌",
            title: "One Piece"
        },
      ];

    return (
        <div className='Container'>
            <div className="novedad">
                <div className="texto">
                    <h2>⚡ Adventure ⚡</h2>
                </div>
                <div className="contador">
                    <h4>🔥 "18,023" 🔥</h4>
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

export default Adventure;