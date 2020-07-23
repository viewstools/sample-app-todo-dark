export function isListWithElements(value) {
  return Array.isArray(value) && value.length > 0;
}

export function hasCompleted(value) {
  return (
    value.items.map((id) => value?.byId[id]?.isCompleted).filter(Boolean)
      .length || 0
  );
}

export function hasTodos(value) {
  return value.items.length > 0;
}
