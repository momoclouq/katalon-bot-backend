export const extractErrorMessage = (items: any) => {
  let output = '';

  items.forEach((item: any) => {
    if ('error' in item) output = item.error;
  });

  return output;
}