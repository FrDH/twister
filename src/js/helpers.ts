/** 
 * Get random value from array.
 * @param {array} arr The array to find a random value from.
 * @return A random value from the array.
 */
export const random = (arr: any[]) => {
    return arr[Math.floor((Math.random() * arr.length))];
}