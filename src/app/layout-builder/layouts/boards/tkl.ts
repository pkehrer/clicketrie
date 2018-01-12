import { BoardLayout, BoardKeySet, BoardRow, BoardKey } from "../../board-layout";

export const Tkl = new BoardLayout(
    [
        new BoardRow([
            new BoardKey({ label: 'esc' }),
            new BoardKeySet({ labels: ['f1', 'f2', 'f3', 'f4'], xoffset: 1 }),
            new BoardKeySet({ labels: ['f5', 'f6', 'f7', 'f8'], xoffset: 0.5 }),
            new BoardKeySet({ labels: ['f9', 'f10', 'f11', 'f12'], xoffset: 0.5 }),
            new BoardKeySet({ labels: ['prt', 'scr', 'pse'], xoffset: 0.5 })
        ]),
        new BoardRow([
            new BoardKeySet({ labels: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='] }),
            new BoardKey({ width: 2, label: 'bksp' }),
            new BoardKeySet({ labels: ['ins', 'hom', 'pup'], xoffset: 0.5 })
        ], 0.25),
        new BoardRow([
            new BoardKey({ width: 1.5, label: 'tab' }),
            new BoardKeySet({ labels: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'] }),
            new BoardKey({ width: 1.5, label: '\\' }),
            new BoardKeySet({ labels: ['del', 'end', 'pdn'], xoffset: 0.5 })
        ]),
        new BoardRow([
            new BoardKey({ width: 1.75, label: 'caps' }),
            new BoardKeySet({ labels: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''] }),
            new BoardKey({ width: 2.25, label: 'Enter' }),
        ]),
        new BoardRow([
            new BoardKey({ width: 2.25, label: 'shift' }),
            new BoardKeySet({ labels: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'] }),
            new BoardKey({ width: 2.75, label: 'shift' }),
            new BoardKey({ label: 'up', xoffset: 1.5 })
        ]),
        new BoardRow([
            new BoardKeySet({ width: 1.25, labels: ['ctrl', 'win', 'alt'] }),
            new BoardKey({ width: 6.25, label: 'space' }),
            new BoardKeySet({ width: 1.25, labels: ['alt', 'menu', 'fn', 'ctrl'] }),
            new BoardKeySet({ labels: ['lft', 'dn', 'rgt'], xoffset: 0.5 })
        ])
    ]
)