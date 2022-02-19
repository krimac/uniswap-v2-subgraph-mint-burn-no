import {
  Address,
  BigInt,
  log,
} from "@graphprotocol/graph-ts"

// Initialize a Token Definition with the attributes
export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt

  // Initialize a Token Definition with its attributes
  constructor(address: string, symbol: string, name: string, decimals: i32) {
    this.address = Address.fromString(address)
    this.symbol = symbol
    this.name = name
    this.decimals = BigInt.fromI32(decimals)
  }

  // Get all tokens with a static defintion
  static getStaticDefinitions(): Array<TokenDefinition> {
    let staticDefinitions = new Array<TokenDefinition>(0)

    // Add DGD
    let tokenDGD = new TokenDefinition(
      '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a',
      'DGD',
      'DGD',
      9
    )
    staticDefinitions.push(tokenDGD)

    // Add AAVE
    let tokenAAVE = new TokenDefinition(
      '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
      'AAVE',
      'Aave Token',
      18
    )
    staticDefinitions.push(tokenAAVE)

    // Add LIF
    let tokenLIF = new TokenDefinition(
      '0xeb9951021698b42e4399f9cbb6267aa35f82d59d',
      'LIF',
      'Lif',
      18
    )
    staticDefinitions.push(tokenLIF)

    // Add SVD
    let tokenSVD = new TokenDefinition(
      '0xbdeb4b83251fb146687fa19d1c660f99411eefe3',
      'SVD',
      'savedroid',
      18
    )
    staticDefinitions.push(tokenSVD)

    // Add TheDAO
    let tokenTheDAO = new TokenDefinition(
      '0xbb9bc244d798123fde783fcc1c72d3bb8c189413',
      'TheDAO',
      'TheDAO',
      16
    )
    staticDefinitions.push(tokenTheDAO)

    // Add HPB
    let tokenHPB = new TokenDefinition(
      '0x38c6a68304cdefb9bec48bbfaaba5c5b47818bb2',
      'HPB',
      'HPBCoin',
      18
    )
    staticDefinitions.push(tokenHPB)

    return staticDefinitions
  }

  // Helper for hardcoded tokens
  static fromAddress(tokenAddress: Address): TokenDefinition | null {
    let staticDefinitions = this.getStaticDefinitions()
    let tokenAddressHex = tokenAddress.toHexString()

    // Search the definition using the address
    for (let i = 0; i < staticDefinitions.length; i++) {
      let staticDefinition = staticDefinitions[i]
      if (staticDefinition.address.toHexString() == tokenAddressHex) {
        return staticDefinition
      }
    }

    // If not found, return null
    return null
  }

}
