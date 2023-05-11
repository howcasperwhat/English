export interface Phonetic {
  uk: String,
  us: String
}

export interface WordProps {
  word: String,
  phonetic: Phonetic,
  source: String,
  ch: Map<String, Array<String>>
  sentence: Map<String, String>
}

export interface ArticleProps {
  article: String,
  words: Array<WordProps>
}