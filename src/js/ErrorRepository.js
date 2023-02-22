export default class ErrorRepository {
  constructor() {
    this.storage = new Map();
    this.storage.set(0, 'Unnown type of character');
    this.storage.set(1, 'A character with the same name already exists');
    this.storage.set(2, 'Name should be no more than ten characters');
  }

  translate(code) {
    if (this.storage.has(code)) {
      return this.storage.get(code);
    }
    return 'Unknown error';
  }
}
