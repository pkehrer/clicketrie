import { BoardLayout, BoardKeySet, BoardRow, BoardKey } from "../../board-layout";
import { KeyData as KD } from '../key-data'
export const Tkl = new BoardLayout(
    [
        new BoardRow([
            new BoardKey({ data: KD.esc }),
            new BoardKeySet({ data: [KD.f1, KD.f2, KD.f3, KD.f4], xoffset: 1 }),
            new BoardKeySet({ data: [KD.f5, KD.f6, KD.f7, KD.f8], xoffset: 0.5 }),
            new BoardKeySet({ data: [KD.f9, KD.f10, KD.f11, KD.f12], xoffset: 0.5 }),
            new BoardKeySet({ data: [KD.prt, KD.scr, KD.pse], xoffset: 0.5 })
        ]),
        new BoardRow([
            new BoardKeySet({ data: [KD.backtick, KD.dig1, KD.dig2, KD.dig3, KD.dig4, KD.dig5, KD.dig6, KD.dig7, KD.dig8, KD.dig9, KD.dig0, KD.minus, KD.equal] }),
            new BoardKey({ width: 2, data: KD.bksp }),
            new BoardKeySet({ data: [KD.ins, KD.hom, KD.pgup], xoffset: 0.5 })
        ], 0.25),
        new BoardRow([
            new BoardKey({ width: 1.5, data: KD.tab }),
            new BoardKeySet({ data: [KD.q, KD.w, KD.e, KD.r, KD.t, KD.y, KD.u, KD.i, KD.o, KD.p, KD.bracketLeft, KD.bracketRight] }),
            new BoardKey({ width: 1.5, data: KD.backslash }),
            new BoardKeySet({ data: [KD.del, KD.end, KD.pgdn], xoffset: 0.5 })
        ]),
        new BoardRow([
            new BoardKey({ width: 1.75, data: KD.caps }),
            new BoardKeySet({ data: [KD.a, KD.s, KD.d, KD.f, KD.g, KD.h, KD.j, KD.k, KD.l, KD.semicolon, KD.quote] }),
            new BoardKey({ width: 2.25, data: KD.enter }),
        ]),
        new BoardRow([
            new BoardKey({ width: 2.25, data: KD.shiftLeft }),
            new BoardKeySet({ data: [KD.z, KD.x, KD.c, KD.v, KD.b, KD.n, KD.m, KD.comma, KD.period, KD.fwdslash] }),
            new BoardKey({ width: 2.75, data: KD.shiftRight }),
            new BoardKey({ data: KD.up, xoffset: 1.5 })
        ]),
        new BoardRow([
            new BoardKeySet({ width: 1.25, data: [KD.ctrlLeft, KD.winkey, KD.altLeft] }),
            new BoardKey({ width: 6.25, data: KD.space }),
            new BoardKeySet({ width: 1.25, data: [KD.altRight, KD.menu, KD.fn, KD.ctrlRight] }),
            new BoardKeySet({ data: [KD.left, KD.down, KD.right], xoffset: 0.5 })
        ])
    ]
)