import type { iCharNotTransform } from '../interfaces/interfaces';

function setDescription(description: string) {
  if (description.length) return description;
  return 'Description not found';
}

export default function _transformCharacters(data: iCharNotTransform) {
  const { id, description, name, thumbnail } = data;
  return {
    id,
    description: setDescription(description),
    name,
    thumbnail: `${thumbnail.path}.${thumbnail.extension}`
  };
}
