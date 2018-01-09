export class BoardKey {
    constructor(
        public width: number,
        public height: number,
        public label: string,
        public xoffset?: number) { }

    public marginPx(): number {
        return 5;
    }

    public heightPx(): number {
        return this.height * 75 + (this.height - 1) * this.marginPx() * 2
    }
    public widthPx(): number {
        return this.width * 75 + (this.width - 1) * this.marginPx() * 2
    }
}

export class BoardRow {
    constructor(
        public keys: BoardKey[]) { }
}

export class BoardLayout {
    constructor(public rows: BoardRow[]) { }
}


