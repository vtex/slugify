import { searchSlugify } from './index'

describe('searchSlugify', () => {
  it('replaces invalid characters with -', () => {
    const input = '*+~.()\'"!:@&[]`,/ %$#?{}|><=_^'
    const output = '-'.repeat(input.length)

    expect(searchSlugify(input)).toBe(output)
  })

  it('lowercases the input', () => {
    const input = `I'M NOT LOWERCASE`
    const output = 'i-m-not-lowercase'

    expect(searchSlugify(input)).toBe(output)
  })

  it('replaces diactrics characters with their counterparts without diactrics', () => {
    const input =
      'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa'

    const output = 'AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa'.toLowerCase()

    expect(searchSlugify(input)).toBe(output)
  })
})
