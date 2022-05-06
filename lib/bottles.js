export class Bottles {
  verse(n) {
    if (n === 0) {
      return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`
    }

    const firstBottle = bottleSingularOrPlural(n + 1)

    return (
      `${n} ${firstBottle} of beer on the wall, ${n} ${firstBottle} of beer.
Take ${oneOrIt(n)} down and pass it around, ${noMore(n)} ` +
      `${bottleSingularOrPlural(n)} of beer on the wall.
`
    )
  }

  verses(max, min) {
    let result = ''

    for (let i = max; i >= min; i--) result += this.verse(i) + (i === min ? '' : '\n')

    return result
  }

  song() {
    return this.verses(99, 0)
  }
}

const oneOrIt = (n) => `${n === 1 ? 'it' : 'one'}`
const noMore = (n) => `${n === 1 ? 'no more' : n - 1}`
const bottleSingularOrPlural = (n) => `bottle${n > 2 || n === 1 ? 's' : ''}`
