const config = {
  port: process.env.PORT || 5000,
  semanticSearchUrl: process.env.SEMANTIC_SEARCH_URL || 'localhost:9000/semanticSearch',
  recognitionUrl: process.env.RECOGNITION_URL || 'localhost:9000/recognition'
}

export default config;