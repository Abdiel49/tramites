import { parseNuevosTramites, parseTramitesActualizados } from "../../helpers/parseNotifications";
import { schedulePushNotification } from "./schedulePushNotification"

const newsTitle = 'Hey, hay nuevos tramites disponibles';
const updateTitle = 'Hey, se actualizaron estos tramites'

const nuevosLastUpdated = new Date('Mon Jan 01 2022 20:51:10 GMT-0400');
const actualizadosLastUpdated = new Date('Mon Jan 03 2022 20:51:10 GMT-0400');

const weAreNotUpdated = (date, nuevos) => {
  // return date !== nuevosLastUpdated;
  return true;
}

export const buildNotification = (
  Notifications,
  object,
  seconds = 2
) => {
  if( weAreNotUpdated(object.updateAt)){
    const makeTitle = object.descripcion === 'nuevos' 
      ? newsTitle : updateTitle;
    
    const makeBody = object.descripcion === 'nuevos' 
      ? parseNuevosTramites(object.contenido)
      : parseTramitesActualizados( object.contenido)
    
    const data = {
      title: makeTitle,
      body: makeBody,
      // data: { }
    }
    schedulePushNotification( Notifications, data,  seconds);
    
  }
}