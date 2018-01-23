import * as _ from 'lodash'

export const getKeySpacing = (unitpx: number) => unitpx / 12

export class BoardKeyData {
    public label: string
    public code: string

    constructor(label: string, code: string) {
        this.label = label
        this.code = code
    }
}

export class BoardKeySet {
    public width: number = 1
    public height: number = 1
    public data: BoardKeyData[]
    public xoffset?: number

    constructor(init?: Partial<BoardKeySet>) {
        Object.assign(this, init)
    }

    keys(): BoardKey[] {
        const keys = _.map(this.data, d => new BoardKey({ width: this.width, height: this.height, data: d }))
        keys[0].xoffset = this.xoffset
        return keys
    }
}

export class BoardKey {
    public data: BoardKeyData
    public width: number = 1
    public height: number = 1
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

    public findKey(code: string): BoardKey {
        for (const row of this.rows) {
            const key = _.find(row.keys, k => k.data.code === code)
            if (key) {
                return key
            }
        }
        return undefined
    }
}
