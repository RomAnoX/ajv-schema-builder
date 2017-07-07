class Keyword {
  constructor() {
    this.keywords = [];
  }

  static validate(keyword) {
    if (!(keyword instanceof Keyword)) {
      throw new Error(`The value "${keyword}" should be a Keyword`);
    }
  }

  addKeyword(keyword) {
    Keyword.validate(keyword);
    this.keywords.push(keyword);
  }

  keywordsContext(context = {}) {
    return this.keywords.reduce(
      (initial, keyword) => keyword.json(initial),
      context,
    );
  }

  json(context = {}) {
    return this.keywordsContext(context);
  }
}

module.exports = Keyword;
