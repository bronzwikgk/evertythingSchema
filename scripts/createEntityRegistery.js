
class EntityModel {
    constructor() {
        this.objects = JSON.parse(localStorage.getItem('objects')) || new WeakSet();
    }
    addItem(entity) {
        if (this.hasItem(entity)) {
            throw new Error(
                `The entity can only contain one instance of item ${entity}`
            );
        }
        return this.objects.add(entity);
    }

    removeItem(item) {
        return this.objects.delete(entity);
    }

    hasItem(item) {
        return this.objects.has(entity);
    }
};