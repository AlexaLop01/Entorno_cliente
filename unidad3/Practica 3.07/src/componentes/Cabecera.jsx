import React from "react"

const Cabecera = (props) => {
  const {children} = props;
  return (
    <>
    <div>
      <div>{children}</div>

    </div>
    </>
  )
}

export default Cabecera;