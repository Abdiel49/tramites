export const buscar = (textoBuscador, tramites) => {

  const quitarTildes = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  if (tramites && tramites.length > 0 && textoBuscador != '') {
    const textoLimpio = quitarTildes(textoBuscador.toLowerCase());

    const resulBusq = tramites.filter((tramite) => {
      let cumple = false
      const nombreTramite = quitarTildes(tramite.titulo.toLowerCase());
      const descTramite = quitarTildes(tramite.descripcion.toLowerCase());
      let nombUbicacion = null;
      let nombUbicacionReq = [];

      if (tramite.mapData) {
          nombUbicacion = quitarTildes(tramite.mapData.locationTitle.toLowerCase());
      }

      tramite.datos.forEach(dato => {
        dato.contenido.forEach(sub => {
            if (sub.mapData) {
              nombUbicacionReq.push(quitarTildes(sub.mapData.locationTitle.toLowerCase()));
            }
        });
      });


      if (nombreTramite.includes(textoLimpio)
          || descTramite.includes(textoLimpio)) {
              cumple = true;
      } else if (nombUbicacion){
          if (nombUbicacion.includes(textoLimpio)) {
          cumple = true;
          }
      }
      
      if (nombUbicacionReq.length > 0){
          nombUbicacionReq.forEach(ubicEnReq => {
          if (ubicEnReq.includes(textoLimpio)) {
              cumple = true;
          }
          });
      }

      return cumple;
    })

    return resulBusq;
  
  } else {
    return tramites;
  }
};