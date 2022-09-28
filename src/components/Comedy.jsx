import '../assets/style/index.css'

function Comedy() {
    const attributes = [
        {
            id: 1,  
            points: "⭐ 4.3",
            img: "../public/img/p1.jpg",
            condition: "Finalizado ✔️",
            title: "My Hero Academia"
        },
        {
            id: 2,
            points: "⭐ 3.5",
            img: "../public/img/p2.jpg",
            condition: "Finalizado ✔️",
            title: "Attack On Titan"
        },
        {
            id: 3,
            points: "⭐ 2.8",
            img: "../public/img/p3.jpg",
            condition: "Finalizado ✔️",
            title: "love live sunshine"
        },
        {
            id: 4,
            points: "⭐ 2.1",
            img: "../public/img/p4.jpg",
            condition: "Finalizado ✔️",
            title: "Kimetsu no Yaiba"
        },
        {   id: 5,
            points: "⭐ 4.3",
            img: "../public/img/p5.jpg",
            condition: "Finalizado ✔️",
            title: "Fate Grand Order"
        },
      ];
    return (
        <div className="Container">
            <div className="novedad">
                <div className="texto">
                    <h2>⚡ Comedia ⚡</h2>
                </div>
                <div className="contador">
                    <h4>🔥 "32,564" 🔥</h4>
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

export default Comedy;