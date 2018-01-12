import * as _ from 'lodash'

export const getKeySpacing = (unitpx: number) => unitpx / 12

export class BoardKeySet {
    public width: number = 1
    public height: number = 1
    public labels: string[]
    public xoffset?: number

    constructor(init?: Partial<BoardKeySet>) {
        Object.assign(this, init)
    }

    keys(): BoardKey[] {
        const keys = _.map(this.labels, label => new BoardKey({ width: this.width, height: this.height, label: label }))
        keys[0].xoffset = this.xoffset
        return keys
    }
}

export class BoardKey {
    public id: number
    public width: number = 1
    public height: number = 1
    public label: string
    public xoffset?: number

    constructor(init?: Partial<BoardKey>) {
        Object.assign(this, init)
    }

    public heightPx(unitpx: number): number {

        return this.height * unitpx + (this.height - 1) * getKeySpacing(unitpx) * 2
    }
    public widthPx(unitpx: number): number {
        return this.width * unitpx + (this.width - 1) * getKeySpacing(unitpx) * 2
    }
}

export class BoardRow {
    public keys: BoardKey[]
    constructor(
        keys: (BoardKey | BoardKeySet)[],
        public yoffset?: number) {
        this.keys = []
        _.each(keys, k => {
            if (k instanceof BoardKeySet) {
                _.each((<BoardKeySet>k).keys(), k => this.keys.push(k))
            } else {
                this.keys.push(k)
            }
        })
    }
}

export class BoardLayout {
    constructor(public rows: BoardRow[]) {
        let id = 1
        _.each(rows, r => {
            _.each(r.keys, k => k.id = id++)
        })
    }
}
