export function healthStatus(character) {
  return character.health >= 50 ? 'healthy' : 
    character.health < 15 ? 'critical' : 'wounded';
}

export function regroup(party) {
 return party.sort((a,b) => (b.health - a.health));
}


// Ваша функция:
import fetchData from './http';

export function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);

  // TODO: логика обработки
  if (response.status === 'ok') {
     return `Ваш текущий уровень: ${response.level}`;
  }

  return `Информация об уровне временно недоступна`;
}
