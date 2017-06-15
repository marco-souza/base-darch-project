export default class Storage {
    constructor() {
        let storageTypes = [
            "localStorage",
            "sessionStorage"
        ];

        for(let storageType of storageTypes) {
            if(window[storageType]) {
                this.storageType = storageType;
                this.storage = window[storageType];
                break;
            }
        }

        // Fallback to in memory storage.
        if(!this.storage) {
            this.storageType = "memory";
            this.storage = {};
        }
    }

    set(key, value) {
        return new Promise((resolve) => {
            switch(this.storageType) {
                case "localStorage":
                case "sessionStorage":
                    return resolve(this.storage.setItem(key, value));
                default:
                    this.storage[key] = value;
                    resolve(value);
            }
        });
    }

    get(key) {
        return new Promise((resolve) => {
            switch(this.storageType) {
                case "localStorage":
                case "sessionStorage":
                    return resolve(this.storage.getItem(key));
                default:
                    resolve(this.storage[key]);
            }
        });
    }

    remove(key) {
        return new Promise((resolve) => {
            switch(this.storageType) {
                case "localStorage":
                case "sessionStorage":
                    return resolve(this.storage.removeItem(key));
                default:
            }
        });
    }

    clear() {
        return new Promise((resolve) => {
            switch(this.storageType) {
                case "localStorage":
                case "sessionStorage":
                    return resolve(this.storage.clear());
                default:
                    this.storage = {};
                    resolve();
            }
        });
    }
}
