/**
 * The Model. Model stores entitys and notifies
 * observers about changes.
 */
class EntityCollectionModel extends EventEmitter {
    constructor(entityCollection) {
      super();
      this._entityCollection = entityCollection || [];
      console.log(this)
      this._selectedIndex = -1;
    }
  
    getEntityCollection() {
      return this._entityCollection.slice();
    }
  
    addEntity(entity) {
      this._entityCollection.push(entity);
      this.emit('entityAdded', entity);
    }
  
    removeEntityAt(index) {
      const entity = this._entityCollection.splice(index, 1)[0];
      this.emit('entityRemoved', entity);
      if (index === this._selectedIndex) {
        this.selectedIndex = -1;
      }
    }
  
    get selectedIndex () {
      return this._selectedIndex;
    }
  
    set selectedIndex(index) {
      const previousIndex = this._selectedIndex;
      this._selectedIndex = index;
      this.emit('selectedIndexChanged', previousIndex);
    }
  }