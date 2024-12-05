"use strict";
const generarUuidAleatorio = () => {
    return crypto.randomUUID();
};

const formatearFechaEuropeo = (fecha)=>{
    const [year, month, day] = fecha.split("-");
    return `${day}/${month}/${year}`;
}

export{ generarUuidAleatorio, formatearFechaEuropeo};