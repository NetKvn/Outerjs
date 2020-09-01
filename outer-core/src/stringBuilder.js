export default class StringBuilder {
    constructor(sequence) {
        this.arraySequence = [];
        if (sequence instanceof Array)
            this.arraySequence = [...sequence];
        else if (sequence instanceof String)
            this.arraySequence.push(sequence);
        else
            this.arraySequence.push(sequence.toString());
    }
    append(str) {
        this.arraySequence.push(str);
        return this;
    }
    insert(index, str) {
        this.arraySequence.splice(index, 0, str);
        return this;
    }
    reverse() {
        return this.arraySequence = this.arraySequence.reverse();
        return this;
    }
    clear() {
        this.arraySequence.length = 0;
        return this;
    }
    clone() {
        return new StringBuilder(this.toString());
    }
    toString() {
        return this.arraySequence.join("");
    }
}