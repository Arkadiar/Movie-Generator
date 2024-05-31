export const extractKeywordsFromPlot = (plot) => {
  const commonWords = ["the", "is", "at", "which", "on", "and", "a"];
  const words = plot
    .split(" ")
    .map((word) => word.toLowerCase())
    .filter((word) => !commonWords.includes(word));
  const keywordCounts = {};

  words.forEach((word) => {
    keywordCounts[word] = (keywordCounts[word] || 0) + 1;
  });

  return Object.keys(keywordCounts)
    .sort((a, b) => keywordCounts[b] - keywordCounts[a])
    .slice(0, 5); // top 5 keywords
};
