export const updateObjectInArray = (items: Array<any>, itemId: string, objPropName: string, newObjProps: any) => {
  return items.map(i => i[objPropName] !== itemId ? i : {...i, ...newObjProps})
}