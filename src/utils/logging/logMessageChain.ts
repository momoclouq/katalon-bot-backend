export const logMessageChain = () => {
  let output = '';

  return {
    chain: (type: string, message: string) => { 
      output += `${type}:${message} - `;
    },
    result: () => {
      if (output.length >= 1) return output.trim().slice(output.length-1);
      return '';
    }
  }
}