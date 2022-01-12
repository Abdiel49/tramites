export const parseNuevosTramites = (contenido=[]) => {
  return `- ${contenido.join('\n- ')}`
}

export const parseTramitesActualizados = (contenido=[]) => {
  let resp = '';
  contenido.forEach(elem => {
    const data = `- ${elem.subcont} (${elem.nuevo})\n`
    resp += data;
  });
  return resp;
}