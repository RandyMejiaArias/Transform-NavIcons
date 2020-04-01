class IndexForSiblings{
  static get(el){
    let children = el.parentNode.children;
    for(var i=0; i<children.length; i++){
      let child = children[i];
      if(child == el)
        return i;
    }
  }
}

class Toggler{
  constructor(selector){
    this.toggleByButton = this.toggleByButton.bind(this);
    this.content = document.querySelector(selector);
    this.itemsCount = this.content.querySelectorAll(".nav > * ").length;
    this.counter = 0;

    this.bindEvents();
  }

  bindEvents(){
    this.content.querySelectorAll(".nav a").forEach(item => {
      item.addEventListener("click", this.toggleByButton);
    });
  }

  toggleByButton(ev){
    let index = IndexForSiblings.get(ev.currentTarget);
    this.toggleTo(index);
  }

  toggleTo(index){
    this.content.querySelector(".nav a:nth-child("+(index+1)+")").classList.toggle("open");
  }
}

(function(){
  new Toggler(".content");
})();