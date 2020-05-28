export default class Content {
  constructor(title, body, id) {
    this.title = title;
    this.body = body;
    this.id = id;
  }
  getContent = () => {
    return Content;
  };
}
