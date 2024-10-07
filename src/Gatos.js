import React, { useState, useEffect } from 'react';

function Gatos() {
    const [gato, setGato] = useState(null);

    useEffect(() => {
        fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => setGato(data));
    }, []);

    return (
        <div>
            <h2>Dato sobre Gatos</h2>
            {gato ? (
                <p>{gato.fact}</p>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}

export default Gatos;
