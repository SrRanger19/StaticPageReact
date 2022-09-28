import '../assets/style/index.css'

function Romance() {

    const attributes = [
        {
            id: 1,  
            points: "⭐ 3",
            img: "../public/img/p6.jpg",
            condition: "Finalizado ✔️",
            title: "Black Clover"
        },
        {
            id: 2,
            points: "⭐ 2.7",
            img: "../public/img/p7.jpg",
            condition: "Finalizado ✔️",
            title: "I'm Quitting Heroing"
        },
        {
            id: 3,
            points: "⭐ 4.5",
            img: "../public/img/p8.jpg",
            condition: "Finalizado ✔️",
            title: "Tower of God"
        },
        {
            id: 4,
            points: "⭐ 5",
            img: "../public/img/p9.jpg",
            condition: "Finalizado ✔️",
            title: "Re:Zero"
        },
        {   id: 5,
            points: "⭐ 4.7",
            img: "../public/img/p10.jpg",
            condition: "Finalizado ✔️",
            title: "Naruto"
        },
      ];
    return (
        <div className="Container">
            <div className="novedad">
                <div className="texto">
                    <h2>⚡ Romance ⚡</h2>
                </div>
                <div className="contador">
                    <h4>🔥 "28,832" 🔥</h4>
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

export default Romance;