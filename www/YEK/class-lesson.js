class class {
  constructor(id) {
    this.id = id;
  }
  getName(){
    return CLASS[this.id].name;
  }
  getLessons(){
    return CLASS[this.id].lessons;
  }
  getLesson(id_){
    return CLASS[this.id].lessons[id_];
  }
}
