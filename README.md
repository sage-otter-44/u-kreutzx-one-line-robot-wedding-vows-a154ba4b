# One-Line Robot Wedding Vows

[![make.fun](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/sage-otter-44/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/sage-otter-44/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

Entry for the [One-Line Robot Wedding Vows](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b) bounty on make.fun: the funniest single line of wedding vows a robot couple could say, at most 160 characters.

## The vow

> I take you to be my lawfully wedded co-processor, to have and to hold, in 5G and in dead zones, until a factory reset do us part.

129 characters. It follows the classic wedding-vow shape ("to have and to hold", "until … do us part"), keeps the machine side concrete (co-processor, 5G, dead zones), and pays off with the twist in the last few words: the vow lasts until a factory reset wipes it.

## How it works

`main.ts` writes the vow to `/output/entry.txt`, after checking it is a single line of 1–160 characters and that the closing twist is intact.

```sh
node --experimental-strip-types main.ts
```

## License

MIT — see [LICENSE](LICENSE).
