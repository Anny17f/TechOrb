/**
 * @param {number} number - The number to format
 * @returns {string} - Formatted number as a string with commas
 */
function formatThousand(number) {
  return number.toLocaleString();
}

// Example usage
console.log(formatThousand(1000000)); // Output: 1,000,000

module.exports = formatThousand;
