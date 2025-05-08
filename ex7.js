// Given a list of products, find pairs of products that share at least a given percentage of the words in their titles.
// Achieve the complexity that’s not worse than O(n²).

// For example, let’s take a look at the following sentences:

// 1. RGB Gaming Mouse with Programmable Buttons
// 2. Programmable RGB Wireless Gaming Mouse with Adjustable DPI

// Above, a total of five words are shared: RGB, Gaming, Mouse, with, Programmable.

// The shorter sentence has six words.

// To calculate the similarity, divide the number of shared words by the number of words in the shorter sentence:
// 5 / 6 = 0.833

// Make it case-insensitive.

function getSimilarProducts(products, similarity) {}

const products = [
  "Wireless Bluetooth Headphones",
  "Bluetooth Wireless Earbuds",
  "Noise Cancelling Bluetooth Headphones",
  "Gaming Mouse with RGB Lights",
  "RGB Gaming Mouse with Programmable Buttons",
  "Bluetooth Noise Cancelling Earbuds",
  "Wireless Noise Cancelling Headphones",
  "Ergonomic RGB Gaming Mouse with Extra Buttons",
  "Programmable RGB Wireless Gaming Mouse with Adjustable DPI",
  "High-Performance Wireless Bluetooth Noise Cancelling Headphones",
];

const similarProducts = getSimilarProducts(products, 0.8);

console.log(similarProducts);

function getSimilarProducts(products, similarityThreshold) {
  const result = [];

  const wordSets = products.map(
    (title) => new Set(title.toLowerCase().split(/\s+/))
  );

  for (let i = 0; i < products.length; i++) {
    for (let j = i + 1; j < products.length; j++) {
      const firstSet = wordSets[i];
      const secondSet = wordSets[j];

      let sharedCount = 0;
      for (const word of firstSet) {
        if (secondSet.has(word)) {
          sharedCount++;
        }
      }

      const minLength = Math.min(firstSet.size, secondSet.size);
      const similarity = sharedCount / minLength;

      if (similarity >= similarityThreshold) {
        result.push({
          productOne: products[i],
          productTwo: products[j],
          similarity: parseFloat(similarity.toFixed(2)),
        });
      }
    }
  }

  return result;
}

/*
[
  {
	productOne: 'Wireless Bluetooth Headphones',
	productTwo: 'High-Performance Wireless Bluetooth Noise Cancelling Headphones',
	similarity: 1.0
  },
  {
	productOne: 'Noise Cancelling Bluetooth Headphones',
	productTwo: 'High-Performance Wireless Bluetooth Noise Cancelling Headphones',
	similarity: 1.0
  },
  {
	productOne: 'Gaming Mouse with RGB Lights',
	productTwo: 'RGB Gaming Mouse with Programmable Buttons',
	similarity: 0.8
  },
  {
	productOne: 'Gaming Mouse with RGB Lights',
	productTwo: 'Ergonomic RGB Gaming Mouse with Extra Buttons',
	similarity: 0.8
  },
  {
	productOne: 'Gaming Mouse with RGB Lights',
	productTwo: 'Programmable RGB Wireless Gaming Mouse with Adjustable DPI',
	similarity: 0.8
  },
  {
	productOne: 'RGB Gaming Mouse with Programmable Buttons',
	productTwo: 'Ergonomic RGB Gaming Mouse with Extra Buttons',
	similarity: 0.83
  },
  {
	productOne: 'RGB Gaming Mouse with Programmable Buttons',
	productTwo: 'Programmable RGB Wireless Gaming Mouse with Adjustable DPI',
	similarity: 0.83
  },
  {
	productOne: 'Wireless Noise Cancelling Headphones',
	productTwo: 'High-Performance Wireless Bluetooth Noise Cancelling Headphones',
	similarity: 1.0
  }
]
*/
