
class entityRegistry {
    constructor() {
        this.items = new WeakSet();
    }

    addItem(entity) {
        if (this.hasItem(entity)) {
            throw new Error(
                `The entity can only contain one instance of item ${item}`
            );
        }
        return this.items.add(item);
    }

    removeItem(item) {
        return this.items.delete(item);
    }

    hasItem(item) {
        return this.items.has(item);
    }
};