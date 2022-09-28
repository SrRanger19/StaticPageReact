import '../assets/style/index.css'

function Action() {
    const attributes = [
        {
            id: 1,  
            points: "⭐ 4.1",
            img: "../public/img/p16.jpg",
            condition: "Finalizado ✔️",
            title: "Death Note"
        },
        {
            id: 2,
            points: "⭐ 3.2",
            img: "../public/img/p17.jpg",
            condition: "Finalizado ✔️",
            title: "Sailor Moon"
        },
        {
            id: 3,
            points: "⭐ 3.9",
            img: "../public/img/p18.jpg",
            condition: "Finalizado ✔️",
            title: "Bleach"
        },
        {
            id: 4,
            points: "⭐ 4.4",
            img: "../public/img/p19.jpg",
            condition: "Finalizado ✔️",
            title: "Yu-Gi-Oh"
        },
        {   id: 5,
            points: "⭐ 5",
            img: "../public/img/p20.jpg",
            condition: "Finalizado ✔️",
            title: "Dororo"
        },
      ];

    return (
        <div className='Container'>
            <div className="novedad">
                <div className="texto">
                    <h2>⚡ Action ⚡</h2>
                </div>
                <div className="contador">
                    <h4>🔥 "27,004" 🔥</h4>
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

export default Action;